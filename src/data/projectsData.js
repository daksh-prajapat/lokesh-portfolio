import project1Img from "../assets/project1.jpg";
import project2Img from "../assets/project2.jpg";
import project3Img from "../assets/project3.jpg";
import project4Img from "../assets/project4.jpg";

export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-featured e-commerce platform with cart, wishlist, and payment integration.",
    longDescription: "Built a complete e-commerce solution with user authentication, product filtering, search functionality, shopping cart, and secure payment gateway integration.",
    image: project1Img,
    tech: ["React", "Node.js", "MongoDB", "Tailwind", "Stripe"],
    features: [
      "User authentication (JWT)",
      "Product filtering and search",
      "Shopping cart with local storage",
      "Secure payment integration",
      "Order tracking system"
    ],
    liveLink: "https://ecommerce-demo.com",
    codeLink: "https://github.com/lokesh/ecommerce",
    category: "fullstack"
  },
  {
    id: 2,
    title: "Weather Forecast App",
    description: "Real-time weather application with 5-day forecast and location detection.",
    longDescription: "Weather app that provides current weather conditions, 5-day forecast, and automatic location detection using browser geolocation.",
    image: project2Img,
    tech: ["React", "OpenWeather API", "Axios", "Chart.js"],
    features: [
      "Real-time weather data",
      "5-day weather forecast",
      "Automatic location detection",
      "Search by city name",
      "Temperature unit toggle (C/F)"
    ],
    liveLink: "https://weather-app-demo.com",
    codeLink: "https://github.com/lokesh/weather-app",
    category: "frontend"
  },
  {
    id: 3,
    title: "Task Management Dashboard",
    description: "Productivity app for managing tasks, projects, and team collaboration.",
    longDescription: "A comprehensive task management tool with drag-and-drop functionality, task categories, due dates, and team collaboration features.",
    image: project3Img,
    tech: ["React", "Context API", "LocalStorage", "Tailwind", "React DnD"],
    features: [
      "Drag-and-drop task board",
      "Task categories and priorities",
      "Due date reminders",
      "Search and filter tasks",
      "Data persistence with localStorage"
    ],
    liveLink: "https://taskmanager-demo.com",
    codeLink: "https://github.com/lokesh/task-manager",
    category: "frontend"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website showcasing my work and skills.",
    longDescription: "A professional portfolio website built with React and Tailwind CSS, featuring smooth animations, responsive design, and optimized performance.",
    image: project4Img,
    tech: ["React", "Tailwind", "Framer Motion", "Vite"],
    features: [
      "Fully responsive design",
      "Smooth scroll animations",
      "Dark/Light mode toggle",
      "Contact form integration",
      "Optimized performance (90+ Lighthouse score)"
    ],
    liveLink: "https://lokesh.dev",
    codeLink: "https://github.com/lokesh/portfolio",
    category: "frontend"
  }
];

export const categories = ["all", "frontend", "fullstack", "backend"];