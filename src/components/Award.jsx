
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import a1 from '../assets/image/award/award2021.png'
import a2 from '../assets/image/award/award2022.png'
import a3 from '../assets/image/award/award2023.png'
import a4 from '../assets/image/award/award2024.png'
import a5 from '../assets/image/award/award2025.png'
import a6 from '../assets/image/award/savour2016.png'
import a7 from '../assets/image/award/savour2017.png'
import a8 from '../assets/image/award/savour2018.png'
import a9 from '../assets/image/award/savour2020.png'
import a10 from '../assets/image/award/savour2021.png'
import a11 from '../assets/image/award/savour2022.png'
import a12 from '../assets/image/award/top100.png'
import a13 from '../assets/image/award/aoe2022.png'
import a14 from '../assets/image/award/agff.png'

const Award = () => {
    return (
        <div className="row my-5">
            <div className="col-sm-12 my-4">
                <Swiper
                    slidesPerView={6}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >

                    <SwiperSlide><img src={a1} className='img-fluid' alt="" /></SwiperSlide>
                    <SwiperSlide><img src={a2} className='img-fluid' alt="" /></SwiperSlide>
                    <SwiperSlide><img src={a3} className='img-fluid' alt="" /></SwiperSlide>
                    <SwiperSlide><img src={a4} className='img-fluid' alt="" /></SwiperSlide>
                    <SwiperSlide><img src={a5} className='img-fluid' alt="" /></SwiperSlide>
                    <SwiperSlide><img src={a6} className='img-fluid' alt="" /></SwiperSlide>
                    <SwiperSlide><img src={a7} className='img-fluid' alt="" /></SwiperSlide>
                    <SwiperSlide><img src={a8} className='img-fluid' alt="" /></SwiperSlide>
                    <SwiperSlide><img src={a9} className='img-fluid' alt="" /></SwiperSlide>
                    <SwiperSlide><img src={a10} className='img-fluid' alt="" /></SwiperSlide>
                    <SwiperSlide><img src={a11} className='img-fluid' alt="" /></SwiperSlide>
                    <SwiperSlide><img src={a12} className='img-fluid' alt="" /></SwiperSlide>
                    <SwiperSlide><img src={a13} className='img-fluid' alt="" /></SwiperSlide>
                    <SwiperSlide><img src={a14} className='img-fluid' alt="" /></SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}

export default Award
