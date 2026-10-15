(function () {
  const levels = {
    easy: { label: "Easy: The Curious Researcher", seconds: 60, index: 0 },
    medium: { label: "Medium: The Keen Observer", seconds: 45, index: 1 },
    hard: { label: "Hard: The Language Guru", seconds: 30, index: 2 }
  };

  const grades = {
    KG1: {
      label: "KG 1",
      vocabulary: [
        ["Which word names a pet?", ["cat", "sun", "red"], "cat"],
        ["Which word names something you can eat?", ["apple", "chair", "shoe"], "apple"],
        ["Which word means very big?", ["big", "up", "run"], "big"]
      ],
      reading: {
        passage: "Mia has a red ball. She rolls it to Ben. Ben laughs and rolls it back.",
        questions: [
          ["What color is Mia's ball?", ["red", "blue", "green"], "red"],
          ["What does Mia roll?", ["a ball", "a book", "a cup"], "a ball"],
          ["How do Mia and Ben play?", ["They roll the ball to each other.", "They hide the ball.", "They paint the ball."], "They roll the ball to each other."]
        ]
      },
      grammar: [
        ["Choose the word: I ___ happy.", ["am", "is", "are"], "am"],
        ["Choose the word: Two cats ___ here.", ["are", "is", "am"], "are"],
        ["Choose the describing word: The ___ sun shines.", ["bright", "jump", "under"], "bright"]
      ],
      writing: [
        "Draw or write about a favorite toy. Add its name.",
        "Write two words that describe a friend or family member.",
        "Write a sentence about what you and a friend like to do."
      ]
    },
    KG2: {
      label: "KG 2",
      vocabulary: [
        ["Which word names a place to learn?", ["school", "banana", "sleep"], "school"],
        ["Which word means the opposite of happy?", ["sad", "glad", "kind"], "sad"],
        ["Which word describes how a turtle moves?", ["slowly", "blue", "lunch"], "slowly"]
      ],
      reading: {
        passage: "Omar plants a seed in a small pot. He gives it water and puts it by the sunny window. Soon, a green shoot appears.",
        questions: [
          ["What does Omar plant?", ["a seed", "a flower", "a tree"], "a seed"],
          ["Where does Omar put the pot?", ["by a sunny window", "under his bed", "outside the door"], "by a sunny window"],
          ["What helps the seed grow?", ["water and sunshine", "sand and a toy", "paper and glue"], "water and sunshine"]
        ]
      },
      grammar: [
        ["Choose the correct word: She ___ a kite.", ["has", "have", "having"], "has"],
        ["Choose the plural: one box, two ___.", ["boxes", "boxs", "box"], "boxes"],
        ["Choose the complete sentence.", ["The birds are singing.", "Birds singing the.", "Are birds the singing."], "The birds are singing."]
      ],
      writing: [
        "Write one sentence about a plant or animal you like.",
        "Describe a place you enjoy. Tell what you see there.",
        "Write three sentences explaining how to care for a plant."
      ]
    },
    KG3: {
      label: "KG 3",
      vocabulary: [
        ["Which word means to look carefully?", ["notice", "whisper", "carry"], "notice"],
        ["Which word means the opposite of empty?", ["full", "quiet", "early"], "full"],
        ["Which word describes a sound that is easy to hear?", ["loud", "softly", "near"], "loud"]
      ],
      reading: {
        passage: "Lina hears a tiny chirp near the garden gate. She finds a young bird beside a bush. Lina calls her teacher, who helps the bird return to its nest.",
        questions: [
          ["What does Lina hear?", ["a tiny chirp", "a loud bell", "a dog barking"], "a tiny chirp"],
          ["Where is the bird?", ["beside a bush", "in a classroom", "under a table"], "beside a bush"],
          ["Who helps the bird get back to its nest?", ["Lina's teacher", "a neighbor", "Lina's brother"], "Lina's teacher"]
        ]
      },
      grammar: [
        ["Choose the correct word: The bird ___ in the nest.", ["sits", "sit", "sitting"], "sits"],
        ["Choose the correct pronoun: ___ are ready to read.", ["We", "Us", "Our"], "We"],
        ["Choose the sentence with correct punctuation.", ["Where is the nest?", "Where is the nest.", "where is the nest?"], "Where is the nest?"]
      ],
      writing: [
        "Write a sentence about something you noticed outside.",
        "Describe an animal using two describing words.",
        "Write a short beginning, middle, and ending for a story about a bird."
      ]
    },
    "Grade 1": {
      label: "Grade 1",
      vocabulary: [
        ["Which word names a person who helps sick people?", ["doctor", "farmer", "artist"], "doctor"],
        ["Which word means a quick look?", ["glance", "garden", "gentle"], "glance"],
        ["Which word means to make something better?", ["improve", "borrow", "follow"], "improve"]
      ],
      reading: {
        passage: "Jayden visits the library after school. He chooses a book about sea turtles and reads at a quiet table. Before leaving, he returns the book to the desk.",
        questions: [
          ["Where does Jayden go after school?", ["the library", "the park", "the shop"], "the library"],
          ["What is his book about?", ["sea turtles", "trains", "space"], "sea turtles"],
          ["What does Jayden do before leaving?", ["returns the book", "takes a nap", "feeds a turtle"], "returns the book"]
        ]
      },
      grammar: [
        ["Choose the correct verb: The puppy ___ in the yard.", ["plays", "play", "playing"], "plays"],
        ["Choose the plural of child.", ["children", "childs", "childes"], "children"],
        ["Choose the sentence with the correct capital letter.", ["My sister likes music.", "my sister likes music.", "My Sister likes music."], "My sister likes music."]
      ],
      writing: [
        "Write two sentences about a book you enjoy.",
        "Describe a helpful person using three details.",
        "Write a short story about finding an unusual shell. Include a beginning, middle, and ending."
      ]
    },
    "Grade 2": {
      label: "Grade 2",
      vocabulary: [
        ["Which word means to look forward to something?", ["anticipate", "scatter", "repair"], "anticipate"],
        ["Which word means to put things in order?", ["arrange", "wonder", "escape"], "arrange"],
        ["Which word means careful and paying attention?", ["alert", "ordinary", "distant"], "alert"]
      ],
      reading: {
        passage: "Every Saturday, Noura helps at the neighborhood garden. She loosens the soil, waters the seedlings, and pulls small weeds. By summer, the garden is full of tomatoes and herbs.",
        questions: [
          ["When does Noura help in the garden?", ["Every Saturday", "Every Monday", "Only in summer"], "Every Saturday"],
          ["What does she pull from the soil?", ["small weeds", "tomatoes", "large stones"], "small weeds"],
          ["What can you infer about Noura?", ["She is helpful and patient.", "She dislikes plants.", "She visits once a year."], "She is helpful and patient."]
        ]
      },
      grammar: [
        ["Choose the past-tense verb: Yesterday, we ___ a model.", ["built", "build", "building"], "built"],
        ["Choose the correct word: The book is ___ the table.", ["on", "quickly", "bright"], "on"],
        ["Choose the sentence with correct subject-verb agreement.", ["The children walk home.", "The children walks home.", "The children walking home."], "The children walk home."]
      ],
      writing: [
        "Write a note inviting a friend to play. Include the day and activity.",
        "Describe how to care for a garden plant in three steps.",
        "Write a paragraph about a time you helped someone and how it felt."
      ]
    },
    "Grade 3": {
      label: "Grade 3",
      vocabulary: [
        ["Which word means to examine something closely?", ["inspect", "celebrate", "wander"], "inspect"],
        ["Which word means to make or create something?", ["produce", "protect", "predict"], "produce"],
        ["Which word means a result or effect?", ["consequence", "conversation", "collection"], "consequence"]
      ],
      reading: {
        passage: "When the town's old clock stopped, Amira's grandfather opened its wooden case. He showed her the tiny gears and explained how each one moved the next. Together they cleaned the clock, and its hands began ticking again.",
        questions: [
          ["Why did Amira's grandfather open the clock?", ["It had stopped.", "It was new.", "It was too loud."], "It had stopped."],
          ["What did he show Amira inside?", ["tiny gears", "a map", "a battery"], "tiny gears"],
          ["Which detail best shows they solved the problem together?", ["They cleaned the clock and it ticked again.", "They looked at the town.", "They closed the wooden case."], "They cleaned the clock and it ticked again."]
        ]
      },
      grammar: [
        ["Choose the correct verb: The team ___ the final game yesterday.", ["won", "win", "winning"], "won"],
        ["Choose the correct conjunction: I wore a coat ___ it was cold.", ["because", "but", "or"], "because"],
        ["Choose the sentence with correct punctuation.", ["After lunch, we visited the museum.", "After lunch we visited, the museum.", "After, lunch we visited the museum."], "After lunch, we visited the museum."]
      ],
      writing: [
        "Write a paragraph describing a place where you feel comfortable.",
        "Explain how to solve a small everyday problem, using sequence words.",
        "Write a story about repairing something important. Include dialogue and a clear ending."
      ]
    },
    "Grade 4": {
      label: "Grade 4",
      vocabulary: [
        ["Which word means to explain the meaning of something?", ["interpret", "measure", "combine"], "interpret"],
        ["Which word means lasting for a short time?", ["temporary", "ancient", "accurate"], "temporary"],
        ["Which word means to support an idea with facts?", ["justify", "discover", "replace"], "justify"]
      ],
      reading: {
        passage: "A city rooftop can become a useful garden. Containers hold soil where vegetables grow, while nearby buildings block some wind. Rooftop gardens can provide fresh food and give insects a small habitat, though gardeners must plan for water and safe access.",
        questions: [
          ["What is one benefit of a rooftop garden?", ["It can provide fresh food.", "It removes all city buildings.", "It needs no planning."], "It can provide fresh food."],
          ["Why might nearby buildings help the garden?", ["They block some wind.", "They provide more soil.", "They water the plants."], "They block some wind."],
          ["Which challenge does the passage mention?", ["Planning for water and safe access", "Finding enough sunlight at night", "Keeping buildings warm"], "Planning for water and safe access"]
        ]
      },
      grammar: [
        ["Choose the correct verb: Each of the seedlings ___ sunlight.", ["needs", "need", "needing"], "needs"],
        ["Choose the correct pronoun: The team finished ___ project.", ["its", "their", "they"], "its"],
        ["Choose the sentence with a correctly punctuated quotation.", ["Maya said, “The garden is growing.”", "Maya said “The garden is growing”.", "Maya said, “The garden is growing”."], "Maya said, “The garden is growing.”"]
      ],
      writing: [
        "Write a paragraph explaining the benefits of a school garden.",
        "Describe a problem in your community and suggest one practical solution.",
        "Write an opinion paragraph about whether every school should have a garden. Support it with reasons."
      ]
    },
    "Grade 5": {
      label: "Grade 5",
      vocabulary: [
        ["Which word means to make something more effective?", ["enhance", "observe", "reduce"], "enhance"],
        ["Which word means based on evidence rather than guesses?", ["reliable", "fragile", "distant"], "reliable"],
        ["Which word means to bring people or ideas together?", ["unite", "divide", "delay"], "unite"]
      ],
      reading: {
        passage: "Mangrove forests grow where rivers meet the sea. Their tangled roots slow waves and create sheltered places for young fish. Although these forests protect coastlines, clearing them for construction can leave nearby communities more exposed to storms.",
        questions: [
          ["Where do mangroves grow?", ["Where rivers meet the sea", "On dry mountain tops", "Far from any water"], "Where rivers meet the sea"],
          ["How do mangrove roots help young fish?", ["They create sheltered places.", "They carry fish to rivers.", "They make the sea warmer."], "They create sheltered places."],
          ["What can be inferred about clearing mangroves?", ["It may increase storm risks for communities.", "It always improves fishing.", "It stops all waves."], "It may increase storm risks for communities."]
        ]
      },
      grammar: [
        ["Choose the correct verb: Neither of the routes ___ safe after dark.", ["is", "are", "were"], "is"],
        ["Choose the correct word: The students ___ finished their posters.", ["have", "has", "having"], "have"],
        ["Choose the sentence with a correctly placed comma.", ["After the storm, the river rose.", "After, the storm the river rose.", "After the storm the, river rose."], "After the storm, the river rose."]
      ],
      writing: [
        "Write a short explanation of how mangroves protect coastlines.",
        "Write a paragraph comparing two places where people learn.",
        "Write a persuasive letter asking your community to protect a local habitat. Include evidence and a clear request."
      ]
    },
    "Grade 6": {
      label: "Grade 6",
      vocabulary: [
        ["Which word means to reach a conclusion from evidence?", ["deduce", "announce", "translate"], "deduce"],
        ["Which word means able to recover after difficulty?", ["resilient", "cautious", "visible"], "resilient"],
        ["Which word means a difference that can be clearly noticed?", ["contrast", "pattern", "method"], "contrast"]
      ],
      reading: {
        passage: "When a school replaced disposable lunch trays with washable ones, waste fell sharply. The change required more water and staff time for cleaning, so the school tracked both waste and water use. After adjusting the washing schedule, it kept most of the waste reduction without a large rise in water use.",
        questions: [
          ["What was the main result of replacing the trays?", ["Waste fell sharply.", "The school stopped serving lunch.", "Water use disappeared."], "Waste fell sharply."],
          ["Why did the school track water use?", ["Washing trays introduced a new resource cost.", "Students requested more trays.", "The school wanted to measure food waste only."], "Washing trays introduced a new resource cost."],
          ["Which statement best summarizes the passage?", ["The school adjusted a reuse program after measuring its trade-offs.", "Reusable trays never require planning.", "The school chose the option that used the most water."], "The school adjusted a reuse program after measuring its trade-offs."]
        ]
      },
      grammar: [
        ["Choose the correct verb: The list of supplies ___ on the desk.", ["is", "are", "were"], "is"],
        ["Choose the best transition: The route was longer; ___, it was safer.", ["however", "because", "meanwhile"], "however"],
        ["Choose the sentence with a correct apostrophe.", ["The students' projects filled the hall.", "The student's projects filled the hall. (many students)", "The students projects filled the hall."], "The students' projects filled the hall."]
      ],
      writing: [
        "Summarize the passage in two sentences without adding an opinion.",
        "Compare two ways a school could reduce waste. Use a transition to show contrast.",
        "Write an evidence-based recommendation for reducing waste at school. Address one possible drawback."
      ]
    },
    "Grade 7": {
      label: "Grade 7",
      vocabulary: [
        ["Which word means to make a claim seem less convincing?", ["undermine", "preserve", "clarify"], "undermine"],
        ["Which word means a careful examination of evidence?", ["scrutiny", "permission", "departure"], "scrutiny"],
        ["Which word means existing in name but not in practical effect?", ["nominal", "precise", "abundant"], "nominal"]
      ],
      reading: {
        passage: "A town pilot-tested a later bus route for students. Attendance improved on the route, but the trial lasted only one term and involved two schools. Officials called the results promising, while noting that weather, family schedules, and the small sample may also have influenced attendance.",
        questions: [
          ["What changed during the pilot?", ["A later bus route was tested.", "All schools changed their start time.", "The town removed student buses."], "A later bus route was tested."],
          ["Why are the results not conclusive?", ["The trial was limited in length and scope.", "No attendance was recorded.", "The route served the entire town for years."], "The trial was limited in length and scope."],
          ["What is the author's tone toward the results?", ["Cautiously positive", "Completely dismissive", "Certain that one factor caused the change"], "Cautiously positive"]
        ]
      },
      grammar: [
        ["Choose the correct verb: Neither the coach nor the players ___ ready.", ["were", "was", "is"], "were"],
        ["Choose the clearest revision: Because the trial was brief, ___.", ["the results should be interpreted cautiously.", "officials interpreted the results cautiously because.", "cautiously the results."], "the results should be interpreted cautiously."],
        ["Choose the correctly punctuated sentence.", ["The route, which serves two schools, was tested for a term.", "The route which serves two schools was tested, for a term.", "The route, which serves two schools was tested for a term."], "The route, which serves two schools, was tested for a term."]
      ],
      writing: [
        "Write a neutral summary of the bus-route trial in three sentences.",
        "Explain one strength and one limitation of the evidence in the passage.",
        "Write a claim about the pilot program, support it with evidence, and acknowledge a limitation."
      ]
    },
    "Grade 8": {
      label: "Grade 8",
      vocabulary: [
        ["Which word means to examine an idea by considering its parts?", ["analyze", "imitate", "postpone"], "analyze"],
        ["Which word means fair and not influenced by personal interests?", ["impartial", "reluctant", "temporary"], "impartial"],
        ["Which word means to make a statement more qualified or less absolute?", ["temper", "confirm", "expand"], "temper"]
      ],
      reading: {
        passage: "A community archive began collecting oral histories from longtime residents. Recordings preserve details that official documents may omit, such as how a neighborhood changed after a factory closed. Because memories can differ, archivists compare accounts with photographs, newspapers, and public records rather than treating any single recollection as complete.",
        questions: [
          ["What can oral histories preserve?", ["Personal details missing from some official documents", "Only dates from public records", "A single agreed version of every event"], "Personal details missing from some official documents"],
          ["Why do archivists compare several sources?", ["Memories can differ and need context.", "Photographs cannot show neighborhoods.", "Public records are always incorrect."], "Memories can differ and need context."],
          ["Which idea is implied by the passage?", ["Oral histories are valuable, but should be interpreted alongside other evidence.", "Personal memories should replace every archive.", "Different accounts make history impossible to study."], "Oral histories are valuable, but should be interpreted alongside other evidence."]
        ]
      },
      grammar: [
        ["Choose the correct verb: The collection of recordings ___ growing.", ["is", "are", "were"], "is"],
        ["Choose the clearest revision: The account was useful. It needed corroboration.", ["Although useful, the account needed corroboration.", "The account was useful, it needed corroboration.", "Useful the account needed corroboration."], "Although useful, the account needed corroboration."],
        ["Choose the sentence with correct parallel structure.", ["Archivists collect, compare, and preserve accounts.", "Archivists collect, comparing, and accounts are preserved.", "Archivists are collecting, comparison, and preserve accounts."], "Archivists collect, compare, and preserve accounts."]
      ],
      writing: [
        "Explain how two sources could help verify a memory.",
        "Compare the value and limitation of personal accounts and official records.",
        "Write an analytical paragraph explaining how archives can preserve history while requiring careful interpretation."
      ]
    },
    "Grade 9": {
      label: "Grade 9",
      vocabulary: [
        ["Which word means to assess the quality or significance of something?", ["evaluate", "illustrate", "resemble"], "evaluate"],
        ["Which word means supported by relevant, trustworthy evidence?", ["substantiated", "incidental", "ambiguous"], "substantiated"],
        ["Which word means to reduce the force of a claim by recognizing an exception?", ["qualify", "amplify", "restate"], "qualify"]
      ],
      reading: {
        passage: "Cities increasingly use heat maps to identify neighborhoods with high summer temperatures. Tree cover and pavement are often associated with these patterns, but maps alone cannot explain residents' experiences or determine which intervention will work best. Some planners combine temperature readings with local interviews and trial projects, then compare results before expanding a program.",
        questions: [
          ["What can heat maps help cities identify?", ["Neighborhoods with high summer temperatures", "The exact cause of every illness", "Which residents will move"], "Neighborhoods with high summer temperatures"],
          ["Why are maps alone insufficient?", ["They do not capture all local experiences or test solutions.", "They cannot display temperature.", "They contain no information about place."], "They do not capture all local experiences or test solutions."],
          ["Which approach does the passage support?", ["Combine data, community input, and trial projects.", "Expand every plan before evaluating it.", "Use pavement as the only explanation."], "Combine data, community input, and trial projects."]
        ]
      },
      grammar: [
        ["Choose the correct verb: A series of neighborhood interviews ___ planned.", ["is", "are", "were"], "is"],
        ["Choose the clearest revision: The map identified hot areas. It did not explain why.", ["Although the map identified hot areas, it did not explain why.", "The map identified hot areas, it did not explain why.", "The map identified hot areas explaining why not."], "Although the map identified hot areas, it did not explain why."],
        ["Choose the sentence with correct parallel structure.", ["The plan measures temperatures, gathers interviews, and tests solutions.", "The plan measures temperatures, gathering interviews, and solutions are tested.", "The plan is measuring temperatures, interviews, and to test solutions."], "The plan measures temperatures, gathers interviews, and tests solutions."]
      ],
      writing: [
        "Write a concise summary of how cities use heat maps.",
        "Explain why evidence and community perspectives should be considered together.",
        "Develop an evidence-based proposal for addressing neighborhood heat. Include a counterpoint and a way to evaluate results."
      ]
    }
  };

  const gradeOptions = Object.keys(grades);
  const curriculum = window.MODULO_GRADE_CURRICULUM;
  const params = new URLSearchParams(window.location.search);
  const gradeTitle = document.querySelector("#grade-title");
  const subjectSummary = document.querySelector("#subject-summary");
  const periodControl = document.querySelector("#period-control");
  const periodSelect = document.querySelector("#period-select");
  const activityTitle = document.querySelector("#activity-title");
  const activityLevel = document.querySelector("#activity-level");
  const instructions = document.querySelector("#activity-instructions");
  const content = document.querySelector("#activity-content");
  const timerDisplay = document.querySelector("#timer");
  const feedback = document.querySelector("#feedback");
  const checkButton = document.querySelector("#check-answer");
  const retryButton = document.querySelector("#retry-activity");
  const levelButtons = [...document.querySelectorAll("[data-level]")];
  let currentGrade = gradeOptions.includes(params.get("grade")) ? params.get("grade") : null;
  let currentLevel = "easy";
  let currentPeriod = 0;
  let currentSubject = ["vocabulary", "reading", "grammar", "writing", "listening", "speaking"].includes(window.location.hash.slice(1))
    ? window.location.hash.slice(1)
    : "vocabulary";
  let complete = false;
  let practicedLesson = false;
  let listeningUtterance = null;

  function cancelListeningAudio() {
    if (!("speechSynthesis" in window)) return;
    if (listeningUtterance) {
      listeningUtterance.onend = null;
      listeningUtterance.onerror = null;
      listeningUtterance = null;
    }
    window.speechSynthesis.cancel();
  }

  const savedGrade = localStorage.getItem("miss-salma-selected-grade");
  if (!currentGrade && gradeOptions.includes(savedGrade)) currentGrade = savedGrade;
  if (!currentGrade) currentGrade = gradeOptions[0];
  if (!curriculum[currentGrade] && ["listening", "speaking"].includes(currentSubject)) {
    currentSubject = "vocabulary";
  }
  localStorage.setItem("miss-salma-selected-grade", currentGrade);

  function updatePeriodOptions() {
    const gradeCurriculum = curriculum[currentGrade];
    periodControl.hidden = !gradeCurriculum;
    periodSelect.replaceChildren();
    if (!gradeCurriculum) {
      currentPeriod = 0;
      return;
    }
    gradeCurriculum.periods.forEach((period, index) => {
      const option = document.createElement("option");
      option.value = String(index);
      option.textContent = period.title;
      periodSelect.append(option);
    });
    currentPeriod = Math.min(currentPeriod, gradeCurriculum.periods.length - 1);
    periodSelect.value = String(currentPeriod);
  }

  function updateGrade() {
    gradeTitle.textContent = grades[currentGrade].label;
    subjectSummary.textContent = curriculum[currentGrade]
      ? "Vocabulary · Grammar · Listening · Speaking · Reading · Writing"
      : "Vocabulary · Grammar · Reading · Writing";
    document.title = `${grades[currentGrade].label} Activities | Modulo`;
    updatePeriodOptions();
  }

  const timer = window.createActivityTimer(timerDisplay, () => {
    cancelListeningAudio();
    feedback.className = "feedback incorrect";
    feedback.textContent = "Time is up. Try again to have another go.";
    disableInputs(true);
    retryButton.hidden = false;
  });

  function disableInputs(disabled) {
    content.querySelectorAll("select, textarea, button").forEach(input => {
      input.disabled = disabled;
    });
    checkButton.disabled = disabled;
  }

  function renderActivity() {
    cancelListeningAudio();
    const level = levels[currentLevel];
    const item = grades[currentGrade][currentSubject];
    const gradeCurriculum = curriculum[currentGrade];
    const period = gradeCurriculum && gradeCurriculum.periods[currentPeriod];
    let lesson = period && period.skills[currentSubject];
    if (period && currentSubject === "vocabulary") {
      lesson = [
        `Recognise and use key English words about ${period.focus}.`,
        "Identifies and uses familiar words connected to this period’s lesson focus.",
        period.skills.reading[2]
      ];
    } else if (period && currentSubject === "grammar") {
      lesson = [
        `Practise the sentence patterns used when talking about ${period.focus}.`,
        period.skills.speaking[1],
        period.skills.speaking[2]
      ];
    }
    const activity = currentSubject === "reading" && item
      ? item.questions[level.index]
      : (currentSubject === "vocabulary" || currentSubject === "grammar") && item
        ? item[level.index]
        : null;
    complete = false;
    practicedLesson = false;
    timer.reset(level.seconds);
    feedback.className = "feedback";
    feedback.textContent = "";
    retryButton.hidden = true;
    checkButton.disabled = false;
    checkButton.textContent = currentSubject === "listening" || currentSubject === "speaking" ? "Finish lesson" : "Check answer";
    activityLevel.textContent = level.label;
    activityTitle.textContent = {
      vocabulary: "Vocabulary challenge",
      reading: "Reading comprehension",
      grammar: "Grammar practice",
      writing: "Writing workshop",
      listening: "Listening lesson",
      speaking: "Speaking lesson"
    }[currentSubject];
    instructions.textContent = currentSubject === "listening"
      ? "Listen to the spoken lesson task, then mark your practice complete."
      : currentSubject === "speaking"
        ? "Say the lesson task aloud, then mark your speaking practice complete."
        : currentSubject === "reading"
      ? "Read the passage, then answer the question."
      : currentSubject === "writing"
        ? "Write your response in the space below. There is no single right answer."
        : "Choose the best answer, then check your work.";
    content.replaceChildren();

    if (period) {
      const brief = document.createElement("section");
      brief.className = "lesson-brief";
      const heading = document.createElement("h3");
      heading.textContent = `${gradeCurriculum.sourceClass} curriculum · ${period.title}`;
      const focus = document.createElement("p");
      focus.textContent = `Lesson focus: ${period.focus}.`;
      brief.append(heading, focus);

      if (lesson) {
        const details = document.createElement("dl");
        [
          ["Learning objective", lesson[0]],
          ["Success criteria", lesson[1]],
          ["Suggested lesson task", lesson[2]]
        ].forEach(([label, value]) => {
          const term = document.createElement("dt");
          term.textContent = label;
          const description = document.createElement("dd");
          description.textContent = value;
          details.append(term, description);
        });
        brief.append(details);
      } else {
        const connection = document.createElement("p");
        connection.className = "lesson-task";
        connection.textContent = `Apply the words and sentence patterns from this lesson: ${period.focus}.`;
        brief.append(connection);
      }
      content.append(brief);
    }

    if (currentSubject === "listening" || currentSubject === "speaking") {
      const task = document.createElement("p");
      task.className = "question";
      task.textContent = lesson ? lesson[2] : "Practise the current lesson aloud.";
      if (currentSubject === "listening") {
        const playButton = document.createElement("button");
        playButton.type = "button";
        playButton.className = "skill-action";
        playButton.textContent = "Play listening task";
        playButton.addEventListener("click", () => {
          timer.start();
          if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
            practicedLesson = true;
            feedback.className = "feedback incorrect";
            feedback.textContent = "Audio playback is unavailable. Read the lesson task and practise it with a teacher before finishing.";
            return;
          }
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(task.textContent);
          utterance.lang = "en-US";
          utterance.onend = () => {
            if (listeningUtterance !== utterance) return;
            listeningUtterance = null;
            practicedLesson = true;
            feedback.className = "feedback";
            feedback.textContent = "You heard the lesson task. Press Finish lesson when you are ready.";
          };
          utterance.onerror = event => {
            if (listeningUtterance !== utterance) return;
            listeningUtterance = null;
            practicedLesson = true;
            feedback.className = "feedback incorrect";
            feedback.textContent = `Audio playback failed: ${event.error}. Read the lesson task and practise it with a teacher before finishing.`;
          };
          listeningUtterance = utterance;
          window.speechSynthesis.speak(utterance);
        });
        content.append(task, playButton);
      } else {
        const practiceButton = document.createElement("button");
        practiceButton.type = "button";
        practiceButton.className = "skill-action";
        practiceButton.textContent = "I practised speaking aloud";
        practiceButton.addEventListener("click", () => {
          timer.start();
          practicedLesson = true;
          feedback.className = "feedback";
          feedback.textContent = "Well done practising aloud. Press Finish lesson when you are ready.";
        });
        content.append(task, practiceButton);
      }
      return;
    }

    if (currentSubject === "reading" && item) {
      const passage = document.createElement("p");
      passage.className = "passage";
      passage.textContent = item.passage;
      content.append(passage);
    }

    if (currentSubject === "writing") {
      const prompt = document.createElement("p");
      prompt.className = "question";
      prompt.textContent = lesson ? lesson[2] : item[level.index];
      const response = document.createElement("textarea");
      response.className = "writing-response";
      response.id = "writing-response";
      response.setAttribute("aria-label", "Your writing response");
      response.placeholder = "Type your ideas here...";
      response.addEventListener("input", () => timer.start(), { once: true });
      content.append(prompt, response);
      return;
    }

    if (!activity) {
      const unavailable = document.createElement("p");
      unavailable.className = "feedback incorrect";
      unavailable.textContent = "There is no activity available for this grade and subject.";
      content.append(unavailable);
      checkButton.disabled = true;
      return;
    }

    const prompt = document.createElement("p");
    prompt.className = "question";
    prompt.textContent = activity[0];
    const select = document.createElement("select");
    select.className = "answer-select";
    select.setAttribute("aria-label", "Choose your answer");
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "Choose an answer";
    select.append(placeholder);
    activity[1].forEach(answer => {
      const option = document.createElement("option");
      option.value = answer;
      option.textContent = answer;
      select.append(option);
    });
    select.addEventListener("change", () => timer.start(), { once: true });
    content.append(prompt, select);
  }

  function activateSubject(subject) {
    if (!["vocabulary", "reading", "grammar", "writing"].includes(subject)) return;
    currentSubject = subject;
    renderActivity();
  }

  levelButtons.forEach(button => {
    button.addEventListener("click", () => {
      currentLevel = button.dataset.level;
      levelButtons.forEach(item => item.setAttribute("aria-pressed", String(item === button)));
      renderActivity();
    });
  });

  periodSelect.addEventListener("change", () => {
    currentPeriod = Number(periodSelect.value);
    renderActivity();
  });

  window.addEventListener("hashchange", () => activateSubject(window.location.hash.slice(1)));

  checkButton.addEventListener("click", () => {
    if (complete || timer.expired) return;
    timer.start();
    if (currentSubject === "writing") {
      const response = content.querySelector("textarea").value.trim();
      if (!response) {
        feedback.className = "feedback incorrect";
        feedback.textContent = "Add a few words first, then save your writing.";
        return;
      }
      complete = true;
      timer.stop();
      feedback.className = "feedback correct";
      feedback.textContent = "Nice work getting your ideas down. Read them once more and check your punctuation.";
      disableInputs(true);
      return;
    }

    if (currentSubject === "listening" || currentSubject === "speaking") {
      if (!practicedLesson) {
        feedback.className = "feedback incorrect";
        feedback.textContent = currentSubject === "listening"
          ? "Play the listening task before finishing this lesson."
          : "Practise the speaking task aloud before finishing this lesson.";
        return;
      }
      complete = true;
      timer.stop();
      feedback.className = "feedback correct";
      feedback.textContent = currentSubject === "listening"
        ? "Listening practice complete. Great work!"
        : "Speaking practice complete. Great work!";
      disableInputs(true);
      return;
    }

    const answer = content.querySelector("select").value;
    if (!answer) {
      feedback.className = "feedback incorrect";
      feedback.textContent = "Choose an answer first, then check again.";
      return;
    }
    const item = grades[currentGrade][currentSubject];
    const activity = currentSubject === "reading"
      ? item.questions[levels[currentLevel].index]
      : item[levels[currentLevel].index];
    if (answer === activity[2]) {
      complete = true;
      timer.stop();
      feedback.className = "feedback correct";
      feedback.textContent = "That's right! Great work.";
      disableInputs(true);
    } else {
      feedback.className = "feedback incorrect";
      feedback.textContent = "Not quite. Try another answer.";
    }
  });

  retryButton.addEventListener("click", renderActivity);

  updateGrade();
  renderActivity();
})();
