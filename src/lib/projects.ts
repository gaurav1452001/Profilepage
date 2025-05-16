import { Project } from './types';

export const projectsList: Project[] = [
    {
        id: 1,
        title: "Sententia",
        description: "Sententia is a blogging platform which uses masonry grid layout of Pinterest with the traditional blogging approach of Medium, where authors can publish their writings.",
        technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
        livelink: "https://sententia-eight.vercel.app",
        githublink: "https://github.com/gaurav1452001/Sententia",
        imageUrl: "/sententia.png"
    },
     {
        id: 2,
        title: "AI Agent Chatbot",
        description: "An AI agent leveraging Groq Models, Langchain, and Langgraph frameworks. Features web search capabilities through TAVILY API integration.",
        technologies: ["Python", "FastAPI", "Langchain", "Langgraph","Streamlit","Tavily API"],
        livelink: "https://agentic-chatbot.streamlit.app/",
        githublink: "https://github.com/gaurav1452001/agentic-chatbot",
        imageUrl: "/ai_agent.png"
    },
    {
        id: 3,
        title: "Todo App",
        description: "Basic todo app using React and local storage for task management",
        technologies: ["Tailwind", "React"],
        livelink: "https://todo-lister-app.vercel.app",
        githublink: "https://github.com/gaurav1452001/todo-app",
        imageUrl: "/todo2.png"
    },
   

];