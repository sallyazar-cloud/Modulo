(function () {
  const periods = (sourceClass, periodData, competencyData = [], levelDescription = "") => ({
    sourceClass,
    ...(levelDescription ? { levelDescription } : {}),
    periods: periodData.map(([title, focus, listening, speaking, reading, writing], index) => ({
      title,
      focus,
      skills: { listening, speaking, reading, writing },
      ...(competencyData.length ? {
        competencies: competencyData
          .filter(([period]) => period === index + 1)
          .map(([, area, title, outcome]) => ({ area, title, outcome }))
      } : {})
    }))
  });

  const collegeProfiles = {
    "Grade 6": {
      sourceClass: "Sixième",
      levelDescription: "CEFR targets: LVB A1; LVA A1+. The five programme culture axes are covered.",
      detailTarget: "two",
      speakingTarget: "a short prepared presentation using familiar phrases and a few linked details",
      interactionTarget: "a simple, familiar exchange with support, repetition, and a clear model",
      readingTarget: "short, concrete texts with familiar words, pictures, and explicit information",
      writingTarget: "three or four simple modelled sentences, a completed form, or a short dictated message",
      writingTask: "Write a short illustrated profile, caption, or message using a familiar model."
    },
    "Grade 7": {
      sourceClass: "Cinquième",
      levelDescription: "CEFR targets: LVB A1+; LVA A2. The plan includes all six culture axes; the programme requires five, including the United Kingdom axis.",
      detailTarget: "three",
      speakingTarget: "a short organized presentation, description, or retelling with simple connectors",
      interactionTarget: "a familiar exchange that includes follow-up questions, clarification, and simple mediation",
      readingTarget: "short familiar texts, identifying their main information, sequence, and purpose",
      writingTarget: "a connected paragraph or short message using familiar models and simple connectors",
      writingTask: "Write a connected profile, story, or message for the period's audience."
    },
    "Grade 8": {
      sourceClass: "Quatrième",
      levelDescription: "CEFR targets: LVB A1+; LVA A2+. The plan includes all six culture axes; the programme requires five, including the Ireland axis.",
      detailTarget: "four",
      speakingTarget: "a clear, organized presentation that explains details and expresses a preference or viewpoint",
      interactionTarget: "a short, purposeful discussion with follow-up, clarification, and supported comparison of viewpoints",
      readingTarget: "familiar and informational texts, identifying main ideas, supporting details, and viewpoint clues",
      writingTarget: "a structured paragraph or short text with relevant details, simple linking, and a clear purpose",
      writingTask: "Write a structured review, travel account, or proposal that supports a clear point."
    },
    "Grade 9": {
      sourceClass: "Troisième",
      levelDescription: "CEFR targets: LVB A2; LVA B1. The plan includes all six culture axes; the programme requires five, including the United States axis.",
      detailTarget: "five",
      speakingTarget: "a coherent presentation that develops an idea, supports an opinion, and responds to a question",
      interactionTarget: "an increasingly independent exchange that compares ideas, clarifies meaning, and relays relevant information",
      readingTarget: "connected texts and media, distinguishing main points, supporting details, and differing perspectives",
      writingTarget: "a coherent multi-paragraph or extended response using evidence, transitions, and an appropriate register",
      writingTask: "Write an evidence-informed article, argument, or proposal for a defined audience."
    }
  };

  const collegePeriods = (grade, themes) => {
    const profile = collegeProfiles[grade];
    const periodData = themes.map(([title, focus, example]) => [
      title,
      focus,
      [
        `Understand a spoken ${example} and notice words, names, and clues about ${focus.toLowerCase()}.`,
        `Identifies the main topic and at least ${profile.detailTarget} relevant details in a clearly presented, level-appropriate audio.`,
        `Listen to a short ${example} and record the main idea and supporting details.`
      ],
      [
        `Present or describe ${focus.toLowerCase()} using English for the current CEFR stage.`,
        `Delivers ${profile.speakingTarget} and makes the cultural topic understandable.`,
        `Give a short ${example} presentation and answer a listener's question.`
      ],
      [
        `Read and interpret a short English text about ${focus.toLowerCase()}.`,
        `Finds the main idea and supporting information in ${profile.readingTarget}.`,
        `Read a period text and complete a main-idea and evidence organizer.`
      ],
      [
        `Write about ${focus.toLowerCase()} for a clear purpose and audience.`,
        `Produces ${profile.writingTarget} with relevant information and checked spelling and punctuation.`,
        profile.writingTask
      ]
    ]);
    const competencies = themes.flatMap(([, focus], index) => {
      const period = index + 1;
      return [
        [period, "Listening", "Listen and interpret", `Understands level-appropriate spoken English about ${focus.toLowerCase()}, identifies its main idea and relevant details, and uses context clues.`],
        [period, "Reading", "Read and interpret", `Understands a level-appropriate written text about ${focus.toLowerCase()}, locates supporting information, and uses text or visual clues to interpret meaning.`],
        [period, "Speaking", "Present and express", `Communicates about ${focus.toLowerCase()} through ${profile.speakingTarget}.`],
        [period, "Interaction and mediation", "React, exchange, and relay information", `Takes part in ${profile.interactionTarget}; checks understanding and relays relevant information about ${focus.toLowerCase()}.`],
        [period, "Writing", "Write for a purpose", `Creates a level-appropriate written response about ${focus.toLowerCase()}: ${profile.writingTarget}.`]
      ];
    });
    return periods(profile.sourceClass, periodData, competencies, profile.levelDescription);
  };

  window.MODULO_GRADE_CURRICULUM = {
    "Grade 1": periods("CP", [
      ["P1 · Greetings and classroom", "Greetings, feelings, and classroom instructions",
        ["Understand familiar greetings and basic classroom instructions.", "Responds appropriately to Hello/Goodbye and carries out at least 4 familiar instructions without translation.", "Greeting routine; Simon Says; follow Listen, Look, Stand up, Sit down."],
        ["Repeat and use greetings, thanks and a simple answer about feelings.", "Produces a recognisable greeting or farewell and repeats/uses a model such as “I’m fine, thank you.”", "Puppet greeting; short greeting exchange; emotion mime."],
        ["Recognise familiar English words when supported by pictures or classroom context.", "Matches a displayed familiar word or expression to its picture/action with support; reading is not the main objective at CP.", "Match Hello/Goodbye cards to classroom scenes."],
        ["Begin to notice written forms of familiar greetings and classroom words.", "Recognises or traces/copies a familiar word when appropriate; no independent written production required.", "Optional word-card matching or tracing."]],
      ["P2 · Colours and numbers", "Colours and numbers from 1 to 10",
        ["Recognise colours and numbers from 1 to 10 in spoken instructions.", "Correctly points to a named colour and identifies/counts familiar quantities in guided tasks.", "Show me blue; number bingo; count objects."],
        ["Name familiar colours and count from 1 to 10 with a model.", "Names selected colours and counts to 10, with pronunciation intelligible enough to be understood.", "Colour hunt; counting pencils or classroom objects."],
        ["Associate colour and number word cards with colours and quantities.", "Matches selected familiar labels/cards to the correct colour or quantity with visual support.", "Picture-word matching; number-card matching."],
        ["Trace or copy selected colour and number words as optional visual reinforcement.", "Copies selected familiar words/numerals legibly with a model; written accuracy is secondary to oral learning.", "Trace colour words or match numerals to word cards."]],
      ["P3 · Animals and body parts", "Familiar animals and body parts",
        ["Identify familiar body parts and animals when named.", "Points to the correct body part or animal picture in response to a familiar spoken word.", "Touch your nose; animal picture identification."],
        ["Name familiar animals and body parts using words or a short model sentence.", "Names selected items and can use “It’s a cat/dog” with support.", "Animal mime; What is it? picture prompt."],
        ["Recognise a small set of body-part and animal labels with pictures.", "Matches familiar words such as cat, dog, head or nose to pictures with support.", "Picture-label matching."],
        ["Begin to copy or trace selected animal/body-part words when useful.", "Copies or traces a selected word from a model; independent spelling is not expected.", "Optional tracing cards."]],
      ["P4 · Food and preferences", "Food words and simple likes/dislikes",
        ["Recognise familiar food words and understand simple preference questions or statements.", "Selects the correct food image when hearing a familiar word or sentence such as “I have an apple.”", "Lunch-box picture listening task."],
        ["Express a simple food preference using “I like…” or “I don’t like…” with support.", "Completes a spoken model with a food word; accepts a gesture or one-word response where appropriate.", "Like/don’t like card sort; class food survey."],
        ["Match familiar food words to pictures.", "Matches selected familiar food labels to images with visual support.", "Food picture-word matching."],
        ["Copy or trace a familiar food word or the frame “I like…” as optional support.", "Copies a modelled word or phrase; the main target remains oral expression.", "Complete a picture-supported phrase by copying."]],
      ["P5 · Review and dialogue", "Greetings, simple questions, colours, and feelings",
        ["Understand familiar greetings and simple questions in a short dialogue.", "Responds appropriately to familiar greetings and recognises a familiar colour or feeling question with support.", "Listen to a model dialogue and select the matching picture."],
        ["Take part in a short, practised dialogue using greetings and familiar vocabulary.", "Completes a brief exchange with a greeting, a simple answer and a farewell, with prompts if needed.", "Puppet role-play or pair mini-dialogue."],
        ["Recognise selected familiar words in picture-supported review activities.", "Matches familiar labels from the year to pictures/actions; this remains supportive rather than a major independent-reading target.", "End-of-year picture-word matching."],
        ["Copy or trace selected familiar words to support a final oral presentation.", "Copies a small number of familiar words from a model; no extended independent writing expected.", "Label three picture cards for an oral role-play."]]
    ]),
    "Grade 2": periods("CE1", [
      ["P1 · Personal information", "Names, ages, numbers, and short introductions",
        ["Understand familiar questions about name and age in a short exchange.", "Identifies the question being asked and responds to “What is your name?” or “How old are you?” with a familiar answer/model.", "Listen and respond with identity cards."],
        ["Introduce oneself and ask a partner’s name and age.", "Uses “My name is…”, “I’m …” and at least one familiar question in a short pair dialogue.", "Pair introduction using fictional identity cards."],
        ["Recognise familiar written forms used in a simple identity exchange.", "Matches name/age phrases or familiar number words to the correct information with support.", "Read an identity card and find name/age."],
        ["Complete short personal-information sentences using a model.", "Completes “My name is…”, “I am…” and “How old are you?” accurately with a word bank/model.", "Sentence completion: is/am/are."]],
      ["P2 · Family and descriptions", "Family words and simple describing words",
        ["Identify family members and simple descriptions in familiar oral language.", "Selects the correct family picture and understands familiar colour/size/emotion words.", "Listen and point to a family member or described picture."],
        ["Name family members and describe a person or object with simple phrases.", "Uses “This is my…” and a simple descriptor such as big/small or happy/sad.", "Present an imaginary family; Guess the picture."],
        ["Recognise familiar family words and simple descriptive sentences.", "Matches family words to pictures and identifies a key descriptor in a short model sentence.", "Family-word matching; read a sentence and select picture."],
        ["Write or complete simple sentences about family and descriptions.", "Completes “This is my…” and a short “It is a big/small…” sentence using a word bank.", "Sentence frames with family and animal pictures."]],
      ["P3 · Animals and abilities", "Animals, actions, and can/can’t",
        ["Understand familiar animal names, actions and simple can/can’t statements.", "Matches an animal to an action and distinguishes familiar examples such as a fish can swim / a horse can’t fly.", "Listen-and-match animal/action quiz."],
        ["Describe what an animal can or cannot do and follow movement instructions.", "Produces a model sentence with “can/can’t” and follows at least 4 of 5 familiar movement instructions.", "Animal-action quiz; movement trail."],
        ["Read or recognise short animal/action sentences supported by pictures.", "Identifies the animal or action described in a familiar sentence.", "Match “A bird can fly” to a picture."],
        ["Complete short sentences using animal vocabulary and can/can’t.", "Completes familiar sentence frames with the appropriate animal/action or can/can’t.", "Fill-in-the-gap worksheet."]],
      ["P4 · Preferences and weather", "Food, hobbies, and familiar weather",
        ["Understand familiar food-preference questions and simple weather descriptions.", "Selects the correct food or weather picture and distinguishes sunny, rainy and cloudy.", "Listen and choose the matching picture."],
        ["Express food preferences, name a hobby and give a simple weather report.", "Uses “I like… / I don’t like…”, names a familiar hobby and gives a modelled weather statement.", "Class survey; mini weather report."],
        ["Recognise food, hobby and weather words in short picture-supported texts.", "Finds a named food/hobby/weather word and matches it to the appropriate picture.", "Read a short caption and identify the image."],
        ["Write short modelled sentences about preferences or weather.", "Completes or copies “I like…”, “I don’t like…” or “It’s sunny/rainy/cloudy” accurately with support.", "Preference sentence frames; weather caption."]],
      ["P5 · Home and presentation", "Rooms, personal information, and a short presentation",
        ["Understand familiar information about a house and a short personal presentation.", "Identifies a room or key information such as age, favourite colour or hobby from a short model presentation.", "Listen and select rooms/details on a picture card."],
        ["Present a fictional character using several familiar sentences.", "Gives a short presentation including name, age, a preference and a favourite colour; uses prompts if needed.", "Meet my character presentation."],
        ["Read familiar phrases in a short presentation or house-themed activity.", "Finds explicit information in short familiar sentences and matches room words to a house plan.", "Read and label rooms; answer simple questions."],
        ["Copy or complete a short supported presentation about a character or home.", "Produces a few linked modelled phrases with a word bank and mostly appropriate familiar vocabulary.", "Complete a character card or label a house."]]
    ]),
    "Grade 3": periods("CE2", [
      ["P1 · Profiles and introductions", "Personal details, hobbies, and spelling names",
        ["Understand short spoken introductions and familiar personal-information questions.", "Extracts at least three familiar details (name, age, place, favourite colour or hobbies) from a short oral introduction.", "Listen to a character introduction and complete a profile."],
        ["Ask and answer personal-information questions and spell a name when asked.", "Gives a short self/character introduction, answers familiar questions and spells a name using English letter names with support as needed.", "Pair interview and alphabet spelling task."],
        ["Read a simple identity card or short personal profile and locate explicit details.", "Correctly answers at least 4 of 5 questions about name, age, place, favourite colour and hobbies.", "Read Sam’s profile and answer questions."],
        ["Complete an identity card and write familiar personal-information sentences.", "Writes/copies key details and produces short modelled sentences with a word bank; familiar forms are mostly accurate.", "Complete a personal profile and write 3–5 sentences with support."]],
      ["P2 · People and portraits", "Appearance, family relationships, and clothes",
        ["Understand a short description of a person or family members.", "Identifies key details such as hair, eyes, height or family relationship from a familiar description.", "Listen to a portrait description and choose the character."],
        ["Describe a person and introduce family members using simple complete sentences.", "Uses he/she and familiar forms such as “He is tall” and “She has long hair” to give at least two relevant details.", "Describe a fictional portrait or family tree."],
        ["Read a short physical description and identify explicit details.", "Answers factual questions about a character’s age, hair, eyes or clothes from a short text.", "Read Lily’s description and answer questions."],
        ["Write short descriptions of a fictional person or family using sentence frames.", "Produces at least 3 relevant modelled sentences; uses familiar vocabulary and he/she with support.", "Write a portrait caption or describe an imaginary family."]],
      ["P3 · Animals and preferences", "Animal abilities, likes, and dislikes",
        ["Understand familiar animal abilities and statements of likes/dislikes.", "Matches spoken can/can’t statements to animals and identifies a speaker’s stated preference.", "Listen-and-match animal abilities; preference check."],
        ["Describe animal abilities and express likes, dislikes and favourite activities.", "Produces understandable sentences using “can/can’t”, “I like/love…” or “I don’t like…” and answers a familiar question.", "Animal quiz and class preference survey."],
        ["Read short statements about animal abilities and preferences.", "Finds explicit information and distinguishes positive/negative preference or can/can’t statements.", "Read short captions and answer questions."],
        ["Write short sentences about animal abilities and personal preferences.", "Writes at least 3 meaningful sentences using familiar models; spelling may be supported by a word bank.", "Write an animal fact card and preference sentences."]],
      ["P4 · Routines and time", "Daily activities, meals, and familiar times",
        ["Understand a short account of daily routine, meals and familiar times.", "Identifies the sequence of familiar daily actions and matches familiar meal/time expressions to the correct moment.", "Listen and order routine pictures; identify meal/time."],
        ["Describe a simple daily routine and answer familiar questions about meals or time.", "Sequences several routine actions orally and uses a familiar time expression such as “at seven o’clock” with support.", "Talk through a daily-routine picture sequence."],
        ["Read a short daily-routine text and retrieve explicit information.", "Answers factual questions and places routine actions in a logical order based on the text.", "Read a routine paragraph and sequence actions."],
        ["Write a short sequence of familiar daily activities using modelled sentences.", "Writes 3–5 short sentences in a logical order using familiar verbs and time expressions, with a word bank if needed.", "Write a simple “My day” paragraph."]],
      ["P5 · Places and presentation", "Familiar places, location words, and an illustrated poster",
        ["Understand short descriptions of familiar places and simple location statements.", "Identifies named places and basic relationships such as near the school from a short spoken description.", "Listen to directions/descriptions and mark locations on a simple plan."],
        ["Describe familiar places and present a short illustrated poster.", "Gives a short presentation including personal details, a description, preferences, a routine and a familiar place, using prompts if needed.", "Present “My English poster” to a partner/class."],
        ["Read a short text or simple plan description and retrieve information about places.", "Answers factual questions about locations and understands familiar words such as school, park, shop, library and near.", "Read a neighbourhood description and locate places."],
        ["Create an illustrated English poster with a short set of familiar sentences.", "Includes the requested content areas and writes/copies 3–5 or more short understandable sentences using familiar vocabulary and models.", "Final illustrated poster: profile, description, likes, routine and place."]]
    ]),
    "Grade 4": periods("CM1 (Grade 4)", [
      ["P1 · Everyday exchanges", "Greetings, familiar classroom messages, clear pronunciation, and known written forms",
        ["Understand familiar questions and classroom instructions spoken slowly and clearly.", "Follows familiar class directions and identifies key details in a short, simple exchange.", "Listen to a greeting and classroom-message routine; choose the matching picture."],
        ["Use familiar greetings and memorized phrases intelligibly in a short exchange.", "Pronounces familiar words clearly and reads a prepared short dialogue with expression.", "Practise and perform a short greeting dialogue."],
        ["Recognize familiar words and phrases in a short model conversation.", "Matches a few written expressions to the correct speaker or meaning.", "Read a model dialogue and match each phrase to its speaker."],
        ["Spell, copy, and write familiar words or phrases from dictation.", "Writes known words legibly and accurately from a model or short dictation.", "Complete an identity card and copy a familiar greeting from dictation."]],
      ["P2 · Stories and retelling", "Sound clues, simple story sequences, oral retelling, and short narratives",
        ["Follow a simple story using sound clues, pictures, and explicit details.", "Links spoken story details to a visual and identifies a simple event or theme.", "Listen to an illustrated story and order its picture cards."],
        ["Retell a brief event or short illustrated story in simple phrases.", "Uses a picture sequence to tell the main events in a recognizable order.", "Retell a familiar story using three picture prompts."],
        ["Identify the narrative sequence in a short, simple illustrated story.", "Places the beginning, key event, and ending in the order supported by the text and pictures.", "Read a short picture story and put its events in order."],
        ["Write briefly about a real or imagined experience using familiar language.", "Writes a few understandable sentences with familiar structures and expressions.", "Write a short story about a memorable or imagined day."]],
      ["P3 · People, feelings, and preferences", "Introductions, familiar places and activities, feelings, and simple texts",
        ["Understand a short familiar message and identify its main people or topic.", "Understands familiar classroom instructions and short phrases when speech is slow and clear.", "Listen to a short message about a person and select its matching picture."],
        ["Introduce yourself or another person, describe familiar people or places, and express likes.", "Uses a practised model and gives a few relevant details about a familiar person, object, activity, or preference.", "Describe a person or favorite activity using picture prompts."],
        ["Understand short everyday messages, announcements, and illustrated information.", "Finds familiar words and retrieves a clear detail from a short text with visual support.", "Read a short message and find who, what, and where."],
        ["Use familiar sentence patterns to describe yourself, others, or a place.", "Writes a few modelled sentences and completes a short, familiar message.", "Write a short note describing a person or a place you like."]],
      ["P4 · Instructions and action", "Listening for steps, checking understanding, and using written directions",
        ["Understand and act on short, familiar oral instructions.", "Follows a short sequence of classroom or game instructions and matches them to visual cues.", "Listen to a simple classroom route or game and carry out the steps."],
        ["Ask for repetition or meaning and repeat a simple instruction to check understanding.", "Uses a familiar phrase to ask for help, clarify a word, or confirm a short instruction.", "Role-play a classroom task: ask for and repeat one instruction."],
        ["Follow short directions in a simple information text, manual, or recipe.", "Finds the required action and follows a short, repeated or familiar written step.", "Read a simple picture-supported recipe and put its steps in order."],
        ["Write or copy a short sequence of familiar instructions.", "Writes a few known action words or steps with a model and visual support.", "Create a three-step picture instruction card."]],
      ["P5 · Share and respond", "Exchanging familiar information and creating short, modelled messages",
        ["Exchange simple information about familiar topics and daily habits.", "Asks and answers familiar questions and responds to a partner using short, practised phrases.", "Interview a partner and report one familiar detail to the class."],
        ["Take part in a brief exchange and respond simply to a partner's feelings or wishes.", "Uses a familiar expression to share a feeling or preference and react to a simple response.", "Share a preference and respond politely to a partner."],
        ["Read a short model message and identify its purpose and key details.", "Finds familiar information in a brief message, card, or simple personal profile.", "Read a model postcard and identify its writer, message, and recipient."],
        ["Use familiar models to write a short description, form, or message.", "Completes a simple information card or writes a short modelled message and a basic response.", "Write a short postcard or class message and reply to a partner."]]
    ], [
      [1, "Interaction", "Establish and close contact", "Uses simple greetings, introductions, polite phrases, and short ways to thank, apologize, accept or refuse, ask a familiar follow-up, and end a conversation."],
      [1, "Speaking", "Pronunciation and prepared expressive reading", "Pronounces memorized words and expressions clearly and reads a prepared short text aloud with expression."],
      [1, "Listening", "Understand a short, familiar message", "Understands familiar classroom instructions and short phrases in a simple exchange when the speaker talks slowly and clearly; notices segments and tone as an A1+ extension."],
      [1, "Writing", "Spell, copy, and write familiar language", "Spells, copies, or writes familiar taught words and phrases from a model or dictation."],
      [2, "Listening", "Follow the thread of a simple story", "Recognizes simple sound clues, connects a spoken story to a visual, and identifies explicit details or a simple theme."],
      [2, "Speaking", "Retell brief events and stories", "Retells a brief event or an illustrated short story using a few simple words and phrases."],
      [2, "Reading", "Identify the narrative sequence", "Recognizes the sequence of a short, clearly illustrated story about familiar daily activities."],
      [2, "Writing", "Write a short personal or imagined narrative", "Writes a brief account of a real or imagined experience using familiar grammatical structures and expressions."],
      [3, "Speaking", "Introduce yourself, express likes, and present others", "Uses a short oral model to introduce self or others and briefly describe familiar people, objects, or animals; can coordinate simple details as an A1+ extension."],
      [3, "Speaking", "Describe familiar people, places, and activities", "Presents a prepared description of a nearby place, person, or activity and expresses likes or favorite activities with familiar phrases."],
      [3, "Interaction", "Express feelings and wishes and respond", "Expresses simple feelings such as happiness, sadness, disappointment, fear, or surprise and responds simply to a partner."],
      [3, "Reading", "Understand short, simple texts", "Recognizes familiar words and understands simple illustrated messages, emails, announcements, short daily-life stories, or basic information."],
      [4, "Listening", "Understand and act on oral instructions", "Matches an oral message to a visual and follows short, familiar instructions to complete a task; recognizes simple permission, ability, or prohibition language."],
      [4, "Interaction", "Clarify a point and check understanding", "Asks for repetition or a word's meaning, spells or repeats familiar language, says when something is unclear, and repeats a known instruction to check it."],
      [4, "Reading", "Process information and act", "Understands and follows short, simple or repeated directions in an information text, manual, or recipe."],
      [5, "Interaction", "Exchange information", "Asks and answers simple, rehearsed questions about familiar topics and daily habits, and responds to simple statements with short expressions."],
      [5, "Writing", "Use familiar structures to build short sentences", "Describes familiar objects or places, writes a few modelled sentences about self or others, and completes a short message using a known model."],
      [5, "Writing", "Write to describe, inform, or express a point of view", "Completes a simple information card, writes or replies to a short modelled message, and gives a simple positive or negative response."]
    ], "CEFR A1 target; A1+ is an extension in selected competencies."),
    "Grade 5": periods("CM2 (Grade 5)", [
      ["P1 · Everyday exchanges", "Polite interaction, clear speech, familiar messages, and known written forms",
        ["Understand classroom instructions and familiar conversations delivered slowly and clearly.", "Identifies the main topic, speakers, and key details in a short familiar message; follows routine classroom directions.", "Listen to a short exchange and complete a speaker-and-topic chart."],
        ["Speak clearly using familiar language and adapt a prepared exchange.", "Pronounces familiar phrases intelligibly, reads a prepared short text expressively, and can briefly explain an idea clearly.", "Perform a short dialogue, then answer one follow-up question."],
        ["Read short messages and identify their purpose and key information.", "Finds details in a familiar message, email, announcement, or short illustrated account.", "Read two short messages and identify their purpose and key detail."],
        ["Spell, copy, and record familiar words and simple phrases.", "Writes known language accurately and can note or reuse a simple dictated phrase.", "Take a short dictation of familiar words and a model sentence."]],
      ["P2 · Stories and retelling", "Understanding story clues, narrative sequence, and short spoken and written retellings",
        ["Follow the main idea of a simple story supported by sound and visual clues.", "Connects an oral narrative to its visual, identifies explicit details, and explains its familiar topic.", "Listen to a short story and complete a beginning-middle-end organizer."],
        ["Retell a brief event or story using pictures or key words.", "Recounts the main events in order and can use a short list of key words to retell a familiar story.", "Retell a story from a picture sequence and key-word list."],
        ["Recognize the narrative thread in a short, illustrated story.", "Orders story events and follows a short, repetitive narrative with visual support.", "Read a short illustrated story and reconstruct its timeline."],
        ["Write a short account of a real or imagined experience.", "Uses familiar structures to write a brief event or story; as an extension, adds simple sentences about self or an imagined character.", "Write a short event or story using a model and sequence words."]],
      ["P3 · People, feelings, and preferences", "Presenting people, describing daily life, expressing reactions, and reading for topic",
        ["Understand a familiar message about people, routines, feelings, or preferences.", "Identifies who is speaking, the topic, and a stated feeling or preference in a clear short message.", "Listen to a short profile and mark the speaker's details and feelings."],
        ["Introduce people, describe familiar life, and explain simple preferences.", "Coordinates several descriptive details, explains a like or dislike, and can compare preferences using simple language.", "Present a familiar person and explain one preference with a reason."],
        ["Understand simple everyday texts and identify their type or topic.", "Finds explicit details in short messages, announcements, illustrated stories, or information texts; identifies the text type or theme as an A1+ extension.", "Read a short announcement and identify its type, topic, and key details."],
        ["Write linked modelled sentences about people, places, activities, or preferences.", "Uses a familiar frame to describe, connect details, and respond to a simple message.", "Write a short profile with connected sentences and a simple response."]],
      ["P4 · Instructions and action", "Following sequences, asking for clarification, and acting on written directions",
        ["Follow a short sequence of oral instructions and identify simple time or place clues.", "Carries out a familiar sequence and recognizes simple language for ability, permission, obligation, or prohibition.", "Listen to a set of game or recipe steps and complete them in order."],
        ["Clarify and confirm information during a familiar task.", "Asks for repetition or clarity, restates a simple instruction, and adds a familiar detail such as a time, date, place, or description.", "Complete an information-gap task by asking for and confirming missing details."],
        ["Use written instructions and information to complete a task.", "Follows short directions in a simple information text, manual, or recipe and acts on the relevant details.", "Read a short recipe or guide and follow its written steps."],
        ["Write a short, clear sequence of steps using familiar language.", "Writes a few ordered instructions using a model and simple time or place words.", "Write and illustrate a short set of instructions for a familiar game."]],
      ["P5 · Share and respond", "Exchanging information, writing connected messages, and presenting a final response",
        ["Exchange information and ideas in familiar, predictable situations.", "Asks and answers questions, shares simple information, and keeps a brief discussion going with support when needed.", "Interview a partner, ask one follow-up, and share a short summary."],
        ["Present familiar information and respond to questions or reactions.", "Delivers a short prepared presentation and responds appropriately to a familiar question or opinion.", "Present a personal or class topic and respond to a partner."],
        ["Read a model message or short information text and use its details.", "Identifies the purpose and key facts in a message, then uses them to complete a simple task.", "Read a short invitation and use its details to plan a response."],
        ["Write connected sentences, short messages, and simple responses.", "Uses a familiar model and simple connectors; writes a short description or message, replies to a comment, or creates a simple notice.", "Write a short invitation or personal message, then draft a suitable reply."]]
    ], [
      [1, "Interaction", "Establish and close contact", "Uses everyday polite greetings and introductions, welcomes others, asks a familiar follow-up, reacts to a response, and closes a conversation appropriately for the situation."],
      [1, "Speaking", "Pronunciation and prepared expressive reading", "Pronounces memorized words and expressions intelligibly and reads a prepared short text expressively; as an A2 extension, speaks briefly and clearly, repeating when needed."],
      [1, "Listening", "Understand a short, familiar message", "Understands classroom instructions and familiar short exchanges; as an A2 extension, follows the gist of a familiar conversation or clearly delivered documentary extract."],
      [1, "Writing", "Spell, copy, and write familiar language", "Spells, copies, or writes familiar taught language and, as an A1+ extension, records and reuses simple dictated phrases."],
      [2, "Listening", "Follow the thread of a simple story", "Uses sound and visual clues to follow a simple story, identifies explicit details, and can follow the gist of a clearly delivered familiar story or report as an A2 extension."],
      [2, "Speaking", "Retell brief events and stories", "Retells brief events or illustrated stories in simple phrases and, as an A2 extension, recounts an event from a short list of key words."],
      [2, "Reading", "Identify the narrative sequence", "Tracks the sequence of a short illustrated story and, as an A1+ extension, follows a brief repetitive narrative."],
      [2, "Writing", "Write a short personal or imagined narrative", "Writes a brief account of a real or imagined experience using familiar structures; as an A1+ extension, writes simple sentences about self or an imagined character."],
      [3, "Speaking", "Introduce yourself, express likes, and present others", "Introduces self or others and describes familiar people, objects, or animals using several simple details; responds to a prompt and self-corrects when needed."],
      [3, "Speaking", "Describe familiar people, places, and activities", "Describes prepared familiar surroundings and daily activities, explains likes or dislikes, and can compare preferences or mention simple plans as an A2 extension."],
      [3, "Interaction", "Express feelings and wishes and respond", "Expresses familiar emotions and reacts to a partner; as an A2 extension, communicates satisfaction, surprise, annoyance, empathy, impatience, or disgust, and expresses agreement or disagreement."],
      [3, "Reading", "Understand short, simple texts", "Understands simple messages, announcements, illustrated daily-life stories, and short informational texts; identifies the text type or topic as an A1+ extension."],
      [4, "Listening", "Understand and act on oral instructions", "Follows familiar short instructions and a simple sequence of steps; recognizes time and place cues and language of permission, ability, obligation, or prohibition."],
      [4, "Interaction", "Clarify a point and check understanding", "Asks for repetition or explanation, restates or partly reformulates an instruction, requests clearer details, and supplies familiar details such as a time, date, or place."],
      [4, "Reading", "Process information and act", "Follows short, familiar written instructions, directions, manuals, or recipes and acts on the information."],
      [5, "Interaction", "Exchange information", "Asks and answers familiar questions and exchanges simple ideas and information in predictable situations or short discussions, with support when needed."],
      [5, "Writing", "Use familiar structures to build short sentences", "Writes short connected sentences using familiar models and simple connectors, including a description, short email, or simple dialogue."],
      [5, "Writing", "Write to describe, inform, or express a point of view", "Completes a simple form, writes or replies to a short message, and gives a simple response; as an A1+ extension, writes a simple notice or personal online message with support."]
    ], "At least CEFR A1; A1+ progression with A2 extensions where appropriate."),
    "Grade 6": collegePeriods("Grade 6", [
      ["P1 · People and characters (Axis 1)", "Portraits, self-portraits, families, fictional characters, and relationships", "character profile"],
      ["P2 · Everyday life (Axis 2)", "Daily routines, school, play, learning, and young people's lives", "school-day interview"],
      ["P3 · Countries and landscapes (Axis 3)", "English-speaking places, natural landscapes, wildlife, and geography", "travel and wildlife report"],
      ["P4 · Imagination, tales, and legends (Axis 4)", "Folklore, heroes, stories, and recurring imaginative themes", "illustrated legend"],
      ["P5 · Arts and feelings (Axis 5)", "Artistic expression and the feelings or ideas it communicates", "artwork review"]
    ]),
    "Grade 7": collegePeriods("Grade 7", [
      ["P1 · Portraits and self-portraits (Axis 1)", "Identity, portraits, self-portraits, and how people present themselves", "portrait and interview"],
      ["P2 · Everyday life, places, rhythms, and seasons (Axis 2)", "Daily settings, routines, time, seasons, and changes in everyday life", "daily-life account"],
      ["P3 · The real and the imaginary (Axis 3)", "How English-language stories blend real settings and imaginative worlds", "story and setting comparison"],
      ["P4 · School and leisure (Axis 4)", "School experiences, hobbies, leisure, and young people's choices", "school and leisure comparison"],
      ["P5 · Languages, places, and stories (Axis 5)", "Connections between language, place, history, and storytelling", "place-based story"],
      ["P6 · The United Kingdom (Axis 6)", "The United Kingdom's diverse places, people, and cultural references", "UK travel guide"]
    ]),
    "Grade 8": collegePeriods("Grade 8", [
      ["P1 · Sport and society (Axis 1)", "Sport, communities, identity, fairness, and social life", "sport profile and viewpoint"],
      ["P2 · Journeys and exploration (Axis 2)", "Travel, exploration, encounters, and discoveries across the English-speaking world", "explorer's account"],
      ["P3 · Cities, villages, and neighbourhoods (Axis 3)", "How places are organized and experienced by the people who live there", "neighbourhood feature"],
      ["P4 · Invent, innovate, create (Axis 4)", "Invention, creativity, design, and how ideas become useful", "invention proposal"],
      ["P5 · Artistic languages and messages (Axis 5)", "How art forms communicate meaning, identity, and emotion", "art or media review"],
      ["P6 · Ireland (Axis 6)", "Ireland's places, heritage, languages, and cultural expression", "Ireland cultural guide"]
    ]),
    "Grade 9": collegePeriods("Grade 9", [
      ["P1 · Meeting others (Axis 1)", "Identity, relationships, intercultural encounters, and understanding others", "intercultural profile"],
      ["P2 · Work: past, present, and future (Axis 2)", "Changing work, careers, skills, and ideas about future working life", "career interview"],
      ["P3 · Journeys and migration (Axis 3)", "Travel, migration, belonging, and individual or collective journeys", "migration narrative"],
      ["P4 · Language and media (Axis 4)", "Media messages, point of view, information, and how language shapes meaning", "media comparison"],
      ["P5 · Forms of engagement (Axis 5)", "Participation, civic action, causes, and ways people create change", "evidence-based campaign"],
      ["P6 · The United States (Axis 6)", "The United States' varied regions, communities, and cultural perspectives", "US regional feature"]
    ])
  };
})();
