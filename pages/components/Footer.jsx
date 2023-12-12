import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


function Footer() {
    return (
        <div>
            <div className="FooterSection">
                <div className="container">
                    <div className="footerDiv">
                        <div className="row gy-4 flex-column-reverse flex-lg-row">
                            <div className="col-lg-8">
                                <div className="row Footer">
                                    <div className="col-md-3 col-6">
                                        <div className="P-links">

                                            <ul>Popular Links
                                                <li>V27 Pro</li>
                                                <li>V27</li>
                                                <li>T2 5G</li>
                                                <li>T2x 5G</li>
                                                <li>Y100A</li>
                                                <li>Y02t</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <div className="support">
                                            <ul>Supports
                                                <li>FAQs</li>
                                                <li>Service Center</li>
                                                <li>Funtouch OS</li>
                                                <li>Warranty Terms</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="I-links">
                                            <ul>Important Links
                                                <li>Terms and Conditions</li>
                                                <li>Privacy Policy</li>
                                                <li>Cookie Policy</li>
                                                <li>Warranty Terms</li>
                                                <li>Shipping Policy</li>
                                                <li>Return & Refund Policy</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-4">
                                <div className="address">
                                    <div className="heading">vivo pune</div>
                                    <div className='corporate'>
                                        <h6>Corporate Office</h6>
                                        <p>HISOA Electronic Pvt Ltd. Suyog Platinum Tower 1, Naylor Rd, Sangamvadi, Pune, Maharashtra 411001</p>
                                    </div>
                                    <div className='email'>
                                        <h6>Email Us (Reply in 24h)</h6>
                                        <p>info@vivopune.com</p>
                                    </div>
                                    <div className="Call">
                                        <h6>Call Us</h6>
                                        <div className='number'>91460 01241</div>
                                        <p>Monday - Friday (10am - 5pm)</p>
                                    </div>
                                    <div className="Follow">
                                        <h6>Follow us</h6>
                                        <div className="icons">
                                            <FaFacebookF />
                                            <FaInstagram />
                                            <FaTwitter />
                                            <FaYoutube />

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <hr />

                        <span>© 2023 HISOA Electronic Pvt Ltd (A division of vivo). All rights reserved.</span>



                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer