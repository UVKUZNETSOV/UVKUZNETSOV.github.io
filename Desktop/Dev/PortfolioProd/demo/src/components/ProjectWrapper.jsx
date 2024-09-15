import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import { Project } from './Project';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import aperture from '../assets/aperture.jpg'
import evarugs from '../assets/evarugs.jpg'
import iphone from '../assets/iphone.jpg'
import seafood from '../assets/seafood.jpg'
import solar from '../assets/solar.jpg'
import cyberpunk from '../assets/cyberpunk.jpg'

export const ProjectWrapper = () => {

  return (
    <div className="flex w-6">
      <div className="flex justify-center h-svh w-screen">
      <Swiper
        slidesPerView={'auto'}
        modules={[EffectCoverflow, Autoplay]}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        className="h-full"
      >
        <SwiperSlide>
          <Project 
            name='Aperture Studios'
            description='Fully animated photographer studio named "Aperture Studios" website with adapted burger menu.'
            preview={aperture}
            adapted="3"
            link='https://uvkuznetsov.github.io/aperture.io/'
            firstSlide={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Project 
            name='Cyberpunk 2077'
            description='"Сyberpunk 2077" website.'
            preview={cyberpunk}
            adapted="3"
            link='https://uvkuznetsov.github.io/cyberpunk.io/'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Project 
            name='Evarugs'
            description='Car mats website "Evarugs", includes slider presence, animated components and popup form.'
            preview={evarugs}
            adapted="3"
            link='https://uvkuznetsov.github.io/evarugs.io/'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Project 
            name='Iphone 14 Dynamic Island'
            description='HTML and CSS only realization of iphone 14 dynamic island work mechanics.'
            preview={iphone}
            adapted="3"
            link='https://uvkuznetsov.github.io/iphone14_dynamicisland.io/'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Project 
            name='Seafood from Norway'
            description='Website of a sea food delivery company from Norway called "Seafood from Norway", includes custom slider.'
            preview={seafood}
            link='https://uvkuznetsov.github.io/seafood.io/'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Project 
            name='Solar Guitars'
            description='My interpretation of Ola Inglund`s official guitar website. My first website'
            preview={solar}
            link='https://uvkuznetsov.github.io/solar.io/'
            lastSlide={true}
          />
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
    
  );
};