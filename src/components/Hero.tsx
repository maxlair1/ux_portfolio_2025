import React from 'react';
import ReceiptDisclosure from './ReceiptDisclosure';
import ThumbnailMini from './ThumbnailMini';

export default function Profile() {
  return (
    <div className="flex items-center justify-center h-screen">
      <img
        src="hero_logo.svg"
        alt="Hero Logo (Max Lair)"
      />
      <ReceiptDisclosure></ReceiptDisclosure>
      <div className='absolute bottom-4 right-4'>
        <div className='flex flex-row gap-4'>
          <ThumbnailMini 
            number="01" 
            frontImage="https://images.unsplash.com/photo-1726661025476-be2e9f427565?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            backImage="https://images.unsplash.com/photo-1743444374283-06501bf51c11?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          />
          <ThumbnailMini 
            number="02" 
            frontImage="https://images.unsplash.com/photo-1726661025476-be2e9f427565?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            backImage="https://images.unsplash.com/photo-1743444374283-06501bf51c11?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          />
          <ThumbnailMini 
            number="03" 
            frontImage="https://images.unsplash.com/photo-1726661025476-be2e9f427565?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            backImage="https://images.unsplash.com/photo-1743444374283-06501bf51c11?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          />
        </div>
      </div>
    </div>
  );
}