import { Project } from './types';

export const projectsList: Project[] = [
    {
        id: 1,
        title: "Sententia",
        description: "Sententia is a blogging platform which uses masonry grid layout of Pinterest with the traditional blogging approach of Medium, where authors can publish their writings.",
        technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
        imageUrl: "/sententia.png"
    },
    {
        id: 2,
        title: "Todo App",
        description: "Basic todo app using React and local storage for task management",
        technologies: ["Tailwind", "React"],
        imageUrl: "/assets/project2.jpg"
    }
];