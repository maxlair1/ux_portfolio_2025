// pages/project.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import ExampleMDX from '../docs/LocalBean.md?raw';
import matter from 'gray-matter';
import { Buffer } from 'buffer';
import gsap from 'gsap';
import {SplitText} from 'gsap/all';

//register plugin
gsap.registerPlugin(SplitText) 

// Import the raw MDX content as a string
window.Buffer = Buffer;

let split = SplitText.create(".animatedTitle", {type: "chars"});
gsap.to(split.chars, {
  duration: 0.25, 
  // animate from 100px below
  // fade in from opacity: 0 and visibility: hidden
  stagger: 0.05, // 0.05 seconds between each
  backgroundColor: "white",
});

const ProjectPage = () => {
  const { data: frontmatter, content } = matter(ExampleMDX);
  
  console.log('Frontmatter:', frontmatter);
  console.log('Content:', content);

  //NOTE: https://stickers.framer.website/ let user move stickers around that are like the logo of the project etc
  //NOTE: Add array to the frontmatter for gallery, and inline iamges will be formated regularly.
  return (
    <div className="flex flex-col h-[100vh] relative w-full">
      {/* Cover */}
      <div>
        <img className="relative z-[-2] h-[100vh] w-full object-cover" src={`${frontmatter.coverImage}`}/>
        <div className="absolute inset-0 flex flex-col justify-center items-center z-[5]">
          <div className="">
            <h1 className="animatedTitle xl:text-[5vw] text-[70px] text-highlight p-4 font-mono text-center">
              {frontmatter.title}:<br />
              <span className="font-serif">{frontmatter.description}</span>
            </h1>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="mt-[250px] px-5 bg-red max-w-[1125px] mx-auto px-4 sm:px-6 lg:px-8">
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
