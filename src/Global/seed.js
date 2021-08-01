// import denixImg from '../../Assets/logo.png';
// import realEstateImg from '../../Assets/real-estate.png';
// import hotBeansImg from '../../Assets/hot-beans.png';
// import valhallaCLIImg from '../../Assets/valhalla-cli.png';

// import denixImg from '../../Assets/images/compressed/logo.png';
import realEstateImg from './../Assets/images/compressedX2/real-estate.png';
import hotBeansImg from './../Assets/images/compressedX2/hot-beans.png';
import valhallaCLIImg from './../Assets/images/compressed/valhalla-cli.png';
import bmiCalculator from './../Assets/images/compressed/bmi-calculator.png';

import GraphQl from './../Assets/icons/graphql.svg';
import MaterialUI from './../Assets/icons/material-ui.svg';
import Express from './../Assets/icons/express.svg';
import Typescript from './../Assets/icons/typescript.svg';
import Nodejs from './../Assets/icons/nodejs.svg';
import Css from './../Assets/icons/css.svg';
import Html from './../Assets/icons/html.svg';
import Reactjs from './../Assets/icons/reactjs.svg';
import Apollo from './../Assets/icons/apollo.svg';
import MongoDB from './../Assets/icons/mongo.svg';

// import Django from '../../Assets/icons/django.svg';
// import Python from '../../Assets/icons/python.svg';
import CSharp from './../Assets/icons/csharp.svg';
// import Sass from '../../Assets/icons/sass.svg';
// import Azure from '../../Assets/icons/azure.svg';

// import Babel from '../../Assets/icons/babel.svg';
// import Bootstrap from '../../Assets/icons/bootstrap.svg';
export const projectsData = [
  {
    name: 'Real Estate',
    description:
      'This is an E-Commerce SPA designed to provide user ability to browse listed appartments and check-in/out as well.',
    stack: [Reactjs, MaterialUI, GraphQl, Apollo, Express, MongoDB, Typescript],
    image: realEstateImg,
    links: [
      'https://github.com/Deniks/Apartment-Booking-App',
      'https://alternative-choice-apartments.netlify.app/',
    ],
    elaboration: true,
  },
  {
    name: 'Landing',
    image: hotBeansImg,
    description:
      'This is a landing page for my college Web Developement module closure. The aim is to apply design principles such as responsive, adaptive, functional UI, wise colour scheme whlist considering SEO principles such as correct html tagging, meta descriptions, load time, markup validation.',
    myRole: '',
    projectDifficulties: '',
    mySolution: '',
    stack: [Express, Css, Html],
    links: [
      'https://hot-beans.herokuapp.com/',
      'https://github.com/Deniks/hot-beans',
    ],
    elaboration: null,
  },
  {
    name: 'BMI Calculator',
    description:
      "This is a BMI calculator WPF application. Throughout the project there are used OOP principles such as encapsulation, abstraction, inheritance, polymorphism and more. The goal of this project is to, of course, revise the C# at its core and train design thinking. Basically project's code is borrowed from BMI-Calculator-CLI but now it is possible to interact with it in GUI thanks to WPF framework 🚀.",
    stack: [CSharp],
    image: bmiCalculator,
    links: ['https://github.com/Deniks/BMI-Calculator-GUI'],
    elaboration: null,
  },
  // {
  //   name: 'Music Suggester',
  //   description:
  //     'This is a landing page for my college Web Developement module closure. The aim is to apply design principles such as responsive, adaptive, functional UI, wise colour scheme whlist considering SEO principles such as correct html tagging, meta descriptions, load time, markup validation.',
  //   stack: [Python, Django, Babel, Sass, Azure],
  //   image: rs,
  //   links: [
  //     'https://hot-beans.herokuapp.com/',
  //     'https://github.com/Deniks/hot-beans',
  //   ],
  // },

  // {
  //   name: 'Reflectively.log',
  //   description:
  //     'This is a landing page for my college Web Developement module closure. The aim is to apply design principles such as responsive, adaptive, functional UI, wise colour scheme whlist considering SEO principles such as correct html tagging, meta descriptions, load time, markup validation.',
  //   stack: [MongoDB, Express, Reactjs, Nodejs, GraphQl, Bootstrap],
  //   image: null,
  //   links: [
  //     'https://hot-beans.herokuapp.com/',
  //     'https://github.com/Deniks/hot-beans',
  //   ],
  // },
  {
    name: 'Valhalla-cli',
    description:
      'Valhalla-cli is an amazing cli tool for managing files on the go. Like github but more lite! 😆 ',
    stack: [Nodejs, MongoDB, Typescript],
    image: valhallaCLIImg,
    links: ['https://github.com/Deniks/valhalla-cli'],
    elaboration: false,
  },
];

export const detailedProjectData = [
  {
    name: 'Real Estate',
    features: [
      'Responsive/Adaptive Design',
      'Material UI framework',
      'Efficent appartment fetching with GraphQL',
      'MongoDB for scalability',
      'Apollo as middleman between react client and express server',
      'Animations with real physics using React Spring',
      'Flexible apartment filter',
      'Synchronized with AirBNB and Booking calender which allows user to see available dates',
      'State management with React hooks and context',
    ],
    role: 'Initial goal was to develop a web app that includes contact form, apartment listing page and great overview of apatments. And my role included the developement of front-end using react and back-end with express. Not to mention, as project was somewhat large, every feature needed to be presented and reviewed to stakeholder (as per SCRUM).',
    difficulties:
      'The most challenging in the project was to implement great apartment overview as this required not only advanced software engineering skills but also designing. Even with Material UI provided utilities and design solutions I couldn’t think of some way to combine apartment location, description, features and other stats in merely one of 3X3 cards. Then come technology implementations on client-side such as GraphQL and Apollo for which i did not have previous experience and which cause a bit more attention investment for code, but thanks to decent documentation I did not stumble on this task.  As far as server-side is concerned, Typescript required me to dig more in order to find corresponding types for each module which took some time but not drastically.',
    solution:
      'I developed full-stack React Express application with loads of UX features according to client requirements. However, in my opinion, the app in perspective can scale even more and current code of the app can become redundant and there were not performed any tests. For this reason there could be done additional developement to refactor the code base. But in the end my solution works and is very much functional!',
  },
  {
    name: 'Landing',
    role: '',
    difficulties: '',
    solution: '',
  },
];
