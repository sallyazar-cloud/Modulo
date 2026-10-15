const matchingExercises = {
  colors: {
    starter: [["A ripe banana", "Yellow"], ["A strawberry", "Red"], ["Fresh grass", "Green"], ["A clear sky", "Blue"]],
    builder: [["A carrot", "Orange"], ["A grape", "Purple"], ["A flamingo", "Pink"], ["A tree trunk", "Brown"]],
    challenge: [["A cloud", "White"], ["A dark night", "Black"], ["A ripe orange", "Orange"], ["A blueberry", "Blue"]]
  },
  "school-supplies": {
    starter: [["Write a word", "Pencil"], ["Keep notes", "Notebook"], ["Measure a line", "Ruler"], ["Erase a mark", "Eraser"]],
    builder: [["Cut paper", "Scissors"], ["Color a picture", "Crayons"], ["Carry school things", "Backpack"], ["Stick paper", "Glue"]],
    challenge: [["It has pages for notes", "Notebook"], ["It draws straight lines", "Ruler"], ["It carries books on your back", "Backpack"], ["You use them to cut paper", "Scissors"]]
  },
  "classroom-language": {
    starter: [["Your ears are ready", "Listen carefully"], ["Find the board", "Look at the board"], ["Turn to page one", "Open your book"], ["Put your book away", "Close your book"]],
    builder: [["You know the answer", "Raise your hand"], ["Get on your feet", "Stand up"], ["Take a seat", "Sit down"], ["Pay attention with your ears", "Listen carefully"]],
    challenge: [["The teacher wants you to answer", "Raise your hand"], ["The class starts a quiet task", "Sit down"], ["Find the new lesson", "Look at the board"], ["Turn to page five", "Open your book"]]
  },
  alphabet: {
    starter: [["A", "a"], ["B", "b"], ["C", "c"], ["D", "d"]],
    builder: [["G", "g"], ["J", "j"], ["M", "m"], ["R", "r"]],
    challenge: [["Q", "q"], ["T", "t"], ["W", "w"], ["Y", "y"]]
  }
};

const matchLevelButtons = [...document.querySelectorAll(".level-button")];
const matchWordBank = document.querySelector("#matching-words");
const matchTargets = document.querySelector("#matching-targets");
const matchStatus = document.querySelector("#matching-status");
const matchScore = document.querySelector("#matching-score");
let selectedWordChip = null;
let completedMatches = 0;
let matchAudioContext = null;
const feedbackTimeouts = new WeakMap();
const matchLevelSeconds = { starter: 60, builder: 45, challenge: 30 };
const matchLevelNames = {
  starter: "Easy: The Curious Researcher",
  builder: "Medium: The Keen Observer",
  challenge: "Hard: The Language Guru"
};
const matchingTimer = window.createActivityTimer(
  document.querySelector("#matching-timer"),
  () => {
    matchWordBank.querySelectorAll(".match-word").forEach(word => { word.disabled = true; });
    matchTargets.querySelectorAll(".match-target").forEach(target => { target.disabled = true; });
    matchStatus.textContent = "Time is up! Reset matches to try this level once more.";
  }
);

function normalizeMatchText(value) {
  return value.trim().toLowerCase().replace(/[^a-z0-9]/g, "");
}

function playMatchTone(frequency, startTime, duration, type, volume) {
  const oscillator = matchAudioContext.createOscillator();
  const gain = matchAudioContext.createGain();
  oscillator.type = type;
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.exponentialRampToValueAtTime(volume, startTime + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);
  oscillator.connect(gain);
  gain.connect(matchAudioContext.destination);
  oscillator.start(startTime);
  oscillator.stop(startTime + duration);
}

function playMatchSound(isCorrect) {
  const AudioContextConstructor = window.AudioContext;
  if (!AudioContextConstructor) return;
  if (!matchAudioContext) matchAudioContext = new AudioContextConstructor();

  const playCue = () => {
    const now = matchAudioContext.currentTime;
    if (isCorrect) {
      [523.25, 659.25, 783.99].forEach((frequency, index) => {
        playMatchTone(frequency, now + index * 0.1, 0.2, "sine", 0.07);
      });
      return;
    }
    playMatchTone(145, now, 0.2, "square", 0.045);
    [493.88, 587.33].forEach((frequency, index) => {
      playMatchTone(frequency, now + 0.23 + index * 0.13, 0.16, "sine", 0.06);
    });
  };

  if (matchAudioContext.state === "suspended") {
    matchAudioContext.resume().then(playCue).catch(error => {
      console.error("Unable to play matching feedback sound.", error);
    });
  } else {
    playCue();
  }
}

function showIncorrectFeedback(element) {
  clearTimeout(feedbackTimeouts.get(element));
  element.classList.add("is-incorrect");
  feedbackTimeouts.set(element, setTimeout(() => {
    element.classList.remove("is-incorrect");
  }, 900));
}

function renderMatches(level = "starter") {
  const set = matchingExercises[document.body.dataset.worksheet];
  if (!set || !matchWordBank || !matchTargets) return;

  const pairs = set[level];
  const words = pairs.map(([, answer]) => answer);
  const shuffledWords = [...words].sort(() => Math.random() - 0.5);
  matchWordBank.replaceChildren();
  matchTargets.replaceChildren();
  matchStatus.textContent = "";
  document.querySelector("#matching-level").textContent = matchLevelNames[level];
  completedMatches = 0;
  selectedWordChip = null;
  matchingTimer.reset(matchLevelSeconds[level]);

  shuffledWords.forEach(word => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "match-word";
    chip.draggable = true;
    chip.textContent = word;
    chip.dataset.word = normalizeMatchText(word);
    chip.setAttribute("aria-pressed", "false");
    chip.addEventListener("click", () => selectWord(chip));
    chip.addEventListener("dragstart", event => {
      if (!event.dataTransfer) return;
      event.dataTransfer.setData("text/plain", chip.dataset.word);
      event.dataTransfer.effectAllowed = "move";
      selectWord(chip);
    });
    matchWordBank.append(chip);
  });

  pairs.forEach(([clue, answer], index) => {
    const target = document.createElement("button");
    target.type = "button";
    target.className = "match-target";
    target.dataset.answer = normalizeMatchText(answer);
    target.dataset.index = String(index);
    target.setAttribute("aria-label", `Match a word to: ${clue}`);

    const prompt = document.createElement("span");
    prompt.className = "match-prompt";
    prompt.textContent = clue;
    const dropLabel = document.createElement("span");
    dropLabel.className = "match-drop-label";
    dropLabel.textContent = "Drop or select a word here";
    target.append(prompt, dropLabel);
    target.addEventListener("click", () => {
      if (selectedWordChip) matchWordToTarget(selectedWordChip.dataset.word, target);
    });
    target.addEventListener("dragover", event => {
      event.preventDefault();
      if (event.dataTransfer) event.dataTransfer.dropEffect = "move";
      target.classList.add("is-drag-over");
    });
    target.addEventListener("dragleave", () => target.classList.remove("is-drag-over"));
    target.addEventListener("drop", event => {
      event.preventDefault();
      target.classList.remove("is-drag-over");
      const draggedWord = event.dataTransfer?.getData("text/plain");
      if (draggedWord) matchWordToTarget(draggedWord, target);
    });
    matchTargets.append(target);
  });

  updateMatchScore(pairs.length);
}

function selectWord(chip) {
  if (chip.disabled || matchingTimer.expired) return;
  matchingTimer.start();
  matchWordBank.querySelectorAll(".match-word").forEach(word => {
    word.setAttribute("aria-pressed", String(word === chip));
  });
  selectedWordChip = chip;
  matchStatus.textContent = `Selected “${chip.textContent}”. Drag it or choose a clue.`;
}

function matchWordToTarget(word, target) {
  if (target.disabled || matchingTimer.expired) return;
  matchingTimer.start();
  if (word !== target.dataset.answer) {
    matchStatus.textContent = "Not quite. Try another clue for that word.";
    showIncorrectFeedback(target);
    const chip = [...matchWordBank.querySelectorAll(".match-word")].find(item => item.dataset.word === word);
    if (chip) showIncorrectFeedback(chip);
    playMatchSound(false);
    return;
  }

  const chip = [...matchWordBank.querySelectorAll(".match-word")].find(item => item.dataset.word === word);
  const pairs = matchingExercises[document.body.dataset.worksheet][getCurrentLevel()];
  const celebration = document.createElement("span");
  celebration.className = "match-celebration";
  celebration.textContent = "🎩🎉";
  celebration.setAttribute("aria-hidden", "true");
  target.querySelector(".match-drop-label").textContent = pairs[Number(target.dataset.index)][1];
  target.classList.remove("is-incorrect");
  target.classList.add("is-matched");
  target.append(celebration);
  target.disabled = true;
  if (chip) {
    chip.classList.remove("is-incorrect");
    chip.disabled = true;
    chip.setAttribute("aria-pressed", "false");
  }
  selectedWordChip = null;
  completedMatches += 1;
  matchStatus.textContent = "That's a match! Nice work.";
  playMatchSound(true);
  if (completedMatches === pairs.length) matchingTimer.stop();
  updateMatchScore(pairs.length);
}

function getCurrentLevel() {
  return matchLevelButtons.find(button => button.getAttribute("aria-pressed") === "true")?.dataset.level ?? "starter";
}

function updateMatchScore(total) {
  matchScore.textContent = completedMatches === total
    ? `All ${total} matches complete!`
    : `${completedMatches} of ${total} matched`;
}

matchLevelButtons.forEach(button => {
  button.addEventListener("click", () => renderMatches(button.dataset.level));
});
document.querySelector("#reset-matching").addEventListener("click", () => renderMatches(getCurrentLevel()));
renderMatches();
