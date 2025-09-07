import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  springboot,
  springsecurity,
  json,
  mariadb,
  swagger,
  gradle,
  filezilla,
  terminus,
  notion,
  googlesheets,
  canva,
  vercel,
  git,
  figma,
    spring,
  komikult,
  leaderboard,
  math,
  coverhunt,
  kelhel,
    microverse
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'Spring',
    icon: spring,
  },
  {
    name: 'Spring Boot',
    icon: springboot,
  },
  {
    name: 'Spring Security',
    icon: springsecurity,
  },

  {
    name: 'JSON',
    icon: json,
  },
  {
    name: 'MariaDB',
    icon: mariadb,
  },
  {
    name: 'Swagger',
    icon: swagger,
  },
  {
    name: 'Gradle',
    icon: gradle,
  },
  {
    name: 'FileZilla',
    icon: filezilla,
  },
  {
    name: 'Terminus',
    icon: terminus,
  },
  {
    name: 'Notion',
    icon: notion,
  },
  {
    name: 'Google Sheets',
    icon: googlesheets,
  },
  {
    name: 'Canva',
    icon: canva,
  },
  {
    name: 'Vercel',
    icon: vercel,
  },
];

const experiences = [
  {
    title: 'Logistic specialist',
    company_name: 'Ocean Blue Express',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Oct 2019 – Dec 2024',
    address: 'NJ,USA'
  },
  {
    title: 'English Instructor',
    company_name: 'YBM ECC',
    icon: microverse,
    iconBg: '#333333',
    date: 'Jul 2017 – May 2019',
    address: 'Daegu,South Korea'
  },
  {
    title: 'Bank Teller',
    company_name: 'MG Saemaeul Geumgo',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Jul 2014 – Jan 2016',
    address: 'Goryeong,South Korea'
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'KomiKult',
    description: 'A comic characters list app that displays Marvel characters.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Leaderboard',
    description:
      'A leaderboard list app that displays scores submitted by different players.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
];

export { services, technologies, experiences, projects };
