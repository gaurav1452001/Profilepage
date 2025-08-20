import { Project } from './types';

export const projectsList: Project[] = [
    {
        id: 1,
        title: "GameDex",
        description: "GameDex is a community-driven platform for gamers to track, review, rate, and share their custom lists. Inspired by Letterboxd, Gamedex allows players create their own profile and follow other gamers.",
        technologies: ["React Native", "Node.js", "Convex", "Express", "Expo"],
        livelink: "https://game-dex-promo-website.vercel.app/",
        githublink: "https://github.com/gaurav1452001/GameDex",
        imageUrl: "/show9.png"
    },
    {
        id: 2,
        title: "Sententia",
        description: "Sententia is a blogging platform which uses masonry grid layout of Pinterest with the traditional blogging approach of Medium, where authors can publish their writings.",
        technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
        livelink: "https://sententia-eight.vercel.app",
        githublink: "https://github.com/gaurav1452001/Sententia",
        imageUrl: "/sententia.png"
    },
     {
        id: 3,
        title: "AI Agent Chatbot",
        description: "An AI agent leveraging Groq Models, Langchain, and Langgraph frameworks. Features web search capabilities through TAVILY API integration.",
        technologies: ["Python", "FastAPI", "Langchain", "Langgraph","Tavily API"],
        livelink: "https://agentic-chatbot.streamlit.app/",
        githublink: "https://github.com/gaurav1452001/agentic-chatbot",
        imageUrl: "/ai_agent.png"
    },
    {
        id: 4,
        title: "Todo App",
        description: "We all start here",
        technologies: ["Tailwind", "React"],
        livelink: "https://todo-lister-app.vercel.app",
        githublink: "https://github.com/gaurav1452001/todo-app",
        imageUrl: "/todo2.png"
    },
   

];