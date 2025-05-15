import React, { useState } from 'react';
import { useLocation } from 'react-router'
import Button from './Button.tsx';

const navItems = [
    { id: '00', text: 'Welcome', href: '#home' },
    { id: '01', text: 'About', href: '#about' },
    { id: '02', text: 'Work', href: '#work' },
    { id: '03', text: 'Contact', href: '#contact' },
];


const Navigation: React.FC = () => {
    const [open, setOpen] = useState(false);
    let location = useLocation()
    console.log(location.pathname)

    const standardNav = (
        <nav>
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
                <ul className="flex flex-col p-4">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <Button href={item.href} appendStart={<p className="superscript">{item.id}</p>} text={item.text} />
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
                        <Button onClick={() => setOpen(false)} href={item.href} appendStart={<p className="superscript">{item.id}</p>} text={item.text} />
                    </li>
                ))}
            </ul>
        </nav>
    )

    const backButton = (
        <div className="md:mx-6">
            <Button
                href="/"
                variant="secondary"
                text="Back"
                appendStart={
                    <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    >
                        <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" />
                    </svg>
                }
            />
        </div>
    )

    return (
        <nav className="fixed m-4 z-50">
            {location.pathname === "/" ? standardNav : backButton}
        </nav>
    );
};

export default Navigation;