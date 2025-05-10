import { useState } from "react";

export default function PortfolioThumbnail({ 
  number = "01", 
  frontImage = "/api/placeholder/400/320", 
  backImage = "/api/placeholder/400/320",
  alt = "Portfolio item"
}) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="relative w-[8rem] cursor-pointer">
      {/* Number indicator - fixed above */}
      <div className="text-[13px] font-mono font-medium text-black mb-2">
        [{number}]
      </div>
      
      <div 
        className={`relative w-full h-[10rem] overflow-hidden transition-all`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Front image */}
        <div
          className="absolute inset-0 w-full h-full transition-transform duration-200 ease-in-out"
          style={{
            transform: isHovered ? 'translateX(-100%)' : 'translateX(0)',
            transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <img 
            src={frontImage} 
            alt={alt} 
            className="w-full h-full object-cover"
          />
          
          {/* Overlay with subtle gradient on hover */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/20 transition-opacity duration-100"
            style={{ opacity: isHovered ? 0.7 : 0 }}
          />
        </div>
        
        {/* Back image (revealed on hover) */}
        <div
          className="absolute inset-0 w-full h-full transition-transform duration-100 ease-in-out"
          style={{
            transform: isHovered ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <img 
            src={backImage} 
            alt={`${alt} - secondary view`} 
            className="w-full h-full object-cover"
          />
          
          {/* Shine effect that moves across */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000"
            style={{ 
              opacity: isHovered ? 1 : 0,
              transform: `translateX(${isHovered ? '100%' : '-100%'}) skewX(-12deg)`,
              transition: 'transform 1.2s ease-in-out, opacity 0.5s ease-in-out'
            }}
          />
        </div>
      </div>
    </div>
  );
}
