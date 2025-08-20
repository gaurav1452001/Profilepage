export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    livelink: string;
    githublink: string;
    imageUrl: string;
}

export interface Reading {
    id: number;
    title: string;
    author: string;
    imageUrl: string;
    status: string;
    link: string;
}

export interface Experience {
    id: number;
    companyName: string;
    role: string;
    imageUrl: string;
    workPeriod: string;
    link: string;
}