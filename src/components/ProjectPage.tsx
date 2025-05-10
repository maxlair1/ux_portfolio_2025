import React from 'react';
import ExampleMDX from '../docs/example.mdx';

const ProjectPage = () => {
    return (
        <div className="flex flex-col lg:flex-row h-full w-full p-4 space-y-8 lg:space-y-0 lg:space-x-8">
            {/* MDX Content */}
            <div className="prose prose-neutral dark:prose-invert max-w-none w-full lg:w-1/2 overflow-auto">
                <ExampleMDX />
            </div>

            {/* Gallery */}
            <div className="w- lg:w-1/2 flex flex-col gap-2 overflow-x-hidden overflow-y-auto max-h-[500vh]">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div
                        key={i}
                        className="w-full h-64 bg-gray-300"
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectPage;
