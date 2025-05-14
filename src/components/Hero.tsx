import React, { useEffect, useState } from 'react';
import ReceiptDisclosure from './ReceiptDisclosure';
import ThumbnailMini from './ThumbnailMini';
import ThreeDMe from './ThreeDMe';
import styles from './Hero.module.scss';
import projectsJSON from '../projects.json';
import FollowLabelTarget from './FollowLabelTarget';

export default function Profile() {
  const [isBlurred, setIsBlurred] = useState(true);
  const [modelLoaded, setModelLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsBlurred(false), 100); // slight delay for effect
    return () => clearTimeout(timer);
  }, []);

 const firstThreeProjects = Object.entries(projectsJSON.projects)
  .slice(0, 3)
  .map(([key, project]) => ({ key, ...project }));

  return (
    <div className="flex items-center md:justify-center h-screen flex-col relative">
      <img
        className={`mix-blend-darken p-4 mt-20 md:mt-0 md:w-full transition-all duration-1000 delay-20 ${isBlurred ? 'blur-md' : 'blur-0'}`}
        src="hero_logo.svg"
        alt="Hero Logo (Max Lair)"
      />
      <ReceiptDisclosure />
      <div className='absolute bottom-4 right-4 invisible lg:visible'>
        <div className='flex flex-row gap-4'>
          {firstThreeProjects.map((project, index) => (
            // <FollowLabelTarget label='test'>
              <ThumbnailMini 
                number={String(index)}
                frontImage={project.thumbnailFirst}
                backImage={project.thumbnailSecond}
                href={`/project/${project.slug}`}
                >
              </ThumbnailMini>
            // </FollowLabelTarget>
          ))}
        </div>
      </div>
      <div className={`${modelLoaded ? 'opacity-1 translate-y-[0px]' : 'opacity-0 translate-y-[200px]'} transition-[cubic-bezier(0.505, 0.800, 0.540, 0.995)] duration-700 z-[-1] absolute justify-center bottom-0 top-0 left-0 right-0 flex flex-col items-center pointer-events-none`}>
        <ThreeDMe onModelLoaded={() => {setModelLoaded(true)}} gltfUrl="me_jacket_cropped.glb" style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  );
}