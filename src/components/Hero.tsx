import React, { useEffect, useState } from 'react';
import ReceiptDisclosure from './ReceiptDisclosure';
import ThumbnailMini from './ThumbnailMini';
import ThreeDMe from './ThreeDMe';
import styles from './Hero.module.scss';

export default function Profile() {
  const [isBlurred, setIsBlurred] = useState(true);
  const [modelLoaded, setModelLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsBlurred(false), 100); // slight delay for effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center md:justify-center h-screen flex-col relative">
      <img
        className={`mix-blend-darken p-4 mt-20 md:mt-0 md:w-full transition-all duration-1000 delay-20 ${isBlurred ? 'blur-md' : 'blur-0'}`}
        src="hero_logo.svg"
        alt="Hero Logo (Max Lair)"
      />
      <ReceiptDisclosure />
      <div className='absolute bottom-4 right-4 invisible md:visible'>
        <div className='flex flex-row gap-4'>
          <ThumbnailMini 
            number="01" 
            frontImage="https://images.unsplash.com/photo-1726661025476-be2e9f427565?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            backImage="https://images.unsplash.com/photo-1743444374283-06501bf51c11?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          />
          <ThumbnailMini 
            number="02" 
            frontImage="https://images.unsplash.com/photo-1726661025476-be2e9f427565?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            backImage="https://images.unsplash.com/photo-1743444374283-06501bf51c11?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          />
          <ThumbnailMini 
            number="03" 
            frontImage="https://images.unsplash.com/photo-1726661025476-be2e9f427565?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            backImage="https://images.unsplash.com/photo-1743444374283-06501bf51c11?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          />
        </div>
      </div>
      <div className={`${modelLoaded ? 'opacity-1 translate-y-[0px]' : 'opacity-0 translate-y-[200px]'} transition-all duration-300 z-[-1] absolute justify-center bottom-0 top-0 left-0 right-0 flex flex-col items-center pointer-events-none`}>
        <ThreeDMe onModelLoaded={() => {setModelLoaded(true)}} gltfUrl="me_jacket_cropped.glb" style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  );
}