const data = [
  {
    question:
      "Which stream, as per your talent, suits you the best to make your career set?",
    option1: {
      option: "Entrepreneurship.",
      weightage: "0.75",
    },
    option2: {
      option: "Engineering.",
      weightage: "1.0",
    },
    option3: {
      option: "Arts.",
      weightage: "0.5",
    },
    option4: {
      option: "Others.",
      weightage: "0.25",
    },
  },
  {
    question: "Which subjects are you interested in?",
    option1: {
      option: "Mathematics.",
      weightage: "1.0",
    },
    option2: {
      option: "Science.",
      weightage: "0.75",
    },
    option3: {
      option: "Astrology",
      weightage: "0.25",
    },
    option4: {
      option: "Others.",
      weightage: "0.5",
    },
  },
  {
    question: "How do you select any stream for your higher studies?",
    option1: {
      option: "Parents force.",
      weightage: "0.5",
    },
    option2: {
      option: "Your interest.",
      weightage: "1.0",
    },
    option3: {
      option: "Passion.",
      weightage: "0.75",
    },
    option4: {
      option: "As your friends joined.",
      weightage: "0.25",
    },
  },
  {
    question: "If you are given freedom of choice, what do you want to do?",
    option1: {
      option: "You will enjoy life for some time.",
      weightage: "0.50",
    },
    option2: {
      option: "You join in college for further studies.",
      weightage: "0.75",
    },
    option3: {
      option: "You will follow your own path to fulfill your wishes and desires.",
      weightage: "1.0",
    },
    option4: {
      option: "None of these.",
      weightage: "0.25",
    },
  },
  {
    question:
      "Engineering offers you a platfom to mould your career. Do you accept?",
    option1: {
      option: "Yes.",
      weightage: "1.0",
    },
    option2: {
      option: "No.",
      weightage: "0.75",
    },
    option3: {
      option: "N/A",
      weightage: "0",
    },
    option4: {
      option: "N/A",
      weightage: "0",
    },
  },
  {
    question:
      "According to you, what could be the main purpose of pursuing engineering in recent days?",
    option1: {
      option: "To be a knowledge bearer of technology.",
      weightage: "0.75",
    },
    option2: {
      option:
        "To come out with innovative ideas for resolving problems technologically.",
      weightage: "0.5",
    },
    option3: {
      option: "Show the world that you owe a certificate.",
      weightage: "1.0",
    },
    option4: {
      option: "None of the above.",
      weightage: "0.25",
    },
  },
  {
    question:
      "In what way an engineering course will provide a foundation for an individual?",
    option1: {
      option: "For development of codes and ethics.",
      weightage: "0.75",
    },
    option2: {
      option:
        "To have the ability to recognize ethical challenges through various approaches.",
      weightage: "1.0",
    },
    option3: {
      option: "Just to survive in this competitive world.",
      weightage: "0.5",
    },
    option4: {
      option: "None of the above.",
      weightage: "0.25",
    },
  },
  {
    question:
      "How does pursuing engineering will give you a chance to improve the world?",
    option1: {
      option: "With conceptual thinking.",
      weightage: "0.5",
    },
    option2: {
      option: "With the help of technological advancements.",
      weightage: "0.75",
    },
    option3: {
      option: "Both (a)and(b).",
      weightage: "1.0",
    },
    option4: {
      option: "None",
      weightage: "0.25",
    },
  },
  {
    question: "What do you think will make you a successful engineer?",
    option1: {
      option:
        "You should commit yourself to continuous professional development.",
      weightage: "0.75",
    },
    option2: {
      option: "Working on improving soft skills.",
      weightage: "0.25",
    },
    option3: {
      option: "Be optimistic and embrace change.",
      weightage: "0.5",
    },
    option4: {
      option: "All of the above.",
      weightage: "1.0",
    },
  },
  {
    question:
      "What made you curious about engineering and not for other domains?",
    option1: {
      option: "Your interest for engineering.",
      weightage: "1.0",
    },
    option2: {
      option: "Practically analyzing the situation and curious to learn.",
      weightage: "0.75",
    },
    option3: {
      option: "Only on Family’s pressure.",
      weightage: "0.5",
    },
    option4: {
      option: "All of the above.",
      weightage: "1.0",
    },
  },
  {
    question:
      "How do you think engineers are responsible to innovate and revolutionize the society?",
    option1: {
      option: "With the help of new technological advancements.",
      weightage: "0.75",
    },
    option2: {
      option: "By Introducing new ideas or startup’s.",
      weightage: "0.5",
    },
    option3: {
      option: "Keeping up with the market strategies.",
      weightage: "0.25",
    },
    option4: {
      option: "All of the above.",
      weightage: "1.0",
    },
  },
  {
    question:
      "What action will you take if you get overloaded at any point of your engineering career?",
    option1: {
      option: "You would leave your career at it’s very crucial time.",
      weightage: "0.5",
    },
    option2: {
      option: "You will rather discuss the problem among your peers.",
      weightage: "1.0",
    },
    option3: {
      option: "You would simply be depressed.",
      weightage: "0.75",
    },
    option4: {
      option: "None of the above.",
      weightage: "0.25",
    },
  },
  {
    question: "What is the difference between Science and Engineering?",
    option1: {
      option:
        "Science is the study of physical world whereas Engineering has no definition.",
      weightage: "0.75",
    },
    option2: {
      option:
        "Science is the study of physical world whereas Engineering includes scientific knowledge to design and process.",
      weightage: "1.0",
    },
    option3: {
      option: "Both (a) and (b) are correct.",
      weightage: "0.5",
    },
    option4: {
      option: "None of the above.",
      weightage: "0.25",
    },
  },
  {
    question: "What is Engineering?",
    option1: {
      option: "The branch of science and technology.",
      weightage: "0.75",
    },
    option2: {
      option:
        "The branch of science and technology concerned with design, machines and structures.",
      weightage: "1.0",
    },
    option3: {
      option: "N/A",
      weightage: "0",
    },
    option4: {
      option: "N/A",
      weightage: "0",
    },
  },
  {
    question:
      "How an individual should maintain a balance between his/her professional and personal life?",
    option1: {
      option: "Keep your personal life private at work.",
      weightage: "0.5",
    },
    option2: {
      option: "Create and adhere to a work schedule.",
      weightage: "0.25",
    },
    option3: {
      option:
        "Tune out all distractions to increase your efficiency and productivity at work.",
      weightage: "0.75",
    },
    option4: {
      option: "All of the above.",
      weightage: "1.0",
    },
  },
  {
    question: "How do you keep yourself organized?",
    option1: {
      option: "Making necessary schedules and deadlines.",
      weightage: "0.5",
    },
    option2: {
      option: "You must give everything a home. ",
      weightage: "0.25",
    },
    option3: {
      option: "keep only what you need at your workplace.",
      weightage: "0.75",
    },
    option4: {
      option: "All of the above.",
      weightage: "1.0",
    },
  },
  {
    question:
      "If you get into Engineering program, how will you present technical concepts to non-technical audience?",
    option1: {
      option:
        "You should never doubt the intelligence of people and assume they must be knowing anything about the topic.",
      weightage: "0.5",
    },
    option2: {
      option: "You should engage them on all levels.",
      weightage: "0.75",
    },
    option3: {
      option: "Ask for their feedbacks.",
      weightage: "0.25",
    },
    option4: {
      option: "Both (b) and (c).",
      weightage: "1.0",
    },
  },
  {
    question:
      "In order to develop your communication skills, what would you choose among the following-",
    option1: {
      option: "You really enjoy talking.",
      weightage: "0.75",
    },
    option2: {
      option: "I will work on my personal communications and speak fluently.",
      weightage: "1.0",
    },
    option3: {
      option: "I will avoid having conversations and prefer to be silent.",
      weightage: "0.25",
    },
    option4: {
      option: "N/A",
      weightage: "0",
    },
  },
  {
    question:
      "Selected to work in a team, teamwork involves communication, but to me-",
    option1: {
      option: "It is just a wastage of time, I’d rather to get to work.",
      weightage: "0.25",
    },
    option2: {
      option: " I would like to hear about people’s ideas.",
      weightage: "1.0",
    },
    option3: {
      option:
        " An opportunity to find more about my co-workers, their hobbies, interests etc.",
      weightage: "0.75",
    },
    option4: {
      option: "N/A",
      weightage: "0",
    },
  },
  {
    question: "Which field interests you the most?",
    option1: {
      option: "Business.",
      weightage: "0.5",
    },
    option2: {
      option: "Arts",
      weightage: "0.75",
    },
    option3: {
      option: "Software development.",
      weightage: "1.0",
    },
    option4: {
      option: "Others.",
      weightage: "0.75",
    },
  },
];
export default data;