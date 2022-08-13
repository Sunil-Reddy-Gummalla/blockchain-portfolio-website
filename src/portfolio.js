/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import Button from "./components/button/Button";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sunil Reddy",
  title: "Sunil Reddy",
  subTitle: emoji(
    "I am  Blockchain Developer 🚀 with a strong foundation in blockchain and smart contracts. A quick learner and a team player with a proven ability in problem solving and analysis."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1U5_rCBqEnml0ejqMBeyFkhxTvdwjwTet/view?usp=sharing", // Set to empty to hide the button
  resumeName: "Sunil Reddy's Resume.pdf",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/CryptoBaba1",
  linkedin: "https://www.linkedin.com/in/venkata-sunil-reddy-gummalla-552615187/",
  gmail: "cryptobaba15076@gmail.com",
  medium: "",
  instagram: "",
  twitter: "",
  facebook: "",
  kaggle: "",
  gitlab: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A DEVELOPER WHO WANTS TO EXPLORE BLOCKCHAIN TECHNOLOGY",
  skills: [
    emoji("⚡ Develop Frontend, Backend and APIs for your Web Application"),
    emoji("⚡ Develop Optimized Smart-Contracts on Ethereum Blockchain"),
    emoji(
      "⚡ Develop Decentralized Application and Integrating the Blockchain"
    ),
    emoji("⚡ Integration of third party services such as Moralis/GraphQL")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Solidity",
      fontAwesomeClassname: "fab fa-ethereum"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Mango DB",
      fontAwesomeClassname: "fab fa-envira"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Hardhat",
      fontAwesomeClassname: "fas fa-hard-hat"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "National Institute of Technology Puducherry",
      logo: require("./assets/images/NitPy.png"),
      subHeader: "Bachelor of Engineering in Mechanical",
      duration: "August 2017 - May 2021",
      descBullets: [
        "CGPA: 9.1",
        "Participated in various workshops such as Catia, Business, EV Technology, ..."
      ]
    },
    {
      schoolName: "NRI Junior College",
      logo: require("./assets/images/nri.png"),
      subHeader: "Pre-University Course",
      duration: "July 2015 - March 2017",
      desc: "Ranked top 10% in the program.",
      descBullets: [
        "Percentage: 98.3%",
        "Major: Physics, Chemistry and Mathematics"
      ]
    }
  ]
};


// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "CGI Inc",
      companylogo: require("./assets/images/cgi.png"),
      date: "Sep 2021 - Present",
      desc: "Developed various features abd functions in a well-versed Financial Portfolio Website",
      background: false, // set it true to use image background as card background
      descBullets: [
        "Built and deployed several features in backend and frontend with rigours testing and coding standards",
        "Plan for and support development",
        "Worked closely with management and Team Members in Development as per client requirements",
        "Mentor and trained other team members and friends on several issues facing in day to day activities"
      ],
      footerLink: [
        {
          name: "Website",
          url: "https://www.cgi.com/"
        }
      ]
    },


    // Modify the following template to add more companies.

    // {
    // 	role: 'Front-End Developer',
    // 	company: 'Quora',
    // 	companylogo: require('./assets/images/quoraLogo.png'),
    // 	date: 'May 2017 – May 2018',
    // 	desc:
    // 		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    // },
    // {
    // 	role: 'Software Engineer Intern',
    // 	company: 'Airbnb',
    // 	companylogo: require('./assets/images/airbnbLogo.png'),
    // 	date: 'Jan 2015 – Sep 2015',
    // 	desc:
    // 		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    // }
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
  subtitle: "PROJECTS THAT I HAVE WORKED ON",
  projects: [
    {
      image: require("./assets/images/nftmarketplace2.png"),
      projectName: "My NFT MarketPlace",
      projectDesc:
        "My NFT MarketPlace similar to OpenSea. Here we can able to list your NFT,buy an NFT and can withdraw your profits to your wallet",
      footerLink: [
        //  you can add extra buttons here.
        {
          name: "View Project",
          url: "https://github.com/CryptoBaba1/NFT-MarketPlace"
        },
        {
          name: "Watch Vedio",
          url: "https://www.linkedin.com/feed/update/urn:li:activity:6962646627522162688/"
        }
      ]
    },
    {
      image: require("./assets/images/nft.png"),
      projectName: "Non-Fungible Token",
      projectDesc:
        "Buliding Basic NFT, Random IPFS NFT and Dynamic SVG NFT by using ERC721 from open Zeppelin, Chainlink VRF, Chainlink Upkeep and Pinata ",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/CryptoBaba1/NFT-Project/tree/main/Basic%20NFT-Backend"
        }
      ]
    },
    {
      image: require("./assets/images/lottery.png"),
      projectName: "Lottery Smart Contract",
      projectDesc:
        "Selects a Random winner who ever enters the Raffle Contract deployed on Rinkeby Testnet by using Chainlink VRF for Randomness",
      footerLink: [
        //  you can add extra buttons here.
        {
          name: "View Project",
          url: "https://github.com/CryptoBaba1/Smart-Lottory"
        },
        {
          name: "Watch Vedio",
          url: "https://www.linkedin.com/posts/venkata-sunil-reddy-gummalla-552615187_hardhat-ipfs-nextjs-activity-6955940416798027778-dHG8?utm_source=linkedin_share&utm_medium=member_desktop_web"
        }
      ]
    },
    {
      image: require("./assets/images/project.png"),
      projectName: "My Other Projects",
      footerLink: [
        //  you can add extra buttons here.
        {
          name: "View Projects",
          url: "https://github.com/CryptoBaba1?tab=repositories"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Learn Solidity-Get Started With Web 3.0 and BlockChain",
      subtitle: " Codedamn Certification Course.",
      image: require("./assets/images/certificate.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://codedamn.com/certificate/verify/10a3921a56ba32698b67ae6d9a40b56ffb1b6f44"
        }
      ]
    },
    {
      title: "Full-Stack BlockChain Development with Javascript",
      subtitle:
        "One of the Best BlockChain Course by freeCodeCamp",
      image: require("./assets/images/freecodecamp.png"),
      footerLink: [
        {
          name: "Tutorial",
          url: "https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=19877s&ab_channel=freeCodeCamp.org"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Say Hi to Start Discusiion.",
  email_address: "cryptobaba15076@gmail.com"
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo
};
