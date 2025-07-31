export const resumeData = {
  personal: {
    name: "Kratikpal Singh Dodiya",
    title: "Software Engineer",
    phone: "+91 9617579828",
    email: "kratikpal@gmail.com",
    linkedin: "https://linkedin.com/in/kratikpal",
    leetcode: "https://leetcode.com/kratikpal",
    github: "https://github.com/kratikpal",
  },
  shortSummary:
    "A full-stack developer crafting scalable mobile and web applications. I specialize in Flutter and Java/Spring Boot, with a proven history of enhancing user engagement and delivering significant operational improvements. I build products that are robust, efficient, and user-centric.",
  summary:
    "I am a versatile software developer focused on architecting and building end-to-end solutions. My goal is to create applications that are not only scalable and secure but also provide an intuitive and seamless user experience.\nWith a strong foundation in mobile development with Flutter and backend systems using Java/Spring Boot and Node.js, I enjoy tackling every part of the development lifecycle. I have experience designing and implementing RESTful APIs, engineering role-based access controls, and deploying applications on cloud platforms like AWS and Azure. I'm proud to have delivered features that boosted user compliance by 40% and reached thousands of daily users.\nI'm driven by the challenge of solving complex problems with clean, efficient code. Let's discuss how we can build something great together.",

  skills: {
    "Programming Languages": ["C/C++", "Dart", "Java", "SQL"],
    "Technologies/Frameworks": [
      "Spring Boot",
      "Flutter",
      "RESTful APIs",
      "Firebase",
      "Riverpod",
      "Provider",
      "GetX",
      "Node.js",
      "Express.js",
      "Hibernate",
      "Docker",
    ],
    Databases: ["MySQL", "MongoDB", "Cloud Firestore"],
    Domains: [
      "Backend Development",
      "Mobile App Development",
      "Data Structure and Algorithms",
      "Operating System",
      "Machine Learning",
    ],
    Tools: ["Git", "GitHub", "ChatGPT", "Microsoft Azure", "Razorpay", "N8N"],
    "Soft Skills": [
      "Effective Collaborator",
      "Rapid Learner",
      "Highly Disciplined",
      "Effective Problem Solver",
    ],
  },

  experience: [
    {
      company: "Prismberry Technologies",
      role: "Software Developer Intern",
      duration: "February 2025 - Present",
      achievements: [
        "Implemented automatic lock-in assignment and validation within the goal system, enforcing business rules and reducing manual errors in goal lifecycle by 90%.",
        "Engineered a role-based access control system for lock-in management, ensuring only Admins could edit sensitive review timelines, improving data integrity.",
        "Built a robust automatic email reminder system using Gmail SMTP and cron jobs, sending timely alerts for lock-in periods, meetings, and feedback, boosting compliance by 40%.",
        "Enhanced user experience with features like Days Remaining Calculator and HTML-styled email templates, increasing engagement and clarity across performance checkpoints.",
      ],
    },
    {
      company: "Divine Care",
      role: "Flutter Developer Intern",
      duration: "October 2024 - February 2025",
      link: "https://divinecaresubscriptions.com/#/",
      achievements: [
        "Deployed the DivineCare app across Android, iOS, and web platforms, reaching 5,000+ daily active users.",
        "Implemented a subscription-based model that unlocked access to premium treatment content,increasing user retention.",
        "Integrated Gumlet for secure video streaming, improving content delivery and boosting subscriber satisfaction by 35%.",
        "Enabled Google login via OAuth 2.0 using Firebase, enhancing login security and reducing authentication errors by 80%.",
      ],
    },
    {
      company: "Neonflake Enterprises",
      role: "Flutter Developer Intern",
      duration: "June 2024 - October 2024",
      projects: [
        {
          name: "WhatsApp Keyword Tracking App",
          achievements: [
            "Built a Flutter-based app enabling users to monitor specific WhatsApp keywords, improving productivity for 1K+ users.",
            "Integrated Razor pay for handling in-app purchases, resulting in increased revenue by 30%.",
            "Utilized Get X for efficient state management, ensuring a responsive and smooth user experience.",
          ],
        },
        {
          name: "Cheminova Territory Manager App",
          achievements: [
            "Implemented a robust KYC verification system, enabling the organization to now verify the 100% of users.",
            "Implemented an attendance system, allowing the organization to keep track of employee attendance, which resulted in improved workforce management.",
            "Worked on the back end using Node.js and Express.js to efficiently manage KYC data.",
          ],
        },
      ],
    },
  ],

  education: [
    {
      institution: "University of Delhi",
      degree: "Master of Computer Applications",
      duration: "September 2023 - July 2025",
      score: "CGPA: 7.0",
    },
    {
      institution: "Holkar Science College",
      degree: "Bachelor of Computer Applications",
      duration: "August 2020 - September 2023",
      score: "71.20%",
    },
  ],

  projects: [
    {
      name: "Intelligent Job Application Automation System",
      technologies: [
        "n8n Workflow Automation",
        "Google Gemini AI",
        "LangChain",
        "Gmail API",
        "PDF Processing",
      ],
      description: [
        "Created a fully automated system that slashed the time spent on a single job application from over 2 hours to just 15 minutes.",
        "Used Google's Gemini AI to read my resume, find the best-fitting jobs, and write personalized emails to recruiters for each application.",
        "Increased the number of job applications I could send by 300% by building an intelligent pipeline that handled everything automatically.",
        "Developed a smart web scraper for LinkedIn that boosted the quality of job leads by 40% by filtering out irrelevant listings.",
        "Built an AI-powered career assistant that analyzed job descriptions to ensure my applications were highly targeted and relevant.",
        "Automated the entire tracking process by connecting to the Google Sheets API, creating a real-time log of every application sent.",
      ],
    },
    {
      name: "Quiz App",
      github: "https://github.com/kratikpal/quiz-app",
      liveLink: "https://proud-field-0a891c400.6.azurestaticapps.net/",
      technologies: [
        "Java",
        "Spring Boot",
        "MongoDB",
        "Razorpay",
        "Microsoft Azure",
      ],
      description: [
        "Designed an email verification system with OTP, enhancing user security and ensuring valid account registrations",
        "Implemented a subscription-based model, generating consistent revenue and improving user retention",
        "Integrated Razorpay as a payment gateway, streamlining secure payments for premium users",
        "Developed a feature to store and analyze users' results and their selected answers, providing personalized feedback and insights",
        "Deployed the application on Microsoft Azure, ensuring scalability and high availability for users",
      ],
    },

    {
      name: "Online Compiler",
      github: "https://github.com/kratikpal/online_compiler",
      technologies: [
        "Java",
        "Spring Boot",
        "Docker",
        "REST API",
        "AWS EC2",
        "AWS Elastic Containers",
      ],
      description: [
        "Developed an online compiler using Spring Boot, enabling real-time code compilation for C++, Java, and Python.",
        "Implemented RESTful APIs and microservices architecture for seamless flow between frontend and backend.",
        "Designed and deployed scalable services using Docker and Eureka Server for service discovery, improving system reliability and horizontal scalability.",
        "Deployed on AWS EC2 with AWS Elastic Container Service (ECS) to leverage automated scaling.",
        "Leveraged Spring Cloud components (Eureka Server, API Gateway) to implement service discovery and centralized routing, enabling seamless communication between microservices",
      ],
    },
    {
      name: "Library Management System",
      github: "https://github.com/kratikpal/library-management",
      technologies: [
        "Java",
        "Spring Boot",
        "MongoDB",
        "JWT",
        "Spring Security",
      ],
      description: [
        "Developed a book reservation system using Spring Boot, enabling users to easily reserve and track books",
        "Implemented secure authentication with JWT tokens, ensuring user data privacy and system security",
        "Integrated an email reminder system to notify users about the due dates, improving book return rates and user engagement",
      ],
    },
    {
      name: "Video Post App",
      github: "https://github.com/kratikpal/video-post-app",
      technologies: [
        "Flutter",
        "Firebase",
        "Cloud Firestore",
        "Authentication",
        "Geolocator",
      ],
      description: [
        "Developed a video sharing app enabling users to title and share their videos with ease",
        "Implemented OTP-based mobile authentication with Firebase, ensuring secure user access",
        "Integrated geolocator to display video upload locations, using Cloud Firestore for reliable data management",
      ],
    },
    {
      name: "Song Recommender System",
      github: "https://github.com/kratikpal/song-recommender",
      liveLink: "https://colab.research.google.com/drive/your-colab-link",
      technologies: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Scikit-surprise",
        "Matplotlib",
      ],
      description: [
        "A music recommender system that suggests Hindi songs based on both content-based and collaborative filtering techniques",
        "Implemented content-based filtering using KNN, leveraging features like energy, tempo, noise, and other song attributes",
        "Implemented collaborative filtering using SVD to offer recommendations based on user preferences",
      ],
    },
    {
      name: "AudioVibe",
      github: "https://github.com/kratikpal/audiovibe",
      technologies: [
        "Dart",
        "Flutter",
        "Riverpod",
        "REST API",
        "Just Audio",
        "Node.js",
        "JWT",
        "MongoDB",
      ],
      description: [
        "Music streaming app with 1M+ tracks and song categories",
        "Used YouTube Explode and Just Audio for seamless playback",
        "Implemented JWT-based authentication with Bcrypt",
        "Built APIs to track and store user listening history",
      ],
    },
  ],
};
