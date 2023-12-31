import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Series1() {
    return (
        <div>
            <div className="Series1Page">
                <div className="container">
                    <div className="smartPhonesRange">
                        <div className="RangeView">
                            <h4>Shop T2 5G Series</h4>
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
                                    333: {
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
                                    1400: {
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
                                            <div className="New">
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
                                            <div className="New">
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
                                            <div className="New">
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
                                            <div className="New">
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
                                            <div className="New">
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
                                            <div className="New">
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
                                            <div className="New">
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
                                            <div className="New">
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



                    </div>
                </div>
            </div>
        </div>
    )
}

export default Series1