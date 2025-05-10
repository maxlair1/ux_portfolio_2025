import React from "react";
import { useEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger, ScrollSmoother } from 'gsap/all';
import './styles/App.scss';
// Components
import Navigation from './components/Navigation.tsx';
import FuzzyOverlay from './components/FuzzyOverlay.tsx';

// Register plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App(props) {

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      smooth: 2,
      effects: true,
      normalizeScroll: true
    });
  
    return () => {
      smoother.kill(); // Clean up on unmount
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // useEffect(() => {
  //   const endTrigger = triggerRef.current;

  //   gsap.to("body", {
  //     backgroundColor: "#1e1e1e",
  //     ease: "true",
  //     scrollTrigger: {
  //       trigger: endTrigger,
  //       start: "top bottom",  // when the top of the trigger hits the bottom of viewport
  //       end: "top center",    // when the top of the trigger hits the center of viewport
  //       scrub: true,
  //     },
  //   });

  //   return () => {
  //     ScrollTrigger.getAll().forEach(t => t.kill());
  //   };
  // }, []);

  return (
    <>
      {/* content wrapper vvv */}
      <div id="smooth-wrapper">
        {/* Content vvv */}
        <div id="smooth-content" className="overflow-hidden relative">
          {/* TODO: Add trunctation */}
          <div data-scroll-section>
            {/* HOME PAGE */}
            {props.children}
          </div>
          <FuzzyOverlay />
        </div>
      </div>
      <Navigation />
    </>
    
  );
}

export default App;
