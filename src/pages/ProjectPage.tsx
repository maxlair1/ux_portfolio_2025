// pages/project.tsx
import { Buffer } from 'buffer';
import React, { useState, useEffect } from 'react';
//Router
import { useParams } from 'react-router';
//Markdown
import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
//Animations
import { motion } from 'framer-motion';
import gsap from 'gsap';
import {SplitText} from 'gsap/all';
//Components
import ImageRenderer from '../components/ImageRenderer.tsx';
import Footer from '../components/Footer.tsx';
import Contact from '../components/Contact.tsx';
import getImageSize from '../utils/getImageSize';

window.Buffer = Buffer;

//register plugin
gsap.registerPlugin(SplitText) 

const ProjectPage = ({path}: { path: string }) => {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [data, setData] = useState<data>({});

  console.log(data.coverImage)

  type data = {
    title?: string;
    description?: string;
    date?: string;
    coverImage?: string;
  };

  //Stagger text animation on arrival
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
    const loadMarkdown = async () => {
      try {
        const file = await import(`../content/${slug}.md?raw`);
        const parsed = matter(file.default);
        setContent(parsed.content);
        setData(parsed.data);
      } catch (err) {
        console.error('Markdown file not found:', slug, err);
      }
    };

    loadMarkdown();
  }, [slug]);

  //NOTE: https://stickers.framer.website/ let user move stickers around that are like the logo of the project etc
  //NOTE: Add array to the frontmatter for gallery, and inline iamges will be formated regularly.
  //NOTE: For title text: https://motion.dev/docs/animate#:~:text=import%20%7B%20stagger,)%20%7D)
  //NOTE: For future gallery or other custom components https://www.npmjs.com/package/markdown-to-jsx
  return (
    <>
      <motion.span
          className="absolute inset-0 bg-highlight z-10"
          initial={{ width: "100%" }}
          animate={{ width: 0, left: 0 }}
          transition={{ duration: 1.5, ease: 'anticipate', delay: 0.2 }}
          aria-hidden="true"
          style={{ borderRadius: 4 }}
      />
        <div className="flex flex-col relative w-full">
          {/* Cover */}
          <div className="relative h-[100vh]">
          <img 
            className="relative z-0 h-[100vh] w-full object-cover" 
            src={data.coverImage} 
            srcSet={`
              ${getImageSize(data.coverImage, 25)} 400w,
              ${getImageSize(data.coverImage, 50)} 400w,
              ${data.coverImage} 1600w
            `}
            />
            <div className="absolute inset-0 flex flex-col justify-end items-bottom p-4 md:p-10">
              <div>
                <h1 className="unblurOnArrival inline-flex box-decoration-clone xl:text-[4vw] text-[50px] text-text-main bg-highlight px-4 py-1 font-mono">
                  {data.title}:
                </h1>
                <br />
                <span className="unblurOnArrival font-serif inline-flex box-decoration-clone xl:text-[4vw] text-[50px] text-text-main bg-highlight px-4 py-2">{data.description}</span>
                <br/>
                <div className="unblurOnArrival inline-flex box-decoration-clone p-4 text-text-main bg-highlight items-middle gap-2">
                  <span className="font-mono">{new Date(data.date).toLocaleDateString()}&nbsp;&nbsp;</span>
                  <img 
                  className="h-5 inline" 
                  src="/deicons.svg" 
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Content */}
          {/* <Sticker svg={data.sticker}></Sticker> */}
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
    </>
  );
};

export default ProjectPage;
