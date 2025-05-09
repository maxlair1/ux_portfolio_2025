import React, { useState } from 'react';
import Button from './Button.tsx';

const navItems = [
    { id: '00', text: 'Welcome', href: '#home' },
    { id: '01', text: 'About', href: '#about' },
    { id: '02', text: 'Work', href: '#work' },
    { id: '03', text: 'Contact', href: '#contact' },
];

const Navigation: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed m-4 z-50">
            {/* Menu Button */}
            <div className='md:hidden flex items-center'>
                <Button onClick={() => setOpen((prev) => !prev)} appendStart={"["} text={"menu"} appendEnd={"]"} />
            </div>

            {/* Desktop Navigation with blurred, tapered background */}
            <div className="hidden md:block relative">
                <div
                    className="
                        absolute inset-0 -z-10
                        backdrop-blur-md
                        bg-white/01
                        pointer-events-none
                        rounded-xl
                        mask-gradient-horizontal
                    "
                />
                <ul className="flex flex-col gap-2 p-4">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <a href={item.href}>
                                <Button appendStart={<p className="superscript">{item.id}</p>} text={item.text} />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Navigation Overlay */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-300 z-40 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setOpen(false)}
            />
            <ul
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg flex flex-col gap-4 p-8 transform transition-transform duration-300 z-50
                ${open ? 'translate-x-0' : 'translate-x-full'}
                md:hidden`}
            >
                {navItems.map((item) => (
                    <li key={item.id}>
                        <a href={item.href} onClick={() => setOpen(false)}>
                            <Button appendStart={<p className="superscript">{item.id}</p>} text={item.text} />
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;