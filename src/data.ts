import { Project, Experience, Achievement, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: 'Akshar Kavar',
  role: 'Full-Stack Developer',
  tagline: 'Building products that bridge elegant user interfaces with robust server architectures.',
  university: 'The Maharaja Sayajirao University of Baroda',
  degree: 'BE - 2nd Year, Computer Science & Engineering',
  location: 'Vadodara, Gujarat, India',
  email: 'kavarakshar007@gmail.com',
  github: 'https://github.com/aksharkavar',
  linkedin: 'https://linkedin.com/in/aksharkavar',
  resume: '#', // Placeholder or anchor to show modal/alert
  typingRoles: [
    'Full-Stack Developer',
    'Founder @ CodeLab Club',
    'Problem Solver',
    'CS Undergrad @ MSU Baroda'
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'codelab-portal',
    title: 'CodeLab Club Portal',
    description: 'A centralized portal for student developers to access resources, view event schedules, register for hackathons, and check real-time coding leaderboards.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/aksharkavar/codelab-portal',
    demo: 'https://github.com/aksharkavar/codelab-portal',
    featured: true,
    category: 'Full-Stack'
  },
  {
    id: 'dsa-visualizer',
    title: 'Interactive DSA Visualizer',
    description: 'An interactive visualization platform that animates core sorting (Quick, Merge, Bubble) and graph algorithms (Dijkstra, BFS, DFS) for educational purposes.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    github: 'https://github.com/aksharkavar/dsa-visualizer',
    demo: 'https://github.com/aksharkavar/dsa-visualizer',
    featured: true,
    category: 'Educational'
  },
  {
    id: 'mern-shop',
    title: 'MERN E-Commerce Platform',
    description: 'A fully functional online storefront with client-side routing, JWT authentication, a complete product catalog, shopping cart persistent state, and checkout gateway.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/aksharkavar/mern-ecommerce',
    demo: 'https://github.com/aksharkavar/mern-ecommerce',
    featured: true,
    category: 'Full-Stack'
  },
  {
    id: 'taskflow',
    title: 'TaskFlow Board',
    description: 'A visual kanban board similar to Trello, featuring interactive drag-and-drop lists, customized task categories, and local state persistence.',
    tags: ['React', 'Tailwind CSS', 'LocalStorage', 'HTML5'],
    github: 'https://github.com/aksharkavar/taskflow-board',
    demo: 'https://github.com/aksharkavar/taskflow-board',
    featured: false,
    category: 'Productivity'
  },
  {
    id: 'climate-pulse',
    title: 'Climate Pulse Dashboard',
    description: 'A weather analytics application displaying real-time metrics, interactive line-charts for 7-day temperature trends, and customizable city cards.',
    tags: ['React', 'Recharts', 'Tailwind CSS', 'Weather API'],
    github: 'https://github.com/aksharkavar/climate-pulse',
    demo: 'https://github.com/aksharkavar/climate-pulse',
    featured: false,
    category: 'Data & APIs'
  },
  {
    id: 'echo-chat',
    title: 'EchoChat Web App',
    description: 'A real-time communication platform utilizing web sockets to support private messaging channels, typing indicators, and instant notification triggers.',
    tags: ['React', 'Node.js', 'Express', 'Socket.io', 'Tailwind CSS'],
    github: 'https://github.com/aksharkavar/echo-chat',
    demo: 'https://github.com/aksharkavar/echo-chat',
    featured: false,
    category: 'Real-time'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-codelab',
    role: 'Founder & Lead',
    organization: 'CodeLab Club — MSU Baroda',
    duration: '2024 — Present',
    location: 'The Maharaja Sayajirao University of Baroda',
    description: [
      'Established the club as the primary student-led developer community within the Computer Science department, expanding to 200+ active student members.',
      'Designed a structured syllabus covering competitive coding paradigms, MERN stack fundamentals, and basic source control.',
      'Organized 3 successful inter-departmental hackathons and 10+ hands-on coding bootcamps, managing guest speakers and administrative tasks.'
    ],
    tags: ['Leadership', 'Mentoring', 'Community Building', 'Event Management']
  },
  {
    id: 'exp-freelance',
    role: 'Web Developer',
    organization: 'Academic & Freelance Projects',
    duration: '2023 — Present',
    location: 'Remote',
    description: [
      'Architected and implemented responsive, glassmorphic UI templates for various departmental initiatives and external clients.',
      'Built optimized server APIs using Express, handling JWT security assertions and complex multi-join queries with Express and MongoDB/MySQL.',
      'Ensured cross-browser support, optimized SEO parameters, and established CI/CD deployments for portfolio assets.'
    ],
    tags: ['MERN Stack', 'REST APIs', 'UI/UX Design', 'Database Modeling']
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'Java', iconName: 'Terminal', color: 'from-orange-500 to-red-500' },
      { name: 'Python', iconName: 'Flame', color: 'from-blue-500 to-yellow-500' },
      { name: 'JavaScript', iconName: 'FileJson', color: 'from-yellow-400 to-amber-500' },
      { name: 'C/C++', iconName: 'Code', color: 'from-blue-600 to-indigo-600' },
      { name: 'HTML5', iconName: 'Layout', color: 'from-orange-600 to-amber-600' },
      { name: 'CSS3', iconName: 'Palette', color: 'from-blue-400 to-indigo-500' }
    ]
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      { name: 'React', iconName: 'Atom', color: 'from-cyan-400 to-blue-500' },
      { name: 'Node.js', iconName: 'Server', color: 'from-green-500 to-emerald-600' },
      { name: 'Express', iconName: 'Cpu', color: 'from-slate-400 to-zinc-600' },
      { name: 'Tailwind CSS', iconName: 'Wind', color: 'from-sky-400 to-cyan-500' },
      { name: 'MongoDB', iconName: 'Database', color: 'from-emerald-500 to-green-600' },
      { name: 'MySQL', iconName: 'Layers', color: 'from-blue-500 to-indigo-500' }
    ]
  },
  {
    category: 'Tools & Version Control',
    skills: [
      { name: 'Git', iconName: 'GitBranch', color: 'from-orange-500 to-red-600' },
      { name: 'GitHub', iconName: 'Github', color: 'from-zinc-300 to-slate-400' },
      { name: 'VS Code', iconName: 'SquareTerminal', color: 'from-blue-500 to-sky-600' },
      { name: 'Figma', iconName: 'Layers3', color: 'from-purple-500 to-pink-500' },
      { name: 'Docker', iconName: 'Box', color: 'from-sky-500 to-blue-600' },
      { name: 'GitLab', iconName: 'Gitlab', color: 'from-orange-600 to-red-500' }
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ach-joined',
    date: 'July 2024',
    title: 'Joined MSU Baroda',
    description: 'Enrolled in Bachelor of Engineering in Computer Science & Engineering at MSU Baroda, beginning an academic journey focusing on Algorithms, Data Structures, and Software Design.',
    category: 'education'
  },
  {
    id: 'ach-founded',
    date: 'September 2024',
    title: 'Founded CodeLab Club',
    description: 'Established the first-ever centralized developer club inside MSU Baroda to help bridge academic concepts with industrial software engineering practices.',
    category: 'leadership'
  },
  {
    id: 'ach-hackathon',
    date: 'March 2025',
    title: 'MSU Hackathon Winner',
    description: 'Secured top positions in the annual university coding challenge, creating an automated IoT attendance solution for university lecture halls.',
    category: 'hackathon'
  },
  {
    id: 'ach-milestone',
    date: 'June 2025',
    title: 'Full Stack Mastery & 500+ CP Solved',
    description: 'Successfully deployed 5+ standard web services while solving over 500 competitive programming challenges across LeetCode and CodeChef.',
    category: 'milestone'
  }
];
