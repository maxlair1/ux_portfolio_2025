import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';

const Companies = () => {
    const [companyImages, setCompanyImages] = useState([]);
    
      useEffect(() => {
        const images = Object.entries(
          import.meta.glob('../static/company_*', { eager: true })
        ).map(([_, mod]) => mod.default || '');
    
        setCompanyImages(images);
      }, []);

    return (
        <>
        <div className="my-20">
            <h6 className="flex justify-center text-center mb-6">I've worked with some great visions</h6>
            <div className='bg-[url("/tape.png")] bg-cover bg-blend-darken bg-opacity-20  bg-highlight shadow-md'>
                    <Splide
                        className=""
                        options={{
                            type: 'loop',
                            drag: 'free',
                            arrows: false,
                            pagination: false,
                            gap: 100,
                            perPage: 4,
                            autoScroll: {
                            speed: 0.2,
                            pauseOnHover: false,
                            pauseOnFocus: false,
                            },
                            fixedHeight: '115px',
                            fixedWidth: '125px',
                            cover: false,
                            breakpoints: {
                                640: {
                                    gap: 50,
                                },
                            }
                        }}
                        extensions={{ AutoScroll }}
                        aria-label="Continuous Image Carousel"
                        >
                        {companyImages.map((src, i) => (
                            <SplideSlide key={i} className="flex-row flex">
                            <img
                            className='object-fit self-center'
                                src={src}
                                alt={`slide-${i}`}
                            />
                            </SplideSlide>
                        ))}
                        </Splide>
            </div>
        </div>
        </>
    )
}

export default Companies