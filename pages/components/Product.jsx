import React from 'react'

import { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Product() {
    return (
        <div>
            <div className="ProductDiv">
                <div className="container">
                    <h4 className='Sell'>Top Selling Products</h4>
                    <div className="row">
                        <div className="col-lg-3 col-6">
                            <div className="seriesImg">
                                <div className="card w-100 h-100 imgCard">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="Mobseries">
                                                <h4>T2 5G <br /> Series</h4>
                                            </div>

                                        </div>
                                        <div className="col-6">
                                            <img className='w-100' src="images\seies1.png" alt="" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="seriesImg">
                                <div className="card w-100 h-100 imgCard">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="Mobseries">
                                                <h4>V <br /> Series</h4>
                                            </div>

                                        </div>
                                        <div className="col-6">
                                            <img className='w-100' src="\images\series2.png" alt="" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="seriesImg">
                                <div className="card w-100 h-100 imgCard">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="Mobseries">
                                                <h4>Y <br /> Series</h4>
                                            </div>

                                        </div>
                                        <div className="col-6">
                                            <img className='w-100' src="images\series3.png" alt="" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="seriesImg">
                                <div className="card w-100 h-100 imgCard">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="Mobseries">
                                                <h4>X90 <br /> Series</h4>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <img className='w-100' src="images\series4.png" alt="" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="smartPhonesRange">
                        <div className="RangeView">
                            <h4>Smartphones under 20k</h4>
                            <h2>View All <IoIosArrowForward /> </h2>
                        </div>

                        {/* <img src="\images\Phone1.png" alt="" /> */}
                        <div className="Smartphones">
                            <Swiper pagination={true} navigation={{ nextEl: ".image-swiper-button-next", prevEl: ".image-swiper-button-prev", disabledClass: "swiper-button-disabled" }}
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={50}
                                loop={true}
                                speed={1000}
                                // effect={"fade"}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                slidesPerView={4}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}

                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },
                                    333:{
                                        slidesPerView: 2,
                                        spaceBetween: 10,
                                    },
                                    575: {
                                        slidesPerView: 2,
                                        spaceBetween: 10,
                                    },
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    841: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                    1400:{
                                        slidesPerView: 4,
                                        spaceBetween: 40,
                                    }
    
                                }}

                                className="mySwiper">
                                <SwiperSlide>
                                    <div className="smartPhoneSeries">

                                        <div className="card">
                                            <img src="\images\Phone1.png" alt="" />
                                            <div className="content">
                                                <span>Y16 (3+64)</span>
                                                <h6>3GB+64GB Stellar Black</h6>
                                                <h3>₹10,499.00</h3>
                                                <div className='smallContent'>
                                                    <del>₹14,999.00</del>
                                                    <button>-30% off</button>
                                                </div>
                                            </div>

                                            <div className="Offer">
                                                OFFER
                                            </div>


                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="smartPhoneSeries">
                                        <div className="card">
                                            <img src="\images\Phone2.png" alt="" />
                                            <div className="content">
                                                <span>Y02t</span>
                                                <h6>4GB+64GB Sunset Gold</h6>
                                                <h3>₹9,999.00</h3>
                                                <div className='smallContent'>
                                                    <del>₹13,999.00</del>
                                                    <button>-28% off</button>
                                                </div>
                                            </div>
                                            <div className="Offer">
                                                OFFER
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="smartPhoneSeries">
                                        <div className="card">
                                            <img src="\images\Phone3.png" alt="" />
                                            <div className="content">
                                                <span>T2x 5G</span>
                                                <h6>4GB+128GB Glimmer Black</h6>
                                                <h3>₹12,999.00</h3>
                                                <div className='smallContent'>
                                                    <del>₹17,999.00</del>
                                                    <button>-27% off</button>
                                                </div>
                                            </div>
                                            <div className="Offer">
                                                OFFER
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="smartPhoneSeries">
                                        <div className="card">
                                            <img src="\images\Phone1.png" alt="" />
                                            <div className="content">
                                                <span>T1(8+128) 44W</span>
                                                <h6>8GB+128GB Ice Dawn</h6>
                                                <h3>₹17,999.00</h3>
                                                <div className='smallContent'>
                                                    <del>₹23,990.00</del>
                                                    <button>-24% off</button>
                                                </div>
                                            </div>
                                            <div className="Offer">
                                                OFFER
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>




                                <SwiperSlide>
                                    <div className="smartPhoneSeries">
                                        <div className="card">
                                            <img src="\images\Phone1.png" alt="" />
                                            <div className="content">
                                                <span>Y16 (3+64)</span>
                                                <h6>3GB+64GB Stellar Black</h6>
                                                <h3>₹10,499.00</h3>
                                                <div className='smallContent'>
                                                    <del>₹14,999.00</del>
                                                    <button>-30% off</button>
                                                </div>
                                            </div>
                                            <div className="Offer">
                                                OFFER
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>


                                <SwiperSlide>
                                    <div className="smartPhoneSeries">
                                        <div className="card">
                                            <img src="\images\Phone2.png" alt="" />
                                            <div className="content">
                                                <span>Y02t</span>
                                                <h6>4GB+64GB Sunset Gold</h6>
                                                <h3>₹9,999.00</h3>
                                                <div className='smallContent'>
                                                    <del>₹13,999.00</del>
                                                    <button>-28% off</button>
                                                </div>
                                            </div>
                                            <div className="Offer">
                                                OFFER
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="smartPhoneSeries">
                                        <div className="card">
                                            <img src="\images\Phone3.png" alt="" />
                                            <div className="content">
                                                <span>T2x 5G</span>
                                                <h6>4GB+128GB Glimmer Black</h6>
                                                <h3>₹12,999.00</h3>
                                                <div className='smallContent'>
                                                    <del>₹17,999.00</del>
                                                    <button>-27% off</button>
                                                </div>
                                            </div>
                                            <div className="Offer">
                                                OFFER
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="smartPhoneSeries">
                                        <div className="card">
                                            <img src="\images\Phone1.png" alt="" />
                                            <div className="content">
                                                <span>T1(8+128) 44W</span>
                                                <h6>8GB+128GB Ice Dawn</h6>
                                                <h3>₹17,999.00</h3>
                                                <div className='smallContent'>
                                                    <del>₹23,990.00</del>
                                                    <button>-24% off</button>
                                                </div>
                                            </div>
                                            <div className="Offer">
                                                OFFER
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>



                            </Swiper>


                            <div className="Productswipeer-arrows">
                                <button className='image-swiper-button-prev'>
                                    <IoIosArrowBack />
                                </button>

                                <button className='image-swiper-button-next'>
                                    <IoIosArrowForward />
                                </button>

                            </div>
                        </div>



                    </div >



                </div >
            </div >


        </div >

    )
}

export default Product