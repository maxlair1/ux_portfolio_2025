import React from 'react';
import { motion } from 'framer-motion';
import Hero from './Hero.tsx';
import About from './About.tsx';
import Folio from './Folio.tsx';
import Navigation from './Navigation.tsx';

const HomePage: React.FC = () => {
    return (
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.span
                className="absolute inset-0 bg-highlight z-10"
                initial={{ height: '100%' }}
                animate={{ height: 0, left: 0 }}
                transition={{ duration: 1.5, ease: 'anticipate', delay: 0.1 }}
                aria-hidden="true"
                style={{ borderRadius: 4 }}
            />
            <Hero></Hero>
            <About></About>
            <div>
                <Folio></Folio>
            </div>
        </div>
    );
};

export default HomePage;