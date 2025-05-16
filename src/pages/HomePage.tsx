import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero.tsx';
import About from '../components/About.tsx';
import Folio from '../components/Folio.tsx';
import Navigation from '../components/Navigation.tsx';
import Contact from '../components/Contact.tsx';
import Work from '../components/Work.tsx';
import Footer from '../components/Footer.tsx';
import FuzzyOverlay from '../components/FuzzyOverlay.tsx';

const HomePage: React.FC = () => {
    return (
        <>
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8" id='home'>
                <FuzzyOverlay />
                <motion.span
                    className="absolute inset-0 bg-highlight z-10"
                    initial={{ height: '100%' }}
                    animate={{ height: 0, left: 0 }}
                    transition={{ duration: 1.5, ease: 'anticipate', delay: 0.1 }}
                    aria-hidden="true"
                    style={{ borderRadius: 4 }}
                />
                <Hero></Hero>
                <div id='about'>
                <About></About>
                </div>
                <div id='work'>
                    {/* <Folio></Folio> */}
                    <Work></Work>
                </div>
                <div id='contact'>
                    <Contact></Contact>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default HomePage;