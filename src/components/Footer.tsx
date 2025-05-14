import React from 'react';

const Footer = () => {
    return (
        <footer className='mt-40'>
            <div className='p-20 bg-grey-900 flex justify-center'>
                <p className='font-mono text-highlight'>&copy; {new Date().getFullYear()} Max lair. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;