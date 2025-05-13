"use client"
import React, { FC } from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'

import { Pagination, Navigation, EffectFade } from 'swiper/modules'

interface SimpleSliderProps {
    dataSlider: React.ReactNode[]
}

const SimpleSlider: FC<SimpleSliderProps> = ({ dataSlider }) => {
    return (
        <Swiper
            spaceBetween={30}
            effect={'fade'}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper"
        >
            {
                dataSlider.map((item) => (
                    <SwiperSlide style={{
                        height: '100%',
                        width: '100%',
                    }}>
                        {item}
                    </SwiperSlide>
                ))
            }


        </Swiper>
    )
}

export default SimpleSlider
