import React from 'react';

const ReceiptDisclosure: React.FC = () => {
    return (
        <div className='flex md:absolute bottom-0 md:left-0 bg-highlight p-7 m-4 shadow-md'>
            <img src="receipt_disclosure.svg" alt="disclosure" />
        </div>
    );
};

export default ReceiptDisclosure;