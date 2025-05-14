import React from "react";
import { useLayoutEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger, ScrollSmoother } from 'gsap/all';
import './styles/App.scss';
// Components
import Navigation from './components/Navigation.tsx';
import FuzzyOverlay from './components/FuzzyOverlay.tsx';

// Register plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function App(props) {

  useLayoutEffect(() => {
    const smoother = ScrollSmoother.create({
      smooth: 2,
      effects: true,
      normalizeScroll: true
    });
  }, []);

  return (
    <>
      {/* content wrapper vvv */}
      <div id="smooth-wrapper">
        {/* Content vvv */}
        <div id="smooth-content">
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
