import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';
import { loadImagesWithPrefix } from '../utils/loadImagesWithPrefix.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Observer } from 'gsap/Observer';
import getImageSize from '../utils/getImageSize.js'

gsap.registerPlugin(ScrollTrigger, Observer);

export default function TickerSlider({ imageHook }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    function shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length,  randomIndex;

      // While there remain elements to shuffle.
      while (currentIndex != 0) {
    
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
  
    return array;
    };

    loadImagesWithPrefix(imageHook, { omitVariants: true }).then(shuffle).then(setImages);

  }, [imageHook]);

  return (
    <Splide
      options={{
        type: 'loop',
        drag: 'free',
        arrows: false,
        pagination: false,
        perPage: 3,
        autoScroll: {
          speed: 0.2, // Adjust speed as needed
          pauseOnHover: false,
          pauseOnFocus: false,
        },
        fixedHeight: '25vw',
        fixedWidth: '33vw',
        cover: true, 
        breakpoints: {
          1280: {
            fixedWidth: 600,
            fixedHeight: 450,
          },
          1024: {
            fixedWidth: 500,
            fixedHeight: 375,
          },
          768: {
            fixedWidth: 400,
            fixedHeight: 300,
          },
          480: {
            fixedWidth: 300,
            fixedHeight: 225,
          },
        },      // Ensure images cover the slide area
      }}
      extensions={{ AutoScroll }}
      aria-label="Continuous Image Carousel"
    >
      {images.map((src, i) => (
        <SplideSlide key={i}>
          <img
            src={src}
            alt={`slide-${i}`}
          />
        </SplideSlide>
      ))}
    </Splide>
  );
}
