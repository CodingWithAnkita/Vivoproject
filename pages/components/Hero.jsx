import React from 'react'
import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade,Autoplay,Navigation } from 'swiper/modules';

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "swiper/css";

function Hero() {
    return (
        <div className='heroSwiper'>
            <div className="HeroSection">
                <Swiper navigation={{ nextEl: ".image-swiper-button-next", prevEl: ".image-swiper-button-prev", disabledClass: "swiper-button-disabled" }}
                    modules={[EffectFade,Navigation,Autoplay]}
                    className="mySwiper"
                    spaceBetween={50}
                    loop={true}
                    centeredSlides={true}
                    speed={1000}
                    // effect={"fade"}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}

                // breakpoints={{
                //     0: {
                //         slidesPerView: 1,
                //         spaceBetween: 10,
                //     },
                //     576: {
                //         slidesPerView: 1,
                //         spaceBetween: 10,
                //     },
                //     640: {
                //         slidesPerView: 1,
                //         spaceBetween: 20,
                //     },
                //     768: {
                //         slidesPerView: 1,
                //         spaceBetween: 40,
                //     },

                // }}
                >
                    <SwiperSlide>
                        <div className="swiper-Img">
                            <img className='w-100' src="\images\vivoImage.png" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-Img">
                            <img className='w-100' src="images/T2-1.webp" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-Img">
                            <img className='w-100' src="/images/V29e_1.webp" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-Img">
                            <img className='w-100' src="images/T2X-1.webp" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-Img">
                            <img className='w-100' src="images/V29-Pro.webp" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-Img">
                            <img className='w-100' src="images/T2-Pro.webp" alt="" />
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>



            <div className="swipeer-arrows">
                <button className='image-swiper-button-prev'>
                    <IoIosArrowBack />
                </button>

                <button className='image-swiper-button-next'>
                    <IoIosArrowForward />
                </button>

            </div>


        </div>
    )

}

export default Hero