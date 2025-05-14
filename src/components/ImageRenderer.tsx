import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ImageRenderer(props: any) {
    const [fullscreenImg, setFullscreenImg] = useState<string | null>(null);

    return (
        <>
            <motion.img
                {...props}
                className={`transition-all w-full my-10 ${props.className || ''}`}
                transition={{ ease: 'anticipate', duration: 0.3 }}
                alt={props.alt}
            />
        </>
    );
}