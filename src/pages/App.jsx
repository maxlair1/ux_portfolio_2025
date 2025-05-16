import React, { useLayoutEffect, useRef } from "react";
import '../styles/App.scss';
//Routing
import { Routes, Route, useLocation } from "react-router";
// Animations
import gsap from 'gsap';
import { AnimatePresence } from 'framer-motion';
import { ScrollTrigger, ScrollSmoother, ScrollToPlugin } from 'gsap/all';
// Pages
import ProjectPage from './ProjectPage.tsx';
import HomePage from './HomePage.tsx';
//Components
import Navigation from '../components/Navigation.tsx';

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

  // Screen Scroll Smoother
  useLayoutEffect(() => {
    const smoother = ScrollSmoother.create({
      smooth: 2,
      effects: true,
      normalizeScroll: true
    });
  }, []);

  return (
    <>
      {/* <AnimatePresence mode="wait"> */}
      <Navigation />
      <div id="smooth-wrapper">
        <div id="smooth-content">
            <Routes location={location} key={location.pathname}>
              <Route index element={<HomePage />}/>
              <Route path="/projects/:slug" element={<ProjectPage />}/>
            </Routes>
        </div>
      </div>
      {/* </AnimatePresence> */}
      {/* https://gsap.com/community/forums/topic/34723-animated-cursor-follower-div-that-animates-on-top-of-certain-objects/#:~:text=I%20think%20I%20misunderstood%20your%20original%20goal%20%2D%20you%20don%27t%20even%20need%20to%20do%20any%20invalidate()%20%2D%20just%20play()%20and%20reverse()%3A%C2%A0 */}
      {/* <FollowLabel /> */}
    </>
  );
}
