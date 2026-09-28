/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Elaiza Remo",
  title: "Hello! I'm Elaiza",
  subTitle: emoji(
    "Recent CS graduate 🦾🚀  Full-stack developer focused on practical, human-centred applications. Turning everyday problems into intuitive tools."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1UEr30-ff70w1p4Twsc6eB6e844ioGccS/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/elaiza-remo",
  linkedin: "https://www.linkedin.com/in/elaiza-remo-2836b1349",
  gmail: "remoelaiza@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "Developer focused on building useful, people-first web applications. My background in technical support shapes how I build: clear interfaces, reliable systems, and practical solutions.",
  skills: [
    {
      title: "FRONTEND",
      text: "Responsive, intuitive interfaces with React, Next.js, TypeScript, and Tailwind, with attention to usability and detail."
    },
    {
      title: "BACKEND",
      text: "Reliable APIs and services with Spring Boot and Python, written to be clean and maintainable."
    },
    {
      title: "DATA",
      text: "Data analysis and forecasting with Python, SQL, and Pandas, turning raw data into actionable insights."
    }
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Alberta",
      logo: require("./assets/images/ualbertaLogo.png"),
      subHeader: "BSc in Computing Science",
      duration: "September 2021 - May 2026",
      desc: "Relevant coursework in Software Development, Database Management, Data Structures & Algorithms",
      descBullets: ["Completed coursework in machine learning and large language models (LLMs), covering model training, evaluation, and modern AI applications",
        "Built a strong foundation in data structures and algorithms, with a focus on efficient problem-solving",
        "Studied software development practices, including object-oriented design, testing, and team-based development using Agile methods",
        "Gained experience in database management, including relational design and SQL"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Technical Support Specialist",
      company: "Catalis",
      companylogo: require("./assets/images/catalisLogo.png"),
      date: "July 2026 - Present",
      desc: "Primary technical contact for SaaS users — diagnosing web app issues, triaging bugs, and writing support docs."
    },
    {
      role: "Full Stack Software Developer",
      company: "Nestuity / University of Alberta",
      companylogo: require("./assets/images/ualbertaLogo.png"),
      date: "Sep - Dec 2025",
      desc: "Built a parenting supply-tracker with Spring Boot, Next.js, PostgreSQL, and Docker — usage forecasting, price analysis, and a responsive dashboard."
    },
    {
      role: "Science Summer Camp Leader",
      company: "University of Alberta",
      companylogo: require("./assets/images/ualbertaLogo.png"),
      date: "Jun 2023 - Aug 2025",
      desc: "Designed and led camp activities, taught kids hands-on computer skills and internet safety."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF THE PROJECTS I HAVE BUILT",
  projects: [
    {
      image: require("./assets/images/dashboardIcon.png"),
      projectName: "Inventory Forecasting Dashboard",
      projectDesc: "Python + SQL dashboard that monitors stock levels, tracks supplier performance, and forecasts demand with automated data pipelines.",
      techTags: ["Python", "SQL", "Pandas", "Data Pipelines"],
      footerLink: []
    },
    {
      image: require("./assets/images/runIcon.png"),
      projectName: "eFit: Fitness Analytics Platform",
      projectDesc: "Next.js/React dashboard that pulls biometric data from Apple HealthKit and Strava to visualize training loads and generate AI-powered coaching recommendations.",
      techTags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs"],
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Feel free to reach out!",
  email_address: "remoelaiza@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
