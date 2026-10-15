const worksheetData = {
  colors: {
    title: "Colors",
    eyebrow: "A1 English · Colors",
    intro: "Meet common color words, find them in everyday things, and practise spelling them. Take your time and use the color guide whenever you need it.",
    referenceTitle: "Your color palette",
    referenceDescription: "Look at the color, read its name, and use the guide while you practise.",
    referenceItems: [
      { label: "Red", color: "#e34d4d" },
      { label: "Orange", color: "#f28a32" },
      { label: "Yellow", color: "#f5cf43" },
      { label: "Green", color: "#35a86b" },
      { label: "Blue", color: "#4285db" },
      { label: "Purple", color: "#885ac7" },
      { label: "Pink", color: "#eb83aa" },
      { label: "Brown", color: "#8b5a3c" },
      { label: "Black", color: "#29264a" },
      { label: "White", color: "#ffffff" }
    ],
    matching: {
      starter: [
        { prompt: "A ripe banana", answer: "Yellow", color: "#f5cf43" },
        { prompt: "A strawberry", answer: "Red", color: "#e34d4d" },
        { prompt: "Fresh grass", answer: "Green", color: "#35a86b" },
        { prompt: "A clear sky", answer: "Blue", color: "#4285db" }
      ],
      builder: [
        { prompt: "A carrot", answer: "Orange", color: "#f28a32" },
        { prompt: "A grape", answer: "Purple", color: "#885ac7" },
        { prompt: "A flamingo", answer: "Pink", color: "#eb83aa" },
        { prompt: "A tree trunk", answer: "Brown", color: "#8b5a3c" }
      ],
      challenge: [
        { prompt: "A cloud", answer: "White", color: "#ffffff" },
        { prompt: "A dark night", answer: "Black", color: "#29264a" },
        { prompt: "A ripe orange", answer: "Orange", color: "#f28a32" },
        { prompt: "A blueberry", answer: "Blue", color: "#4285db" }
      ]
    },
    activities: {
      starter: [
        { prompt: "What color is a ripe banana?", type: "select", options: ["Yellow", "Blue", "Purple"], answer: "yellow" },
        { prompt: "What color are strawberries usually?", type: "select", options: ["Red", "Green", "Black"], answer: "red" },
        { prompt: "Choose the color of a leaf.", type: "select", options: ["Green", "Pink", "Orange"], answer: "green" },
        { prompt: "Type the missing last letter: B, L, U, __.", type: "text", answer: "e" },
        { prompt: "What color is the sky on a clear day?", type: "select", options: ["Blue", "Brown", "Yellow"], answer: "blue" }
      ],
      builder: [
        { prompt: "What color can you make by mixing red and yellow paint?", type: "select", options: ["Orange", "Green", "Purple"], answer: "orange" },
        { prompt: "Choose the correctly spelled color.", type: "select", options: ["Pnik", "Pink", "Pinc"], answer: "pink" },
        { prompt: "Type the color of chocolate: B, R, O, W, __.", type: "text", answer: "n" },
        { prompt: "Which color comes first alphabetically: green or blue?", type: "select", options: ["Blue", "Green"], answer: "blue" },
        { prompt: "What color is snow?", type: "select", options: ["White", "Brown", "Black"], answer: "white" }
      ],
      challenge: [
        { prompt: "Unscramble the letters to spell a color: E, R, D.", type: "text", answer: "red" },
        { prompt: "Which color can you make by mixing red and yellow paint?", type: "select", options: ["Orange", "Purple", "Green"], answer: "orange" },
        { prompt: "Put these colors in alphabetical order: green, blue, red. Separate them with commas.", type: "text", answer: "blue, green, red" },
        { prompt: "Choose the correctly spelled color.", type: "select", options: ["Purpel", "Purple", "Purpple"], answer: "purple" },
        { prompt: "Which word names a color?", type: "select", options: ["Table", "Purple", "Happy"], answer: "purple" }
      ]
    }
  },
  "school-supplies": {
    title: "School Supplies",
    eyebrow: "A1 English · School words",
    intro: "Explore useful things for school and learn their names. Then practise matching each item to what it does.",
    referenceTitle: "A few things for your school bag",
    referenceDescription: "Look at each picture clue and read the item name.",
    referenceItems: [
      { symbol: "✏️", label: "Pencil", detail: "to write or draw" },
      { symbol: "📓", label: "Notebook", detail: "for notes and ideas" },
      { symbol: "📏", label: "Ruler", detail: "to measure or draw lines" },
      { symbol: "🧽", label: "Eraser", detail: "to remove pencil marks" },
      { symbol: "✂️", label: "Scissors", detail: "to cut paper" },
      { symbol: "🖍️", label: "Crayons", detail: "to color pictures" },
      { symbol: "🎒", label: "Backpack", detail: "to carry school things" },
      { symbol: "🧴", label: "Glue", detail: "to stick things together" }
    ],
    matching: {
      starter: [
        { prompt: "Write a word", answer: "Pencil" },
        { prompt: "Keep notes", answer: "Notebook" },
        { prompt: "Measure a line", answer: "Ruler" },
        { prompt: "Erase a mark", answer: "Eraser" }
      ],
      builder: [
        { prompt: "Cut paper", answer: "Scissors" },
        { prompt: "Color a picture", answer: "Crayons" },
        { prompt: "Carry school things", answer: "Backpack" },
        { prompt: "Stick paper", answer: "Glue" }
      ],
      challenge: [
        { prompt: "It has pages for writing notes", answer: "Notebook" },
        { prompt: "It measures and draws straight lines", answer: "Ruler" },
        { prompt: "It carries books on your back", answer: "Backpack" },
        { prompt: "You use them to cut paper", answer: "Scissors" }
      ]
    },
    activities: {
      starter: [
        { prompt: "Which school supply can you write with?", type: "select", options: ["Pencil", "Eraser", "Ruler"], answer: "pencil" },
        { prompt: "What can you use to erase pencil marks?", type: "select", options: ["Eraser", "Scissors", "Notebook"], answer: "eraser" },
        { prompt: "Which item helps you carry your school things?", type: "select", options: ["Backpack", "Crayon", "Ruler"], answer: "backpack" },
        { prompt: "Which item can cut paper?", type: "select", options: ["Scissors", "Notebook", "Pencil"], answer: "scissors" },
        { prompt: "What can you use to color a picture?", type: "select", options: ["Crayons", "Eraser", "Backpack"], answer: "crayons" }
      ],
      builder: [
        { prompt: "Complete the sentence: I draw a straight line with a ___.", type: "text", answer: "ruler" },
        { prompt: "Choose the item with pages for your notes.", type: "select", options: ["Notebook", "Scissors", "Glue"], answer: "notebook" },
        { prompt: "What do you use to stick paper together?", type: "select", options: ["Glue", "Eraser", "Crayons"], answer: "glue" },
        { prompt: "Type the school supply: B, A, C, K, P, A, C, K.", type: "text", answer: "backpack" },
        { prompt: "Which item removes pencil marks?", type: "select", options: ["Eraser", "Pencil", "Notebook"], answer: "eraser" }
      ],
      challenge: [
        { prompt: "Complete the sentence: I write my notes in a ___.", type: "text", answer: "notebook" },
        { prompt: "Unscramble these letters to name a school bag: C, A, K, P, B, A, C, K.", type: "text", answer: "backpack" },
        { prompt: "Choose the correctly spelled school supply.", type: "select", options: ["Ruller", "Ruler", "Rooler"], answer: "ruler" },
        { prompt: "Which two supplies can you use to draw and color?", type: "select", options: ["Pencil and crayons", "Eraser and backpack", "Scissors and glue"], answer: "pencil and crayons" },
        { prompt: "Complete the sentence: Use ___ to stick paper together.", type: "text", answer: "glue" }
      ]
    }
  },
  "classroom-language": {
    title: "Classroom Language: Commands & Actions",
    eyebrow: "A1 English · Classroom language",
    intro: "Learn common classroom instructions and the actions they ask you to do. You can imagine each action or try it if you feel like it.",
    referenceTitle: "Listen, look, and do",
    referenceDescription: "These are some useful instructions you may hear in class.",
    referenceItems: [
      { symbol: "👂", label: "Listen carefully" },
      { symbol: "👀", label: "Look at the board" },
      { symbol: "📖", label: "Open your book" },
      { symbol: "📕", label: "Close your book" },
      { symbol: "🙋", label: "Raise your hand" },
      { symbol: "🧍", label: "Stand up" },
      { symbol: "🪑", label: "Sit down" }
    ],
    matching: {
      starter: [
        { prompt: "Your ears are ready", answer: "Listen carefully" },
        { prompt: "Find the board", answer: "Look at the board" },
        { prompt: "Turn to page one", answer: "Open your book" },
        { prompt: "Put your book away", answer: "Close your book" }
      ],
      builder: [
        { prompt: "You know the answer", answer: "Raise your hand" },
        { prompt: "Get on your feet", answer: "Stand up" },
        { prompt: "Take a seat", answer: "Sit down" },
        { prompt: "Pay attention with your ears", answer: "Listen carefully" }
      ],
      challenge: [
        { prompt: "The teacher wants you to answer", answer: "Raise your hand" },
        { prompt: "The class starts a quiet task", answer: "Sit down" },
        { prompt: "Find the new lesson", answer: "Look at the board" },
        { prompt: "Turn to page five", answer: "Open your book" }
      ]
    },
    activities: {
      starter: [
        { prompt: "The teacher says, “Stand up.” What should you do?", type: "select", options: ["Stand up", "Sit down", "Open your book"], answer: "stand up" },
        { prompt: "Which instruction asks you to look at the board?", type: "select", options: ["Look at the board", "Close your book", "Sit down"], answer: "look at the board" },
        { prompt: "Complete the instruction: “___ your book to page 3.”", type: "select", options: ["Open", "Stand", "Listen"], answer: "open" },
        { prompt: "What should you do when you want to answer a question?", type: "select", options: ["Raise your hand", "Close your book", "Stand up"], answer: "raise your hand" },
        { prompt: "Which instruction means put your body on a chair?", type: "select", options: ["Sit down", "Listen carefully", "Look at the board"], answer: "sit down" }
      ],
      builder: [
        { prompt: "Complete the command: “Please ___ your hand.”", type: "select", options: ["Raise", "Close", "Listen"], answer: "raise" },
        { prompt: "Which command tells you to find the lesson on the board?", type: "select", options: ["Look at the board", "Sit down", "Open your book"], answer: "look at the board" },
        { prompt: "Complete the command: “___ carefully to your partner.”", type: "text", answer: "listen" },
        { prompt: "What do you do after “Stand up” when the teacher says “Sit down”?", type: "select", options: ["Sit down", "Raise your hand", "Open your book"], answer: "sit down" },
        { prompt: "Which command tells you to turn to a page?", type: "select", options: ["Open your book", "Look at the board", "Raise your hand"], answer: "open your book" }
      ],
      challenge: [
        { prompt: "Complete the command: “Please ___ down.”", type: "text", answer: "sit" },
        { prompt: "Write the command that means move to your feet.", type: "text", answer: "stand up" },
        { prompt: "Which instruction asks students to turn to page 5?", type: "select", options: ["Open your book to page 5.", "Close your book on page 5.", "Raise your hand on page 5."], answer: "open your book to page 5" },
        { prompt: "Complete the command with one word: “___ carefully to your teacher.”", type: "text", answer: "listen" },
        { prompt: "Choose the polite classroom command.", type: "select", options: ["Please close your book.", "You book close.", "Closing book please you."], answer: "please close your book" }
      ]
    }
  }
};

const worksheet = worksheetData[document.body.dataset.worksheet];
const form = document.querySelector("#worksheet-form");
const questionsElement = document.querySelector("#questions");
const focusToggle = document.querySelector("#focus-toggle");
const activityCard = document.querySelector(".activity");
const result = document.querySelector("#result");
const progressTrack = document.querySelector("#progress-track");
let currentLevel = "starter";
let currentQuestion = 0;
let checked = false;
const levelSeconds = { starter: 60, builder: 45, challenge: 30 };
const levelNames = {
  starter: "Easy: The Curious Researcher",
  builder: "Medium: The Keen Observer",
  challenge: "Hard: The language guru"
};
const submitButton = form.querySelector('[type="submit"]');
const activityTimer = window.createActivityTimer(
  document.querySelector("#activity-timer"),
  () => {
    questionsElement.querySelectorAll(".answer-control").forEach(control => { control.disabled = true; });
    submitButton.disabled = true;
    result.textContent = "Time is up! Start again to try this level once more.";
  }
);

function renderReference() {
  document.querySelector("#reference-title").textContent = worksheet.referenceTitle;
  document.querySelector("#reference-description").textContent = worksheet.referenceDescription;
  const grid = document.querySelector("#reference-grid");
  worksheet.referenceItems.forEach(item => {
    const tile = document.createElement("div");
    tile.className = "reference-item";
    if (item.color) {
      const swatch = document.createElement("span");
      swatch.className = "color-swatch";
      swatch.style.setProperty("--swatch", item.color);
      swatch.setAttribute("aria-hidden", "true");
      tile.append(swatch);
    } else {
      const symbol = document.createElement("span");
      symbol.className = "reference-symbol";
      symbol.setAttribute("aria-hidden", "true");
      symbol.textContent = item.symbol;
      tile.append(symbol);
    }
    const label = document.createElement("span");
    label.className = "reference-label";
    label.textContent = item.label;
    tile.append(label);
    if (item.detail) {
      const detail = document.createElement("span");
      detail.className = "reference-detail";
      detail.textContent = item.detail;
      tile.append(detail);
    }
    grid.append(tile);
  });
}

function renderQuestions() {
  const questions = worksheet.activities[currentLevel];
  const levelName = levelNames[currentLevel];
  questionsElement.replaceChildren();

  questions.forEach((question, index) => {
    const card = document.createElement("div");
    card.className = `question-card${index === currentQuestion ? " is-current" : ""}`;
    card.dataset.index = String(index);

    const number = document.createElement("span");
    number.className = "question-number";
    number.setAttribute("aria-hidden", "true");
    number.textContent = String(index + 1);

    const content = document.createElement("div");
    content.className = "question-content";
    const prompt = document.createElement("p");
    prompt.className = "question-prompt";
    prompt.id = `question-${index}`;
    prompt.textContent = question.prompt;

    let control;
    if (question.type === "select") {
      control = document.createElement("select");
      control.className = "answer-control";
      control.setAttribute("aria-label", `Answer for question ${index + 1}`);
      const placeholder = document.createElement("option");
      placeholder.value = "";
      placeholder.textContent = "Choose an answer";
      control.append(placeholder);
      question.options.forEach(option => {
        const choice = document.createElement("option");
        choice.value = option;
        choice.textContent = option;
        control.append(choice);
      });
    } else {
      control = document.createElement("input");
      control.type = "text";
      control.className = "answer-control";
      control.autocomplete = "off";
      control.maxLength = 80;
      control.setAttribute("aria-label", `Type your answer for question ${index + 1}`);
      control.placeholder = "Type your answer";
    }
    control.name = `answer-${index}`;
    control.setAttribute("aria-describedby", `question-${index} feedback-${index}`);
    control.addEventListener("input", updateProgress);
    control.addEventListener("change", updateProgress);

    const feedback = document.createElement("p");
    feedback.className = "feedback";
    feedback.id = `feedback-${index}`;
    feedback.setAttribute("aria-live", "polite");

    content.append(prompt, control, feedback);
    card.append(number, content);
    questionsElement.append(card);
  });

  document.querySelector("#activity-title").textContent =
    `Questions · ${levelName}`;
  document.querySelector("#level-label").textContent = levelName;
  document.querySelector("#level-description").textContent =
    currentLevel === "starter"
      ? "A small set of questions to get started. You have 60 seconds."
      : currentLevel === "builder"
        ? "A little more practice. You have 45 seconds."
        : "Ready for a challenge? You have 30 seconds. You can use the guide above.";
  activityTimer.reset(levelSeconds[currentLevel]);
  submitButton.disabled = false;
  progressTrack.setAttribute("aria-valuemax", String(questions.length));
  document.querySelectorAll(".level-button").forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.level === currentLevel));
  });
  updateProgress();
  updateFocusNavigation();
}

function updateProgress() {
  const controls = [...questionsElement.querySelectorAll(".answer-control")];
  const answered = controls.filter(control => control.value.trim() !== "").length;
  const percent = Math.round(answered / controls.length * 100);
  document.querySelector("#progress-label").textContent = `${answered} of ${controls.length} answered`;
  document.querySelector("#progress-percent").textContent = `${percent}%`;
  document.querySelector("#progress-fill").style.width = `${percent}%`;
  progressTrack.setAttribute("aria-valuenow", String(answered));
}

function updateFocusNavigation() {
  document.querySelector("#previous-button").disabled = currentQuestion === 0;
  document.querySelector("#next-button").disabled = currentQuestion === worksheet.activities[currentLevel].length - 1;
}

function normalized(value) {
  return value.trim().toLowerCase().replace(/[’‘]/g, "'").replace(/[^a-z0-9]/g, "");
}

function checkAnswers(event) {
  event.preventDefault();
  if (activityTimer.expired) return;
  activityTimer.stop();
  const questions = worksheet.activities[currentLevel];
  const controls = [...questionsElement.querySelectorAll(".answer-control")];
  let score = 0;

  controls.forEach((control, index) => {
    const question = questions[index];
    const feedback = document.querySelector(`#feedback-${index}`);
    const isCorrect = normalized(question.answer) === normalized(control.value);
    feedback.classList.remove("correct", "incorrect");
    control.removeAttribute("aria-invalid");

    if (!control.value.trim()) {
      feedback.textContent = `Not answered yet. The answer is “${question.answer}”.`;
      feedback.classList.add("incorrect");
      control.setAttribute("aria-invalid", "true");
    } else if (isCorrect) {
      feedback.textContent = "That's right! Nice work.";
      feedback.classList.add("correct");
      score += 1;
    } else {
      feedback.textContent = `Good try! The answer is “${question.answer}”.`;
      feedback.classList.add("incorrect");
      control.setAttribute("aria-invalid", "true");
    }
  });

  checked = true;
  result.textContent = score === questions.length
    ? `Amazing — ${score} out of ${questions.length}!`
    : `You got ${score} out of ${questions.length}. Try any tricky ones again!`;
}

function resetActivity() {
  checked = false;
  currentQuestion = 0;
  result.textContent = "You've got this!";
  renderQuestions();
  const firstControl = questionsElement.querySelector(".answer-control");
  if (firstControl) firstControl.focus();
}

document.querySelector("#page-title").textContent = worksheet.title;
document.querySelector("#document-title").textContent = `${worksheet.title} | Miss Salma's Hub`;
document.querySelector("#page-eyebrow").textContent = worksheet.eyebrow;
document.querySelector("#page-intro").textContent = worksheet.intro;
renderReference();

document.querySelectorAll(".level-button").forEach(button => {
  button.addEventListener("click", () => {
    if (button.dataset.level === currentLevel) return;
    currentLevel = button.dataset.level;
    resetActivity();
  });
});

focusToggle.addEventListener("click", () => {
  const enabled = focusToggle.getAttribute("aria-pressed") !== "true";
  focusToggle.setAttribute("aria-pressed", String(enabled));
  focusToggle.textContent = `One question at a time: ${enabled ? "On" : "Off"}`;
  activityCard.classList.toggle("focus-mode", enabled);
  updateFocusNavigation();
  if (enabled) {
    const current = questionsElement.querySelector(".is-current .answer-control");
    if (current) current.focus();
  }
});

document.querySelector("#previous-button").addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion -= 1;
    renderFocusCard();
  }
});

document.querySelector("#next-button").addEventListener("click", () => {
  if (currentQuestion < worksheet.activities[currentLevel].length - 1) {
    currentQuestion += 1;
    renderFocusCard();
  }
});

function renderFocusCard() {
  questionsElement.querySelectorAll(".question-card").forEach((card, index) => {
    card.classList.toggle("is-current", index === currentQuestion);
  });
  updateFocusNavigation();
  const current = questionsElement.querySelector(".is-current .answer-control");
  if (current) current.focus();
}

form.addEventListener("submit", checkAnswers);
document.querySelector("#reset-button").addEventListener("click", resetActivity);
form.addEventListener("input", () => activityTimer.start());
form.addEventListener("change", () => activityTimer.start());
form.addEventListener("input", clearFeedbackAfterEdit);
form.addEventListener("change", clearFeedbackAfterEdit);

function clearFeedbackAfterEdit() {
  if (checked) {
    checked = false;
    result.textContent = "Answer changed — check again when you're ready.";
    questionsElement.querySelectorAll(".feedback").forEach(feedback => {
      feedback.textContent = "";
      feedback.classList.remove("correct", "incorrect");
    });
    questionsElement.querySelectorAll("[aria-invalid]").forEach(control => control.removeAttribute("aria-invalid"));
  }
}

renderQuestions();
