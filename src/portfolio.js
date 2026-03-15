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
  username: "Sri jaya shankaran R",
  title: "Hi all, I'm shankar",
  subTitle: emoji(
    "I’m a QA Automation Engineer and AWS Certified Solutions Architect focused on building reliable, scalable software systems. I specialize in test automation, API validation, and CI/CD integration using modern tools like Playwright, Selenium, and Jenkins. With a strong foundation in cloud infrastructure, networking, and containerization, I ensure quality across the entire stack—from infrastructure to user interface. "
  ),
  subHeader:
    "🚀 I’m currently evolving toward a DevOps and platform engineering role, combining automation, cloud, and operational excellence.",
  resumeLink:
    "https://drive.google.com/file/d/1TNLTA-f488M6q3-SN824C_xbleo4eTNS/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Jaishankar-2003/",
  linkedin: "www.linkedin.com/in/r-sri-jaya-shankaran-b76329223",
  gmail: "jaishankar98421@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@jaishankar98421",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Build and manage cloud infrastructure and environments on AWS for scalable application deployment"
    ),
    emoji("⚡ Design and implement CI/CD pipelines using Jenkins, Maven, and Git to automate build, test, and deployment workflows"),
    emoji(
      "⚡ Containerize applications and test frameworks using Docker for consistent development and CI environments"
    ),
    emoji(
      "⚡ Automate end-to-end and API testing to ensure reliability across application releases"
    ),
    emoji(
      "⚡ Apply strong networking and infrastructure fundamentals to diagnose issues across the entire stack"
    ),
    emoji(
      "⚡ Bridge development, testing, and operations to deliver reliable and maintainable cloud-native systems"
    ),
    
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "AWS",
    icon: "https://img.icons8.com/color/96/amazon-web-services.png"
  },
  {
    skillName: "Docker",
    icon: "https://img.icons8.com/fluency/96/docker.png"
  },
  {
    skillName: "Kubernetes",
    icon: "https://img.icons8.com/color/96/kubernetes.png"
  },
  {
    skillName: "Jenkins",
    icon: "https://img.icons8.com/color/96/jenkins.png"
  },
  {
    skillName: "Git",
    icon: "https://img.icons8.com/color/96/git.png"
  },
  {
    skillName: "Linux",
    icon: "https://img.icons8.com/color/96/linux.png"
  },
  {
    skillName: "Python",
    icon: "https://img.icons8.com/color/96/python.png"
  },
  {
    skillName: "Java",
    icon: "https://img.icons8.com/color/96/java-coffee-cup-logo.png"
  },
  {
    skillName: "Selenium",
    icon: "https://img.icons8.com/color/96/selenium-test-automation.png"
  },
  {
    skillName: "Playwright",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="60"
        height="60"
      >
        <path  d="M23.996 7.462c-.056.837-.257 2.135-.716 3.85c-.995 3.715-4.27 10.874-10.42 9.227c-6.15-1.65-5.407-9.487-4.412-13.201c.46-1.716.934-2.94 1.305-3.694c.42-.853.846-.289 1.815.523c.684.573 2.41 1.791 5.011 2.488s4.706.506 5.583.352c1.245-.219 1.897-.494 1.834.455m-9.807 3.863s-.127-1.819-1.773-2.286c-1.644-.467-2.613 1.04-2.613 1.04Zm4.058 4.539l-7.769-2.172s.446 2.306 3.338 3.153c2.862.836 4.43-.98 4.43-.981Zm2.701-2.51s-.13-1.818-1.773-2.286c-1.644-.469-2.612 1.038-2.612 1.038ZM8.57 18.23c-4.749 1.279-7.261-4.224-8.021-7.08C.197 9.831.044 8.832.003 8.188c-.047-.73.455-.52 1.415-.354c.677.118 2.3.261 4.308-.28a11.3 11.3 0 0 0 2.41-.956q-.087.295-.17.61c-.433 1.618-.827 4.055-.632 6.426c-1.976.732-2.267 2.423-2.267 2.423l2.524-.715c.227 1.002.6 1.987 1.15 2.838zm-4.188-6.298c1.265-.333 1.363-1.631 1.363-1.631l-3.374.888s.745 1.076 2.01.743Z"/>
      </svg>
    )
  }
],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Anna University",
      //logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "November 2021 - May 2025",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "QSpiders - Software Testing Training Institute",
      //logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Certified software test engineer",
      duration: "jun 2025 - jul 2026",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    {
      schoolName: "Views Computer",
      //logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Diploma in Hardware and computer Application",
      duration: "jun 2022 - jul 2023",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    {
      schoolName: "IcFix Chip level Hardware service academy",
      //logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Certified Chip level service engineer",
      duration: "Feb 2025 - Mar 2025",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Devops", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "QA Automation",
      progressPercentage: "70%"
    },
    {
      Stack: "Backend FastApi",
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
      role: "Hardware Engineer",
      company: "Views Computers",
      //companylogo: require("./assets/images/facebookLogo.png"),
      date: "May 2023 – oct 2023",
      desc: "I have experience in troubleshooting and repairing laptop and desktop hardware, including motherboard issues. I diagnose problems related to power, charging, boot failure, and overheating. I also perform hardware upgrades such as RAM, SSD, and HDD installation, and configure BIOS settings to ensure proper system performance.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Software Test Engineer Intern",
      company: "Qspider Test yantra",
      //companylogo: require("./assets/images/quoraLogo.png"),
      date: "Jul 2025 – Dec 2025",
      desc: "I have experience in writing and executing automated test scripts to ensure software quality. I test web applications by validating functionality, performance, and reliability. I also identify bugs, report issues, and work with the development team to ensure the application works correctly."
    },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jul 2025 – Dec 2025",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      //image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Endocrine Disease detection using Image Processing",
      projectDesc: "Thyroid nodules can be solid or cystic growths within the thyroid gland, and early detection is critical. Our project aimed to classify and detect nodules in ultrasound images using machine learning and deep learning approaches.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://drive.google.com/file/d/1igue9otEJm6CloRTZWJgTAVVu4a9R18R/view?usp=sharing"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      //image: require("./assets/images/nextuLogo.webp"),
      projectName: "Web Traffic Analysis Project Unveiling Digital InsightsNextu",
      projectDesc: "The project not only achieved a notable increase in web traffic but also laid the groundwork for sustained growth through continuous monitoring and refinement. The success of this endeavor underscores my proficiency in web analytics, strategic thinking, and data-driven decision-making.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
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

  achievementsCards: [
    {
      title: "postman student expert",
      subtitle:
        "Api Testing and Automation using Postman. Certified as Postman Student Expert by Postman.",
      //image: require("./assets/images/codeInLogo.webp"),
      //imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://verify.skilljar.com/c/vvejm3k679y7"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "AWS Architecting",
      subtitle:
        "I have core knowledge of Amazon Web Services (AWS) and AWS Cloud, including AWS Core Services such as AWS Compute, AWS Storage, AWS Networking, and AWS Database.",
      //image: require("./assets/images/googleAssistantLogo.webp"),
      //imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/a34a4d01-5f8f-46dd-b5af-397f526f616a/linked_in_profile"
        }
      ]
    },

    {
      title: "CompTIA A+",
      subtitle: "I have foundational knowledge aligned with CompTIA A+, including computer hardware, troubleshooting, operating systems, and basic IT support concepts.",
      //image: require("./assets/images/pwaLogo.webp"),
      //imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Have a project in mind or just want to say hello? Feel free to reach out — my inbox is always open.",
  number: "+91-9842139997",
  email_address: "jaishankar98421@gmail.com"
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
  contactInfo,
  isHireable,
  resumeSection
};
