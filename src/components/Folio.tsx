import React from 'react';
import { motion } from "motion/react"

const Folio: React.FC = () => {
    return (
        <div className='mt-40 items-center flex flex-col gap-4'>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                whileDrag={{ scale: 0.9, rotate: 10 }}
                dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }} // limits the drag area
                dragElastic={0.5} // how far it can stretch past the constraints
                drag
            >
                <img className='pointer-events-none' src="folder.svg" alt="folder" />
            </motion.div>
        </div>
    );
};

export default Folio;