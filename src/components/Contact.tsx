import React from 'react';
import Button from './Button';

const Contact: React.FC = () => {
    return (
        <div className='flex flex-col items-center gap-10'>
            <h1 className='text-center'>Let's work together</h1>
            <Button appendStart="[" href='mailto:max@lairfamily.com' variant='secondary' text='Reach out' appendEnd="]"></Button>
        </div>
    );
};

export default Contact;