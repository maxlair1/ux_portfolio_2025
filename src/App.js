import React from "react";
import { useEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger, ScrollSmoother } from 'gsap/all';
import './styles/App.scss';
// Components
import Navigation from './components/Navigation.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Folio from './components/Folio.tsx';
// Register plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  const triggerRef = useRef(null);

  useEffect(() => {
    const endTrigger = triggerRef.current;

    gsap.to("body", {
      backgroundColor: "#1e1e1e",
      ease: "true",
      scrollTrigger: {
        trigger: endTrigger,
        start: "top bottom",  // when the top of the trigger hits the bottom of viewport
        end: "top center",    // when the top of the trigger hits the center of viewport
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div>
      <Navigation />
      {/* TODO: Add trunctation */}
      <div className='mx-12'>
        <Hero></Hero>
        <About></About>
        <div ref={triggerRef}>
          <Folio></Folio>
        </div>
      </div>
    </div>
  );
}

export default App;
