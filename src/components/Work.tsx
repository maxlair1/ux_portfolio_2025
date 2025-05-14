import React from "react";
import { useEffect, useState } from "react";
import projectsJSON from "../projects.json";
import { A } from "react-router/dist/development/route-data-B9_30zbP";

interface ProjectContainerProps {
    backImage: string;
    frontImage: string;
    alt: string;
    title: string;
    href: string;
}

const ProjectContainer: React.FC<ProjectContainerProps> = ({ backImage, frontImage, alt, title, href }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a href={href}>
            <div className="flex flex-col w-full cursor-pointer min-w-[200px] h-auto aspect-[2/3] my-2">
                {/* Title - fixed above */}
                <div className="text-[13px] font-mono mb-2 uppercase">
                [{title}]
                </div>

                <div
                className="relative flex overflow-hidden transition-all"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ flex: 1 }}
                >
                {/* Front image */}
                <div
                    className="absolute inset-0 w-full h-full transition-transform duration-200 ease-in-out"
                    style={{
                    transform: isHovered ? 'translateX(-100%)' : 'translateX(0)',
                    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                >
                    <img
                    src={frontImage}
                    alt={alt}
                    className="w-full h-full object-cover"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />

                        {/* Overlay with subtle gradient on hover */}
                        <div
                            className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/20 transition-opacity duration-100"
                            style={{ opacity: isHovered ? 0.7 : 0 }}
                        />
                    </div>

                    {/* Back image (revealed on hover) */}
                    <div
                        className="absolute inset-0 w-full h-full transition-transform duration-100 ease-in-out"
                        style={{
                            transform: isHovered ? 'translateX(0)' : 'translateX(100%)',
                            transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                    >
                        <img
                            src={backImage}
                            alt={`${alt} - secondary view`}
                            className="w-full h-full object-cover"
                        />

                        {/* Shine effect that moves across */}
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000"
                            style={{
                                opacity: isHovered ? 1 : 0,
                                transform: `translateX(${isHovered ? '100%' : '-100%'}) skewX(-12deg)`,
                                transition: 'transform 1.2s ease-in-out, opacity 0.5s ease-in-out'
                            }}
                        />
                    </div>
                </div>
            </div>
        </a>
    );
};

const Work: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    const firstThreeProjects = Object.entries(projectsJSON.projects)
    .slice(0, 3)
    .map(([key, project]) => ({ key, ...project }));

    return (
        <>
        <div className="flex flex-col items-center justify center my-20">
            <h1>Work</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4">
            {firstThreeProjects.map((project) => (
                <ProjectContainer 
                    title={project.name}
                    frontImage={project.thumbnailFirst}
                    backImage={project.thumbnailSecond}
                    href={`/project/${project.slug}`}
                    alt={project.name}
                />
             ))}
            </div>
        </div>
        </>
    );
};

export default Work;
