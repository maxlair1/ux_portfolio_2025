// pages/project.tsx
import React from 'react';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import { Buffer } from 'buffer';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import {SplitText} from 'gsap/all';
import rehypeRaw from 'rehype-raw';
import Sticker from './Sticker.tsx';
import ImageRenderer from './ImageRenderer.tsx';
import Button from './Button.tsx';
import Footer from './Footer.tsx';
import Contact from './Contact.tsx';

//register plugin
gsap.registerPlugin(SplitText) 

window.Buffer = Buffer;

const ProjectPage = ({path}: { path: string }) => {
  const [content, setContent] = useState('');
  const [frontmatter, setFrontmatter] = useState<Frontmatter>({});

  type Frontmatter = {
    title?: string;
    description?: string;
    date?: string;
    coverImage?: string;
  };

  useEffect(() => {
  function staggerTextGSAP(){
    gsap.set(".unblurOnArrival", {y: 50, opacity: 0, filter: "blur(20px)"})
    gsap.to(".unblurOnArrival", {
      duration: 0.5,
      delay: 1,
      y: 0,
      filter: "blur(0px)",
      opacity: 1,
      stagger: 0.1,
      ease: "power3.out"  
    })
  }

  staggerTextGSAP()

}, []);

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(path);
        const markdown = await response.text();

        const { data, content } = matter(markdown);
        
        setFrontmatter(data);
        setContent(content);
      } catch (error) {
        console.error("Error loading markdown file:", error);
      }
    };

    fetchMarkdown();
  }, [path]);

  //NOTE: https://stickers.framer.website/ let user move stickers around that are like the logo of the project etc
  //NOTE: Add array to the frontmatter for gallery, and inline iamges will be formated regularly.
  //NOTE: For title text: https://motion.dev/docs/animate#:~:text=import%20%7B%20stagger,)%20%7D)
  //NOTE: For future gallery or other custom components https://www.npmjs.com/package/markdown-to-jsx
  return (
    <div className="flex flex-col relative w-full">
      {/* Cover */}
      <div className="relative h-[100vh]">
        <motion.span
          className="absolute inset-0 bg-highlight z-10"
          initial={{ width: "100%" }}
          animate={{ width: 0, left: 0 }}
          transition={{ duration: 1.5, ease: 'anticipate', delay: 0.2 }}
          aria-hidden="true"
          style={{ borderRadius: 4 }}
        />
        <img className="relative z-0 h-[100vh] w-full object-cover" src={`${frontmatter.coverImage}`}/>
        <div className="absolute inset-0 flex flex-col justify-end items-bottom p-10">
          <div>
            <h1 className="unblurOnArrival inline-flex box-decoration-clone xl:text-[4vw] text-[50px] text-text-main bg-highlight px-4 py-1 font-mono">
              {frontmatter.title}:
            </h1>
            <br />
            <span className="unblurOnArrival font-serif inline-flex box-decoration-clone xl:text-[4vw] text-[50px] text-text-main bg-highlight px-4 py-2">{frontmatter.description}</span>
            <br/>
            <div className="unblurOnArrival inline-flex box-decoration-clone p-4 text-text-main bg-highlight items-middle gap-2">
              <span className="font-mono">{frontmatter.date}&nbsp;&nbsp;</span>
              <img className="h-5 inline" src="/deicons.svg"/>
            </div>
          </div>
        </div>
      </div>
      {/* Content */}
      {/* <Sticker svg={frontmatter.sticker}></Sticker> */}
      <div className="my-[250px] px-5 bg-red max-w-[1125px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-neutral dark:prose-invert max-w-none w-full overflow-visible">
          <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          components={{
              img: ImageRenderer, // Use your custom renderer for images
            }}>
            {content}
          </ReactMarkdown>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

//GSAP animation for title

export default ProjectPage;
