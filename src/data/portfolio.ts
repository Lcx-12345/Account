export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, secure payment processing, and responsive design.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20ecommerce%20website%20dashboard%20with%20products&image_size=landscape_16_9",
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management tool with drag-and-drop functionality, team assignments, and progress tracking.",
    tags: ["Vue", "TypeScript", "PostgreSQL", "Socket.io"],
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=task%20management%20app%20interface%20with%20kanban%20board&image_size=landscape_16_9",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard displaying key business metrics with customizable charts and real-time data updates.",
    tags: ["React", "D3.js", "Python", "AWS"],
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20visualization%20dashboard%20with%20charts%20and%20graphs&image_size=landscape_16_9",
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "AI Chatbot Assistant",
    description: "Intelligent chatbot with natural language processing, multi-language support, and seamless integration capabilities.",
    tags: ["Python", "TensorFlow", "Flask", "WebSockets"],
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20chatbot%20interface%20with%20message%20bubbles&image_size=landscape_16_9",
    link: "#",
    github: "#"
  }
];

export const skills: Skill[] = [
  { name: "JavaScript/TypeScript", level: 95, category: "Frontend" },
  { name: "React", level: 90, category: "Frontend" },
  { name: "Vue.js", level: 85, category: "Frontend" },
  { name: "Node.js", level: 88, category: "Backend" },
  { name: "Python", level: 80, category: "Backend" },
  { name: "PostgreSQL", level: 85, category: "Database" },
  { name: "MongoDB", level: 82, category: "Database" },
  { name: "AWS", level: 75, category: "Cloud" },
  { name: "Docker", level: 78, category: "DevOps" },
  { name: "Git", level: 92, category: "Tools" }
];

export const socialLinks = {
  github: "#",
  linkedin: "#",
  twitter: "#",
  email: "mailto:hello@example.com"
};

export const personalInfo = {
  name: "Alex Johnson",
  title: "Full Stack Developer",
  bio: "I'm a passionate full-stack developer with over 5 years of experience building web applications. I specialize in creating scalable, user-centric solutions that solve real-world problems.",
  location: "San Francisco, CA",
  email: "hello@alexjohnson.dev",
  phone: "+1 (555) 123-4567"
};