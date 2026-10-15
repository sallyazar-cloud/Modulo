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

function normalizeMatchText(value) {
  return value.trim().toLowerCase().replace(/[^a-z0-9]/g, "");
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
  completedMatches = 0;
  selectedWordChip = null;

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
  if (chip.disabled) return;
  matchWordBank.querySelectorAll(".match-word").forEach(word => {
    word.setAttribute("aria-pressed", String(word === chip));
  });
  selectedWordChip = chip;
  matchStatus.textContent = `Selected “${chip.textContent}”. Drag it or choose a clue.`;
}

function matchWordToTarget(word, target) {
  if (target.disabled) return;
  if (word !== target.dataset.answer) {
    matchStatus.textContent = "Not quite. Try another clue for that word.";
    return;
  }

  const chip = [...matchWordBank.querySelectorAll(".match-word")].find(item => item.dataset.word === word);
  const pairs = matchingExercises[document.body.dataset.worksheet][getCurrentLevel()];
  target.querySelector(".match-drop-label").textContent = pairs[Number(target.dataset.index)][1];
  target.classList.add("is-matched");
  target.disabled = true;
  if (chip) {
    chip.disabled = true;
    chip.setAttribute("aria-pressed", "false");
  }
  selectedWordChip = null;
  completedMatches += 1;
  matchStatus.textContent = "That's a match! Nice work.";
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
