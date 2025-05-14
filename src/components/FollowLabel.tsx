import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const FollowLabel: React.FC = () => {

    //set initial mouse position, and give it a ref
    const mousePos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
    //give the thing that follows the mouse a ref
    const followerRef = useRef<HTMLDivElement>(null);

    //create a variable that resets each time the mouse is moved.
    const handleMouseMove = (event: MouseEvent) => {
        mousePos.current = { x: event.clientX, y: event.clientY };
        setMousePosVersion(v => v + 1); // trigger re-render/effect
    };

    // State to trigger effect when mousePos changes
    const [mousePosVersion, setMousePosVersion] = React.useState(0);

    // ON PAGE START
    useEffect(() => {
        gsap.set(followerRef.current, { x: mousePos.current.x, y: mousePos.current.y, opacity: 0 });
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll, true);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll, true);
        };
    }, []);

    // ON MOUSE MOVE
    useEffect(() => {
        gsap.to(followerRef.current, {
            x: mousePos.current.x,
            y: mousePos.current.y,
            opacity: 1,
            duration: 0.2,
            ease: "power2.out"
        });
    }, [mousePosVersion]);

    // Handle scroll to update follower position
    const handleScroll = () => {
        gsap.to(followerRef.current, {
            x: mousePos.current.x,
            y: mousePos.current.y,
            opacity: 1,
            duration: 0.2,
            ease: "power2.out"
        });
        setMousePosVersion(v => v + 1);
    };

    //ON MOVE INSIDE TARGET
    // useEffect(() => {

    // }, [])

    (window as any).__FOLLOW_LABEL__ = {
        handleHover: (label: string) => console.log('Hovered:', label),
        handleLeave: () => console.log('Hover left'),
    };

    return (
        <div>
            <div ref={followerRef} className='pointer-events-none w-4 h-4 bg-red rounded-lg'>
                test
            </div>
        </div>
    );
};

export default FollowLabel;
