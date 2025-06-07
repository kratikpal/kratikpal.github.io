export const resumeData = {
  personal: {
    name: "Kratikpal Singh Dodiya",
    title: "Software Engineer",
    phone: "+91 9617579828",
    email: "kratikpal@gmail.com",
    linkedin: "https://linkedin.com/in/kratikpal",
    leetcode: "https://leetcode.com/kratikpal",
    github: "https://github.com/kratikpal"
  },
  summary: "Software Engineer with extensive expertise in Data Structures and Algorithms and a proven track record in developing and deploying high-performance apps. Demonstrated experience as a Software Developer intern at PrismBerry Technologies, creating efficient, user-centric apps. Skilled in remote collaboration with the delivery of robust and intuitive solutions.",
  
  skills: {
    "Programming Languages": ["C/C++", "Dart", "Java", "SQL", "Python"],
    "Technologies/Frameworks": ["Flutter", "Spring Boot", "RESTful APIs", "Firebase", "Riverpod", "Provider", "GetX", "Scikit-learn", "Pandas", "NumPy"],
    "Databases": ["MySQL", "MongoDB", "Cloud Firestore"],
    "Domains": ["Mobile App Development", "Backend Development", "Data Structure and Algorithms", "Operating System", "Machine Learning"],
    "Tools": ["Git", "GitHub", "ChatGPT", "Codium", "Microsoft Azure", "Razorpay"],
    "Soft Skills": ["Effective Collaborator", "Rapid Learner", "Highly Disciplined", "Effective Problem Solver"]
  },

  experience: [
    {
      company: "Prismberry Technologies",
      role: "Software Developer Intern",
      duration: "February 2025 - Present",
      achievements: [
        "Developed a REST API using Spring Boot and MongoDB to store data for library management systems",
        "Used Spring Security with JWT tokens for token-based and role-based authentication",
        "Created cron jobs to send reminder emails to users for book return deadlines"
      ]
    },
    {
      company: "Divine Care",
      role: "Flutter Developer Intern",
      duration: "October 2024 - February 2025",
      link: "https://divinecaresubscriptions.com/#/",
      achievements: [
        "App deployed on Android, iOS, and Web for a multi-platform experience",
        "Integrated Gumlet and YouTube for secure and diverse video content",
        "Implemented OAuth 2.0 with Firebase and Spring Boot for Google login"
      ]
    },
    {
      company: "Neonflake Enterprises",
      role: "Flutter Developer Intern",
      duration: "June 2024 - October 2024",
      projects: [
        {
          name: "WhatsApp Keyword Tracking App",
          achievements: [
            "Built a Flutter app to track specific keywords in WhatsApp",
            "Integrated Razorpay for in-app purchases, increasing revenue by 30%",
            "Used GetX for efficient state management"
          ]
        },
        {
          name: "Cheminova Territory Manager App",
          achievements: [
            "Implemented KYC verification to validate 100% of users",
            "Built an attendance system for employee tracking",
            "Managed backend with Node.js and Express.js"
          ]
        }
      ]
    }
  ],

  education: [
    {
      institution: "University of Delhi",
      degree: "Master of Computer Applications",
      duration: "September 2023 - July 2025",
      score: "CGPA: 6.9"
    },
    {
      institution: "Holkar Science College",
      degree: "Bachelor of Computer Applications",
      duration: "August 2020 - September 2023",
      score: "71.20%"
    }
  ],

  projects: [
    {
      name: "Quiz App",
      github: "https://github.com/kratikpal/quiz-app",
      liveLink: "https://proud-field-0a891c400.6.azurestaticapps.net/",
      technologies: ["Java", "Spring Boot", "MongoDB", "Razorpay", "Microsoft Azure"],
      description: [
        "Designed an email verification system with OTP, enhancing user security and ensuring valid account registrations",
        "Implemented a subscription-based model, generating consistent revenue and improving user retention",
        "Integrated Razorpay as a payment gateway, streamlining secure payments for premium users",
        "Developed a feature to store and analyze users' results and their selected answers, providing personalized feedback and insights",
        "Deployed the application on Microsoft Azure, ensuring scalability and high availability for users"
      ]
    },
    
    {
      name: "Online Compiler",
      github: "https://github.com/kratikpal/online_compiler",
      technologies: ["Node.js", "React.js", "Docker", "REST API", "AWS EC2", "ECS"],
      description: [
        "Supported compilation for C++, Java, Python, and JavaScript",
        "Used Docker containers to isolate code execution",
        "Built REST API in Node.js for handling code execution requests",
        "Deployed using AWS EC2 and ECS for scalable performance"
      ]
    },
    {
      name: "Library Management System",
      github: "https://github.com/kratikpal/library-management",
      technologies: ["Java", "Spring Boot", "MongoDB", "JWT", "Spring Security"],
      description: [
        "Developed a book reservation system using Spring Boot, enabling users to easily reserve and track books",
        "Implemented secure authentication with JWT tokens, ensuring user data privacy and system security",
        "Integrated an email reminder system to notify users about the due dates, improving book return rates and user engagement"
      ]
    },
    {
      name: "Video Post App",
      github: "https://github.com/kratikpal/video-post-app",
      technologies: ["Flutter", "Firebase", "Cloud Firestore", "Authentication", "Geolocator"],
      description: [
        "Developed a video sharing app enabling users to title and share their videos with ease",
        "Implemented OTP-based mobile authentication with Firebase, ensuring secure user access",
        "Integrated geolocator to display video upload locations, using Cloud Firestore for reliable data management"
      ]
    },
    {
      name: "Song Recommender System",
      github: "https://github.com/kratikpal/song-recommender",
      liveLink: "https://colab.research.google.com/drive/your-colab-link",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Scikit-surprise", "Matplotlib"],
      description: [
        "A music recommender system that suggests Hindi songs based on both content-based and collaborative filtering techniques",
        "Implemented content-based filtering using KNN, leveraging features like energy, tempo, noise, and other song attributes",
        "Implemented collaborative filtering using SVD to offer recommendations based on user preferences"
      ]
    },
    {
      name: "AudioVibe",
      github: "https://github.com/kratikpal/audiovibe",
      technologies: ["Dart", "Flutter", "Riverpod", "REST API", "Just Audio", "Node.js", "JWT", "MongoDB"],
      description: [
        "Music streaming app with 1M+ tracks and song categories",
        "Used YouTube Explode and Just Audio for seamless playback",
        "Implemented JWT-based authentication with Bcrypt",
        "Built APIs to track and store user listening history"
      ]
    }
  ]
};