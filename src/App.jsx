import React from "react";
import { useLayoutEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger, ScrollSmoother, ScrollToPlugin } from 'gsap/all';
import { useLocation } from "react-router";
import './styles/App.scss';
// Components
import Navigation from './components/Navigation.tsx';
import FuzzyOverlay from './components/FuzzyOverlay.tsx';
import FollowLabel from './components/FollowLabel.tsx'
import PageTransition from "./components/PageTransition.tsx"

// Register plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

export default function App(props) {
  const location = useLocation();
  
  // Smooth scroll for nav anchor links
  useLayoutEffect(() => {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    const handleClick = (e) => {
      e.preventDefault();
      const target = e.currentTarget.getAttribute('href');
      const targetEl = document.querySelector(target);
      if (targetEl) {
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: targetEl, offsetY: 0 },
          ease: "power4.inOut"
        });
      }
    };
    navLinks.forEach(link => link.addEventListener('click', handleClick));
    return () => {
      navLinks.forEach(link => link.removeEventListener('click', handleClick));
    };
  }, []);

  useLayoutEffect(() => {
    const smoother = ScrollSmoother.create({
      smooth: 2,
      effects: true,
      normalizeScroll: true
    });
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {/* content wrapper vvv */}
      <PageTransition />
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
      {/* https://gsap.com/community/forums/topic/34723-animated-cursor-follower-div-that-animates-on-top-of-certain-objects/#:~:text=I%20think%20I%20misunderstood%20your%20original%20goal%20%2D%20you%20don%27t%20even%20need%20to%20do%20any%20invalidate()%20%2D%20just%20play()%20and%20reverse()%3A%C2%A0 */}
      {/* <FollowLabel /> */}
    </>
  );
}
