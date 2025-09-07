import {
    frontend,
    backend,
    ux,
    kiosk,
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
    ticketory,
    parking,
    vite,
    coverhunt,
    kelhel,
    microverse, github
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
        name: 'Vite',
        icon: vite,
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
        name: 'Github',
        icon: github,
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
        name: 'Ticketory',
        description: 'A movie reservation platform with seat selection, QR tickets, and management features.',
        image: ticketory,
        repo: 'https://github.com/sjyun0507/Ticketory.git',
        demo: 'http://211.188.58.155:8080/',
    },
    {
        id: 'project-2',
        name: 'Cafe-kiosk',
        description:
            'An interactive self-ordering kiosk system with menu management, point rewards, and payment integration.',
        image: kiosk,
        repo: 'https://github.com/sjyun0507/kiosk_user.git',
        demo: '',
    },
    {
        id: 'project-3',
        name: 'Smart parking',
        description: 'An automated parking management solution with real-time space detection, fee calculation, and admin dashboard.',
        image: parking,
        repo: 'https://github.com/sjyun0507/SmartParking_System.git',
        demo: '',
    },
];

export {services, technologies, experiences, projects};
