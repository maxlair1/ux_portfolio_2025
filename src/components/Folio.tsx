import React, { useState, useRef } from 'react';
import { motion } from "framer-motion"; // Use framer-motion, not motion/react
import Carousel from './Carousel';

const CLICK_DRAG_THRESHOLD = 5; // pixels

// Example photograph images
const photographs = [
    { id: 1, src: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Photo 1" },
    { id: 2, src: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Photo 2" },
    { id: 3, src: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Photo 3" },
];

const getRandomPosition = () => ({
    x: Math.random() * 200 - 100,
    y: Math.random() * 100 - 50,
    rotate: Math.random() * 30 - 15,
});

const Folio: React.FC = () => {
    const [open, setOpen] = useState(false);
    const dragStart = useRef<{ x: number; y: number } | null>(null);

    const handlePointerDown = (e: React.PointerEvent) => {
        dragStart.current = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = (e: React.PointerEvent) => {
        if (!dragStart.current) return;
        const dx = Math.abs(e.clientX - dragStart.current.x);
        const dy = Math.abs(e.clientY - dragStart.current.y);
        if (dx < CLICK_DRAG_THRESHOLD && dy < CLICK_DRAG_THRESHOLD) {
            setOpen(o => !o);
        }
        dragStart.current = null;
    };

    // Store random positions for each photo when open
    const [photoPositions, setPhotoPositions] = useState<{ [id: number]: { x: number; y: number; rotate: number } }>({});

    React.useEffect(() => {
        if (open) {
            // Assign random positions when opening
            const positions: { [id: number]: { x: number; y: number; rotate: number } } = {};
            photographs.forEach(photo => {
                positions[photo.id] = getRandomPosition();
            });
            setPhotoPositions(positions);
        } else {
            setPhotoPositions({});
        }
    }, [open]);

    return (
        <div className='mt-40 items-center flex flex-col gap-4 relative'>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                whileDrag={{ scale: 0.9, rotate: 10 }}
                dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
                dragElastic={0.5}
                drag
                style={{ cursor: 'pointer', zIndex: 2 }}
                onPointerDown={handlePointerDown}
                onPointerUp={handlePointerUp}
            >
                <img
                    className='pointer-events-none'
                    src={open ? "folder_open.svg" : "folder.svg"}
                    alt="folder"
                />
            </motion.div>
            {open && (
                <div className="absolute left-1/2 top-1/2" style={{ zIndex: 1 }}>
                    {photographs.map(photo => (
                        <motion.img
                            key={photo.id}
                            src={photo.src}
                            alt={photo.alt}
                            drag
                            dragConstraints={{ left: -300, right: 300, top: -200, bottom: 200 }}
                            initial={photoPositions[photo.id] || { x: 0, y: 0, rotate: 0 }}
                            animate={photoPositions[photo.id] || { x: 0, y: 0, rotate: 0 }}
                            style={{
                                width: 120,
                                height: 80,
                                position: 'absolute',
                                left: -60,
                                top: -40,
                                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                borderRadius: 8,
                                pointerEvents: 'auto',
                                userSelect: 'none',
                            }}
                            whileTap={{ scale: 0.95, zIndex: 3 }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Folio;