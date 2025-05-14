import React from 'react';
import { motion } from 'framer-motion';

type StickerProps = {
    children?: React.ReactNode;
    className?: string;
    svg?: React.ReactNode;
};

const Sticker: React.FC<StickerProps> = ({ children, className, svg }) => {
    return (
        <motion.div
        classname="z-40"
            initial={{ scale: 1 }}
            width={50}
            height={50}
            style={{ cursor: 'grab', filter: 'drop-shadow(0px 4px 12px rgba(0,0,0,0.15))' }}
            drag
            dragMomentum={false}
            whileDrag={{
                scale: 1.15,
                filter: 'drop-shadow(0px 8px 24px rgba(0,0,0,0.25))',
                zIndex: 2,
            }}
            whileTap={{ cursor: 'grabbing' }}
            transition={{ type: 'ease' }}
        >
            <img className="cursor-events-none" src={svg}></img>
            {children}
        </motion.div>
    );
};

export default Sticker;