import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
function Services() {
    return (
        <div>
            <div className="ServicePages">
                <div className="container">
                    <div className="RangeView">
                        <h4>vivo Service Center</h4>
                    </div>
                    <div className="VivoService">
                        <div className="row">
                            <div className="col-xl-6">
                                <img className='w-100' src="images\ServiceImg.png" alt="" />
                            </div>
                            <div className="col-xl-6">
                                <div className="right">
                                    <div className="serviceDiv">
                                        <h5>To provide you with convenient and professional services.</h5>
                                        <div className=" centerIcon">

                                            <div className="icons">
                                                <img src="\images\image 11.svg" alt="" />
                                                <span>Professional Repair</span>
                                            </div>

                                            <div className="icons">
                                                <img src="\images\image 12.svg" alt="" />
                                                <span>Free software</span>
                                            </div>

                                            <div className="icons">
                                                <img src="\images\image 13.svg" alt="" />
                                                <span>Free Protective film</span>
                                            </div>

                                            <div className="icons">
                                                <img src="\images\image 14.svg" alt="" />
                                                <span>Phone Care</span>
                                            </div>


                                        </div>

                                        <h4>Learn More<IoIosArrowForward /></h4>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="serviceText">
                        <h1>Authorised vivo service centers are here to provide multiple handset care service like free phone cleaning, software update, repair discount and many more. Please contact nearest authorised service center for more details.</h1>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services