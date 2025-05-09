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
            {/* Hamburger / Collapse Button */}
            <button
                className="md:hidden flex items-center px-3 py-2 border rounded transition-all duration-300 focus:outline-none"
                onClick={() => setOpen((prev) => !prev)}
                aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            >
                <span
                    className={`block w-6 h-0.5 bg-black transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}
                />
                <span
                    className={`block w-6 h-0.5 bg-black my-1 transition-all duration-300 ${open ? 'opacity-0' : ''}`}
                />
                <span
                    className={`block w-6 h-0.5 bg-black transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}
                />
            </button>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex flex-col gap-2">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <a href={item.href}>
                            <Button appendStart={<p className="superscript">{item.id}</p>} text={item.text} />
                        </a>
                    </li>
                ))}
            </ul>

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