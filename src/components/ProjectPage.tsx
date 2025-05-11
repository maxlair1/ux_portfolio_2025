// pages/project.tsx
import React from 'react';
import ExampleMDX from '../docs/example.mdx';
import matter from 'gray-matter';

const ProjectPage = ({ frontmatter, content }: any) => {
  return (
    <div className="flex flex-col lg:flex-row h-full w-full p-4 space-y-8 lg:space-y-0 lg:space-x-8">
      {/* MDX Content */}
      <div className="prose prose-neutral dark:prose-invert max-w-none w-full lg:w-1/2 overflow-auto">
        <ExampleMDX />
      </div>
    </div>
  );
};

export default ProjectPage;
