import React from 'react';

const ReceiptDisclosure: React.FC = () => {
    return (
        <div className='flex absolute bottom-0 md:left-0 bg-highlight m-4 shadow-md'>
            <img src="receipt_disclosure.svg" alt="disclosure" />
        </div>
    );
};

export default ReceiptDisclosure;