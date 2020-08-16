const data = [
    {
      question:
        "What forms an essential barrier in communication, necessitating one universally acceptable mark, to break the barrier?",
      option1: {
        option: "Slang",
        weightage: "0.5",
      },
      option2: {
        option: "Language",
        weightage: "0.75",
      },
      option3: {
        option: "Jargon",
        weightage: "0.25",
      },
      option4: {
        option: "Expression",
        weightage: "1.0",
      },
      answer: "Language",
    },
    {
      question:
        "Font choices, symbols, facial expressions, body language and timing are all examples of:",
      option1: {
        option: "Verbal Communication",
        weightage: "0.25",
      },
      option2: {
        option: "Technological Communication",
        weightage: "0.5",
      },
      option3: {
        option: "Virtual Communication",
        weightage: "0.75",
      },
      option4: {
        option: "Non-Verbal Communication.",
        weightage: "1.0",
      },
      answer: "Non-Verbal Communication.",
    },
    {
      question: "What can be the initial backlashes of communication?",
      option1: {
        option: "Stage fright",
        weightage: "0.75",
      },
      option2: {
        option: "Fumbling",
        weightage: "0.5",
      },
      option3: {
        option: "Inconsistent word flow",
        weightage: "0.25",
      },
      option4: {
        option: "All of the above.",
        weightage: "1.0",
      },
      answer: "All of the above.",
    },
    {
      question:
        "If you meet someone for the first time, then which is the best way to address?",
      option1: {
        option: "Call him/her by last name with prefixes Miss/ Mr.",
        weightage: "1.0",
      },
      option2: {
        option: "Call him/her by first name.",
        weightage: "0.75",
      },
      option3: {
        option: "Call him/her however you want.",
        weightage: "0.5",
      },
      option4: {
        option: "No need to address.",
        weightage: "0.25",
      },
      answer: "Call him/her by last name with prefixes Miss/ Mr.",
    },
    {
      question:
        "You were given a task to perform at work place which you have never done before. What would you do then?",
      option1: {
        option:
          "Explain to your manager that you have never done it before and volunteer to work if offered guidance by experienced.",
        weightage: "1.0",
      },
      option2: {
        option: "Decline to do the work as it's new to you.",
        weightage: "0.5",
      },
      option3: {
        option:
          "Ask your manager to assign only the work you are familiar with.",
        weightage: "0.75",
      },
      option4: {
        option: "Quit the job as the work given is unused to you.",
        weightage: "0.25",
      },
      answer:
        "Explain to your manager that you have never done it before and volunteer to work if offered guidance by experienced.",
    },
    {
      question:
        "Supposing that you have done an unnoticeable mistake in work. What would be your take on it at that moment?",
      option1: {
        option:
          "Get into flow of the work as the mistake can remain unnoticed.",
        weightage: "0.5",
      },
      option2: {
        option:
          "Resolve the mistake without acknowledging to anyone and get into work flow.",
        weightage: "0.75",
      },
      option3: {
        option:
          "Take responsibility for the mistake and work on it to learn from the errors.",
        weightage: "1.0",
      },
      option4: {
        option: "Skip the work and throw away the blame on others.",
        weightage: "0.25",
      },
      answer:
        "Take responsibility for the mistake and work on it to learn from the errors.",
    },
    {
      question:
        "Consider you are a commander for an army. You have announced a war against a territory and that territory has two ways to enter i.e. North and South. Then how would you leave a command to the army force at the moment?",
      option1: {
        option:
          "I will scatter the team in multiple directions (this decision is taken in a situation bothering about the result).",
        weightage: "0.25",
      },
      option2: {
        option:
          "I will divide the army (decision without bothering about the result).",
        weightage: "0.5",
      },
      option3: {
        option:
          "I will not divide the army, we will attack the territory without any division of army (Bothering about result this decision is taken).",
        weightage: "1.0",
      },
      option4: {
        option:
          "I will send 30% of army and I will ask other 70% to stay for my rescue(Decision made without bothering the result).",
        weightage: "0.75",
      },
      answer:
        "I will not divide the army, we will attack the territory without any division of army (Bothering about result this decision is taken).",
    },
    {
      question:
        " Consider you are leading a team and you need to share the work among the team, then",
      option1: {
        option: ". I will not delegate any work I will complete all that work.",
        weightage: "0.25",
      },
      option2: {
        option: "I will delegate the work among the team equally.",
        weightage: "0.75",
      },
      option3: {
        option:
          "I will take the toughest part and I will delegate all other works to them.",
        weightage: "0.5",
      },
      option4: {
        option:
          "I will distribute the work as per the skills and capabilities of the members and monitor the progress.",
        weightage: "1.0",
      },
      answer:
        "I will distribute the work as per the skills and capabilities of the members and monitor the progress.",
    },
    {
      question:
        "Consider you are the head of a team. You seem to face a major failure because of your project lead. After 3 months, your team succeeded in which your project lead has major share. Now, for both the scenarios, a press meet is arranged. What will be your take in this situation?",
      option1: {
        option:
          "I will inspire and fill courage in him to face the media and even after winning also I will give credit to him only.",
        weightage: "0.5",
      },
      option2: {
        option:
          "I will blame him for the failure and after winning I will say to media,'I want to thank our project lead and team for their huge support'.",
        weightage: "0.25",
      },
      option3: {
        option:
          "I myself will face the media and will take the responsibility for the failure and after winning, I will not attend the press meet.",
        weightage: "0.75",
      },
      option4: {
        option:
          "I myself will take the responsibility of the failure and after winning, I will say that the team worked very hard to claim the success by taking support from me and my project lead and hence reached great heights.",
        weightage: "1.0",
      },
      answer:
        "I myself will take the responsibility of the failure and after winning, I will say that the team worked very hard to claim the success by taking support from me and my project lead and hence reached great heights.",
    },
    {
      question:
        "Imagine that your football team is in the finals. Your team entered the tournament as underdog and you are the captain of your team. What instructions will you give to your team before stepping into the ground for the finals game?",
      option1: {
        option:
          "We reached to a stage where no underdog has ever dreamt of. We have a potential to beat any team which comes across us.",
        weightage: "0.25",
      },
      option2: {
        option:
          "Our Hard work paid off and put us into finals. At least we reached finals which we never thought of making.",
        weightage: "0.5",
      },
      option3: {
        option:
          "Each and every person is important in this team. We reached to this stage with our hardwork. We chipped in with whatever we knew about opposition and formulated plans. We have one more opportunity to express ourself.",
        weightage: "0.75",
      },
      option4: {
        option:
          "Everyone in this has kept 100% of their efforts to bring us to this stage. Now let us increase it to 200% to win one last game to lift the cup.",
        weightage: "1.0",
      },
      answer:
        "Everyone in this has kept 100% of their efforts to bring us to this stage. Now let us increase it to 200% to win one last game to lift the cup.",
    },
    {
      question:
        "'Providing guidance without pressure is a key to being a good leader', do you agree with the statement?",
      option1: {
        option: "Strongly agree.",
        weightage: "1.0",
      },
      option2: {
        option: "Strongly disagree.",
        weightage: "0.25",
      },
      option3: {
        option: "Partially agree.",
        weightage: "0.75",
      },
      option4: {
        option: "Partially disagree.",
        weightage: "0.50",
      },
      answer: "Strongly agree.",
    },
    {
      question:
        "Consider you are participating in a hackathon in which each team consists of 5 members. But your team consists only 4 and you need one more to team up. Whom are you going to select (hackathon starts in 1 month).",
      option1: {
        option: "A talented one who is already committed in another team.",
        weightage: "0.50",
      },
      option2: {
        option:
          "A person who has no skill but wants to spend time and learn the skill.",
        weightage: "1.0",
      },
      option3: {
        option: "A person who wants to participate only for certificate.",
        weightage: "0.75",
      },
      option4: {
        option: "None.",
        weightage: "0.25",
      },
      answer:
        "A person who has no skill but wants to spend time and learn the skill.",
    },
    {
      question:
        "Your mam has asked the class to give a seminar. No one is interested in giving seminars because she asks questions at the end of the seminar. If you do not answer you may get a zero score and your mam starts scolding the whole class, at that time what will you do?",
      option1: {
        option: "I myself will take the stance to give the seminar.",
        weightage: "0.75",
      },
      option2: {
        option:
          "I will motivate my friends too along with my participation so that they will draw inspiration to give seminar.",
        weightage: "1.0",
      },
      option3: {
        option: "I will not do anything.",
        weightage: "0.25",
      },
      option4: {
        option:
          "I will remain unreacted to the scoldings and to the marks I may get but will not give seminar.",
        weightage: "0.5",
      },
      answer:
        "I will motivate my friends too along with my participation so that they will draw inspiration to give seminar.",
    },
    {
      question:
        "Consider you are working in a company in this pandemic time. After two months, you had received your complete salary. One of your closest friends lost his job and is in need of money with only you, being his hope to ask money. You have preset aside some amount from your earnings to donate. Now, to whom will your help contribute to:",
      option1: {
        option: "Your friend who lost his job with worse family situation.",
        weightage: "1.0",
      },
      option2: {
        option: "To those people who don't even have any shelter to live.",
        weightage: "0.75",
      },
      option3: {
        option: "I will donate to orphans.",
        weightage: "0.5",
      },
      option4: {
        option: "I will not donate to anyone.",
        weightage: "0.25",
      },
      answer: "Your friend who lost his job with worse family situation.",
    },
    {
      question:
        "Consider you and your team should cross a pond to reach a place and crossing the pond is the shortest route while the others being the longest paths. What will you do then?",
      option1: {
        option: "I will place bricks across pond.",
        weightage: "0.75",
      },
      option2: {
        option: "I will swim across the pond.",
        weightage: "1.0",
      },
      option3: {
        option: "I will opt for the other direction.",
        weightage: "0.5",
      },
      option4: {
        option: "None.",
        weightage: "0.25",
      },
      answer: "I will swim across the pond.",
    },
    {
      question:
        "Consider You and Arun are best friends working for an organization. You have a great reputation in the company. One day Arun forgot to submit the client’s file. Now, what will you suggest to Arun?",
      option1: {
        option: "You will ask him to apologize the client.",
        weightage: "0.75",
      },
      option2: {
        option: "You will say that failure is a stepping stone to success.",
        weightage: "0.25",
      },
      option3: {
        option:
          "You will offer him support so that client’s file can be submitted as soon as possible.",
        weightage: "1.0",
      },
      option4: {
        option:
          "You will blame him for his mistakes and encourage to be cautious from there on.",
        weightage: "0.5",
      },
      answer:
        "You will offer him support so that client’s file can be submitted as soon as possible.",
    },
    {
      question: "What would you do while working in a group project?",
      option1: {
        option: "I would follow my own understanding of the project. ",
        weightage: "0.25",
      },
      option2: {
        option: "I would refer to previously done similar projects.",
        weightage: "0.75",
      },
      option3: {
        option:
          "I would take suggestions from a person other than my teammates and follow him.",
        weightage: "0.5",
      },
      option4: {
        option:
          "We would discuss the achievement of goals of the course project as a team.",
        weightage: "1.0",
      },
      answer:
        "We would discuss the achievement of goals of the course project as a team.",
    },
    {
      question:
        "If you are into a team for some work and everyone in the team is new to you, what would you do?",
      option1: {
        option: "Start a conversation with them.",
        weightage: "1.0",
      },
      option2: {
        option: "Wait for them to talk to you.",
        weightage: "0.5",
      },
      option3: {
        option: "Do your work without involvement with others.",
        weightage: "0.75",
      },
      option4: {
        option: "Leave that work.",
        weightage: "0.25",
      },
      answer: "Start a conversation with them.",
    },
    {
      question:
        " If your teammates would ask you for feedback what would you do?",
      option1: {
        option: "I would neglect their request.",
        weightage: "0.25",
      },
      option2: {
        option: "I would try to give them helpful feedback.",
        weightage: "1.0",
      },
      option3: {
        option: "I would suggest them to ask someone else.",
        weightage: "0.5",
      },
      option4: {
        option: "I would give them negative feedback so that they can improve.",
        weightage: "0.75",
      },
      answer: "I would try to give them helpful feedback.",
    },
    {
      question: "If you need to do a project what would you like to decide?",
      option1: {
        option: "I will plan to complete the project by my own.",
        weightage: "0.75",
      },
      option2: {
        option:
          "I think that together we can generate better projects than we could do as individuals.",
        weightage: "1.0",
      },
      option3: {
        option: "I would like someone else to do the project for me.",
        weightage: "0.25",
      },
      option4: {
        option: "I would not get into doing projects unless necessary.",
        weightage: "0.5",
      },
      answer:
        "I think that together we can generate better projects than we could do as individuals.",
    },
    {
      question:
        "What would you prefer to do while participating in a discussion forum?",
      option1: {
        option: "I disagree to what others say.",
        weightage: "0.25",
      },
      option2: {
        option:
          "I will make sure people properly understand what I wanted to convey.",
        weightage: "1.0",
      },
      option3: {
        option: "I would not give a chance for others to convey.",
        weightage: "0.5",
      },
      option4: {
        option: "I don't pay attention to other participants understanding.",
        weightage: "0.75",
      },
      answer:
        "I will make sure people properly understand what I wanted to convey.",
    },
    {
      question:
        "Suppose, you are given a product to sell. What would your intitial strategy be in selling that product?",
      option1: {
        option:
          "Will know the demand to the product first and lauch my strategy accordingly to make maximum sales.",
        weightage: "1.0",
      },
      option2: {
        option:
          "Follow the best selling strategy and sell the product on its basis.",
        weightage: "0.75",
      },
      option3: {
        option:
          "Go to a customer, brief him about the product and urge him to buy it.",
        weightage: "0.5",
      },
      option4: {
        option:
          "Sell it to customers at a random price without employing any strategy.",
        weightage: "0.25",
      },
      answer:
        "Will know the demand to the product first and lauch my strategy accordingly to make maximum sales.",
    },
    {
      question:
        "If a customer left a negative feedback about your company product, then how would you respond to him?",
      option1: {
        option: "Will reply him back the way he gave the feedback.",
        weightage: "0.5",
      },
      option2: {
        option:
          "Will respond gently and know what issue/trouble he has faced with the product and assure to rectify/replace the product.",
        weightage: "1.0",
      },
      option3: {
        option:
          "Will reply him in a soothing way that such action will not be repeated in future with no word about the delivered product.",
        weightage: "0.75",
      },
      option4: {
        option: "Delete/hide the feedback from public view.",
        weightage: "0.25",
      },
      answer:
        "Will respond gently and know what issue/trouble he has faced with the product and assure to rectify/replace the product.",
    },
    {
      question:
        "If you have been charged to create a new branding campaign for a product that hasn't been doing well, what will be your process?",
      option1: {
        option:
          "Renew the logo of the same old product attractively and sell it with slight modifications.",
        weightage: "0.25",
      },
      option2: {
        option:
          "Make complete modifications to the product and sell it without checking its functioning.",
        weightage: "0.5",
      },
      option3: {
        option:
          "Remodel the product and market it with the existing startegy of the company.",
        weightage: "0.75",
      },
      option4: {
        option:
          "Acknowledge customers that the product had issues earlier and is being reformulated well. Also assure that the usage now will be fruitful.",
        weightage: "1.0",
      },
      answer:
        "Acknowledge customers that the product had issues earlier and is being reformulated well. Also assure that the usage now will be fruitful.",
    },
    {
      question:
        "You have a team of people who have different ideas and values to market a product. How will you manage with your team?    ",
      option1: {
        option: "Implement my own ideas and strategies to market the product.",
        weightage: "0.75",
      },
      option2: {
        option:
          "Bother least about the opinions and more on the product marketing irrespective of varied ideation conflicts in the team.",
        weightage: "0.25",
      },
      option3: {
        option:
          "Bridge the gap of disagreements with the opinions arised and enable the team to focus on the product rather than the opinion conflict and team up to work unanimously.",
        weightage: "1.0",
      },
      option4: {
        option:
          "Go on sided on the opinion that is in my favour and proceed with the work.",
        weightage: "0.5",
      },
      answer:
        "Bridge the gap of disagreements with the opinions arised and enable the team to focus on the product rather than the opinion conflict and team up to work unanimously.",
    },
    {
      question:
        "On what terms do you measure your customer experience with your product?",
      option1: {
        option: ". Reviews and feedback.",
        weightage: "0.75",
      },
      option2: {
        option:
          "Satisfaction range with the product along with reviews and feedback.",
        weightage: "1.0",
      },
      option3: {
        option: "Only through reviews.",
        weightage: "0.5",
      },
      option4: {
        option: "None.",
        weightage: "0.25",
      },
      answer:
        "Satisfaction range with the product along with reviews and feedback.",
    },
    {
      question:
        "You have joined a new company in which you are made in charge of low performing product. You tried your best for six months, but there is no improvement. What will you do?",
      option1: {
        option: "Quit the company",
        weightage: "0.25",
      },
      option2: {
        option: "Put up a strategy for improvement to senior management",
        weightage: "1.0",
      },
      option3: {
        option: "You would launch a market survey",
        weightage: "0.75",
      },
      option4: {
        option: "Seek increase in the marketing budget",
        weightage: "0.5",
      },
      answer: "Put up a strategy for improvement to senior management",
    },
    {
      question:
        "You have lost one of your star performer from the team to your competitor. What will you do?",
      option1: {
        option: "You will make a case to the management to bring him back",
        weightage: "1.0",
      },
      option2: {
        option:
          "You will identify the next best and prepare a plan for improvement",
        weightage: "0.75",
      },
      option3: {
        option: "Recruit another best from the market",
        weightage: "0.5",
      },
      option4: {
        option: "Accept the loss of the member",
        weightage: "0.25",
      },
      answer: "You will make a case to the management to bring him back",
    },
    {
      question:
        "One of your biggest customers complained about our service and switched to your competition. What will you do?",
      option1: {
        option:
          "Discuss the strategy with management and meet the customer to win back",
        weightage: "1.0",
      },
      option2: {
        option:
          "Figure out on what factors, the competition captured the customer",
        weightage: "0.75",
      },
      option3: {
        option:
          "Speak to the Product / Service Managers of customer pain points",
        weightage: "0.5",
      },
      option4: {
        option: "Accept  the fact, and prepare prevention plan",
        weightage: "0.25",
      },
      answer:
        "Discuss the strategy with management and meet the customer to win back",
    },
    {
      question:
        "Consider that you are late to exam and your invigilator not allowing you to attend exam.",
      option1: {
        option: "You will not write the exam",
        weightage: "0.5",
      },
      option2: {
        option: "You will request her",
        weightage: "0.75",
      },
      option3: {
        option: "You will negotiate with him/her and explains your situation",
        weightage: "1",
      },
      option4: {
        option: "None",
        weightage: "0.25",
      },
      answer: "You will negotiate with him/her and explains your situation",
    },
  ];