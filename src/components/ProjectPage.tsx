// pages/project.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import ExampleMDX from '../docs/example.mdx';
import exampleMdxContent from '../docs/example.mdx?raw';
import matter from 'gray-matter';
import { Buffer } from 'buffer';

// Import the raw MDX content as a string

window.Buffer = Buffer;

const ProjectPage = () => {

  function JSONtoMarkdown({ jsonData }) {
    const formattedJson = JSON.stringify(jsonData, null, 2);

    return (
      <pre>
        {formattedJson}
      </pre>
    );
  }

  const { data: frontmatter, content } = matter(exampleMdxContent);
  
  console.log('Frontmatter:', frontmatter);
  console.log('Content:', content);

  //NOTE: Add array to the frontmatter for gallery, and inline iamges will be formated regularly.
  return (
    <div className="flex flex-col h-[100vh] relative w-full">
      {/* cover */}
      <div>
        <img className="relative z-[-2] h-[100vh] w-full object-cover" src={`${frontmatter.coverImage}`}/>
        <h1 className="text-[75px] text-highlight p-4 font-mono absolute bottom-0 z-[5]">{frontmatter.title}:<br/> <span className="font-serif">{frontmatter.description}</span></h1>
      </div>
      <div className="mt-[250px] px-5 bg-red">
        <div className="prose prose-neutral dark:prose-invert max-w-none w-full overflow-auto">
          <ReactMarkdown>
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
