"use client"
import React, { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import {  Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { EffectCoverflow } from 'swiper/modules';
import CardSlider from '../Landing/CardSlider';
import { SliderProps } from '@/Types/Interfaces';

const LandingSlider: FC<SliderProps> = ({ SliderData }) => {
    return (
        <Swiper
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            modules={[EffectFade, Autoplay, Pagination]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
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
