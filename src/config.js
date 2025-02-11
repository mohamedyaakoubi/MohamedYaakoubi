// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
// import newLogo from "./images/yourFileName"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/D4N.PNG";
import Logo2 from "./images/GH.png";

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "mohamedyaakoubi";

// Navbar Logo image
export const navLogo = null;

/* Main
 ************************************************************** 
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = null;

// Hero images (imported above - lines 8-9)
export { HeroLight as Light };
export { HeroDark as Dark };

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "Hi, I am self-motivated, a fast learner who picks up new skills quickly, hardworking and hungry for knowledge. Seeking a challenging environment that encourages and provides exposure to new ideas and doing it to the best of my conscience and knowledge which stimulates personal and professional growth.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="skill-icons:html" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <Icon icon="skill-icons:css" className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <Icon icon="skill-icons:javascript" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="skill-icons:python-dark" className="display-4" />,
    name: "Python",
  },
  {
    id: 5,
    skill: <Icon icon="skill-icons:react-dark" className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <Icon icon="skill-icons:c" className="display-4" />,
    name: "C",
  },
  {
    id: 7,
    skill: <Icon icon="skill-icons:typescript" className="display-4" />,
    name: "Typescript",
  },
  {
    id: 8,
    skill: <Icon icon="vscode-icons:file-type-firebase" className="display-4" />,
    name: "Firbase",
  },
  {
    id: 9,
    skill: <Icon icon="skill-icons:github-dark" className="display-4" />,
    name: "GitHub",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = 'https://drive.google.com/file/d/1yh3K8zxxLIE2qolHgsKM2y59V_fD05UH/view?usp=sharing';

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["MentorNation-D4N-My-Work", "MohamedYaakoubi", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "MentorNation-D4N-My-Work",
    image: Logo,
  },
  {
    name: "MohamedYaakoubi",
    image: Logo2,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xovajyqo";

// Footer icons theme (light or dark)
export const footerTheme = "dark";
