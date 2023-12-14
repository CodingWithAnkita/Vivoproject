import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import { Pagination } from 'react-bootstrap';
import { Pagination } from 'swiper/modules';

function Banner() {
    return (
        <div>
            <div className="BannerPage">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">

                            <Swiper
                                pagination={true}
                                modules={[Pagination]}
                                spaceBetween={50}
                                slidesPerView={1}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                <SwiperSlide>
                                    <img className='w-100' src="\images\image 7.png" alt="" />
                                </SwiperSlide>
                                <SwiperSlide> <img className='w-100' src="\images\image 7.png" alt="" />
                                </SwiperSlide>
                                <SwiperSlide> <img className='w-100' src="\images\image 7.png" alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner