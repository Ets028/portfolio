export const projects = [
  {
    id: 1,
    title: "Inventory app",
    description: `This is a fully functional Inventory Management Application designed to streamline stock control, product tracking, and request handling for small to medium-sized businesses.

Built using React Native (Expo) for the frontend and Express.js with Sequelize & MySQL on the backend, the app delivers a smooth and responsive experience on both Android and iOS devices.

🔧 Key Features:
- 🔐 User Authentication – Secure login for operators and admins
- 📦 Product Management – Add, edit, and categorize items with images and details
- 📋 Request Workflow – Customers can request items; admins can approve or fulfill them
- 📊 Transaction History – Track and log outgoing goods with timestamps
- 👥 Role-Based Access – Separate dashboards and access levels for Admins and Operators
- 🖌️ Modern UI – Clean, mobile-first design optimized for usability

This project showcases both frontend and backend skills, focusing on real-world inventory workflows with an efficient, scalable system architecture.`,
    image: "images/project2.png",
    technologies: ["React Native", "Expo", "Express.js", "Sequelize", "MySQL"],
    githubUrl: "https://github.com/ets028/inventory-expo",
    liveUrl: "https://project1.com",
    category: "fullstack",
    featured: true,
    details: {
      overview:
        "Inventory app to manage stock, requests, and transactions with a secure, role-based system.",
      features: [
        "User Authentication for admins and operators",
        "Product management with images and categories",
        "Request approval workflow",
        "Transaction history with timestamps",
        "Role-based dashboards",
        "Mobile-first responsive UI",
      ],
      challenges:
        "Integrating real-time request handling and secure role-based access control.",
      solutions:
        "Used JWT authentication, Sequelize ORM for easy database handling, and Expo for cross-platform mobile UI.",
    },
  },
  {
    id: 2,
    title: "Web Portfolio",
    description:
      "A personal portfolio website built with ReactJS and Tailwind CSS.",
    image: "/images/project1.jpg",
    technologies: ["React", "Tailwind CSS"],
    githubUrl: "https://github.com/ets028/portfolio",
    liveUrl: "https://portfolio-ets.netlify.app",
    category: "fullstack",
    featured: true,
    details: {
      overview:
        "This portfolio showcases my skills in React and Tailwind CSS, with a focus on modern UI, dark mode, and animations.",
      features: [
        "Responsive design",
        "Dark mode toggle",
        "Project cards with animations",
        "Particle background effect",
      ],
      challenges:
        "Implementing smooth animations and responsive design that works on both desktop and mobile.",
      solutions:
        "Used React Spring for animations and Tailwind CSS for responsive utility classes.",
    },
  },
  {
    id: 3,
    title: "Trello Clone",
    description: `A project management tool that mimics Trello's functionality, allowing users to create boards, lists, and cards for task management.

Built with React for the frontend and Express.js with MySQL and Prisma ORM on the backend, this application offers a seamless experience for organizing tasks in a collaborative environment.

🔧 Key Features:
- 🔐 User Authentication – Secure login and registration for users
- 📋 Board Management – Create, edit, and delete boards
- ✅ Task Management – Add and move tasks between lists with drag-and-drop functionality
- 📅 Due Dates & Labels – Assign due dates and labels to tasks for better organization
- 📧 Notifications – Email notifications for task updates and deadlines
- 📱 Mobile-Friendly – Responsive design for use on any device

This project showcases skills in full-stack development, emphasizing user experience and collaboration in project management.`,
    image: "/images/project3.jpg",
    technologies: ["React", "Express.js", "MySQL", "Prisma"],
    githubUrl: "https://github.com/username/trello-clone",
    liveUrl: "https://trello-clone.com",
    category: "fullstack",
    featured: false,
    details: {
      overview:
        "A project management tool for organizing tasks using boards, lists, and cards, inspired by Trello.",
      features: [
        "User authentication for secure access",
        "Manage boards and tasks with drag-and-drop",
        "Set due dates and labels for tasks",
        "Email notifications for updates",
        "Mobile-friendly responsive design",
      ],
      challenges:
        "Implementing real-time updates and ensuring a smooth drag-and-drop experience.",
      solutions:
        "Used WebSockets for real-time updates, and Prisma ORM for efficient database interactions.",
    },
  },
];

export const skills = [
  {
    name: "HTML",
    logo: "/images/html5.svg",
    color: "text-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
  },
  {
    name: "CSS",
    logo: "/images/css3.svg",
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    name: "JavaScript",
    logo: "/images/javascript.png",
    color: "text-yellow-500",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
  },
  {
    name: "React",
    logo: "/images/react.svg",
    color: "text-cyan-500",
    bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
  },
  {
    name: "Expo",
    logo: "/images/expo.svg",
    color: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
  },
  {
    name: "Tailwind",
    logo: "/images/tailwindcss.svg",
    color: "text-teal-500",
    bgColor: "bg-teal-50 dark:bg-teal-900/20",
  },
  {
    name: "Express",
    logo: "/images/express.svg",
    color: "text-gray-600 dark:text-gray-400",
    bgColor: "bg-gray-50 dark:bg-gray-800/50",
  },
  {
    name: "MySQL",
    logo: "/images/mysql.svg",
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
  },
];
