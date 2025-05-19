import React, { useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';
import { loadImagesWithPrefix } from '../utils/loadImagesWithPrefix'

const services = {
  productDesign: {
    title: 'Product Design',
    description: 'I specialize in solving complex usability and interaction challenges across the entire product lifecycle. I lead design teams in agile environments, bridging the gap between design and development while managing stakeholder expectations with clarity and confidence.'
  },
  productManagement: {
    title: 'Frontend Development (React)',
    description: 'With a strong grasp of front-end development, I evaluate design feasibility early and often. I build, maintain, and refine digital products using modern frameworks, ensuring they meet both user needs and technical standards.'
  },
  development: {
    title: 'Design Systems',
    description: 'Reusable systems and solid documentation turn good ideas into great products. I apply methodologies that align design and development, speeding up delivery and reinforcing consistency. I believe great design thrives through collaboration—not in isolation.'
  }
}


const About = () => {

  const companyImages = Object.entries(
    import.meta.glob('/company_*', { eager: true })
  ).map(([path, mod]) => mod.default || path);
  console.log(companyImages)

  return (
    <section className="mt-40 mx-4">
      <h1 className='flex justify-center pb-10'>About</h1>
      {/* Content */}
      <div>
        {/* Name and title */}
        <div className='flex flex-col gap-1'>
          <p className='font-mono text-text-main'>Max Lair</p>
          <p className='font-mono text-text-muted'>Senior Product Designer & Dev</p>
        </div>
        <hr />
        {/* Items */}
        {Object.entries(services).map(([key, service], idx) => (
          <div key={key}>
            <div className='flex flex-col md:flex-row justify-between py-10 md:py-4 gap-6'>
              {/* Number and Title */}
              <div className='flex flex-row gap-3'>
          <div className='superscript'>[{String(idx + 1).padStart(2, '0')}]</div>
          <h6>{service.title}</h6>
              </div>
              {/* Desc */}
              <div className='max-w-[400px]'>
          <p className='font-serif text-justify'>{service.description}</p>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
      {/* Carousel */}
      <div className='h-20'>
        <Splide
              options={{
                type: 'loop',
                drag: 'free',
                arrows: false,
                pagination: false,
                perPage: 3,
                autoScroll: {
                  speed: 0.2, // Adjust speed as needed
                  pauseOnHover: false,
                  pauseOnFocus: false,
                },
                fixedHeight: '25vw',
                fixedWidth: '33vw',
                cover: true, 
                breakpoints: {
                  1280: {
                    fixedWidth: 600,
                    fixedHeight: 450,
                  },
                  1024: {
                    fixedWidth: 500,
                    fixedHeight: 375,
                  },
                  768: {
                    fixedWidth: 400,
                    fixedHeight: 300,
                  },
                  480: {
                    fixedWidth: 300,
                    fixedHeight: 225,
                  },
                },      // Ensure images cover the slide area
              }}
              extensions={{ AutoScroll }}
              aria-label="Continuous Image Carousel"
            >
              {companyImages.map((src, i) => (
                <SplideSlide key={i}>
                  <img
                    src={src}
                    alt={`slide-${i}`}
                  />
                </SplideSlide>
              ))}
            </Splide>
      </div>
    </section>
  );
};

export default About;
