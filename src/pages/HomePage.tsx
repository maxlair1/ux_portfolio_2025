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
import Companies from '../components/Companies.tsx'

const HomePage: React.FC = () => {
    return (
        <>
            <div className="" id='home'>
                <div className='max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8'>
                    <motion.span
                        className="absolute inset-0 bg-highlight z-10"
                        initial={{ height: '100%' }}
                        animate={{ height: 0, left: 0 }}
                        transition={{ duration: 1.5, ease: 'anticipate', delay: 0.1 }}
                        aria-hidden="true"
                        style={{ borderRadius: 4 }}
                    />
                    <Hero></Hero>
                </div>
                <div id='about' className='max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8'>
                    <About></About>
                </div>
                <Companies/>
                <div id='work' className='max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8'>
                    {/* <Folio></Folio> */}
                    <Work></Work>
                </div>
                <div id='contact' className='max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8'>
                    <Contact></Contact>
                </div>
            </div>
            <Footer />
            <FuzzyOverlay />
        </>
    );
};

export default HomePage;