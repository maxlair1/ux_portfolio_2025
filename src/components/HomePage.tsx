import React from 'react';
import Hero from './Hero.tsx';
import About from './About.tsx';
import Folio from './Folio.tsx';
import Navigation from './Navigation.tsx';

const HomePage: React.FC = () => {
    return (
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <Hero></Hero>
            <About></About>
            <div>
                <Folio></Folio>
            </div>
        </div>
    );
};

export default HomePage;