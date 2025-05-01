"use client"
import React, { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectCreative } from 'swiper/modules';
import CardSlider from '../Landing/CardSlider';
import { SliderProps } from '@/Types/Interfaces';

const LandingSlider: FC<SliderProps> = ({ SliderData }) => {
    return (
        <Swiper
            effect={'creative'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            creativeEffect={{
                prev: {
                    shadow: true,
                    translate: ['-20%', 0, -1],
                },
                next: {
                    translate: ['100%', 0, 0],
                },
            }}
            modules={[Autoplay, Pagination, EffectCreative]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
        >
            {
                SliderData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <CardSlider image={item.image} topic={item.topic} title={item.title} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default LandingSlider
