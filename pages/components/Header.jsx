import React from 'react'
import { TfiMenu } from "react-icons/tfi";
import { BsCart3 } from "react-icons/bs";
import { LuUser2 } from "react-icons/lu";

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoIosArrowForward } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from 'react-router-dom';



function Header() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [cartShow, setcartShow] = useState(false);

    const carthandleClose = () => setcartShow(false);
    const carthandleShow = () => setcartShow(true);


    return (
        <div>
            <div className="vivoHeader">
                <div className="headertop">
                    <div className="container">
                        <div className="Header_Top">
                            <div className="left">
                                <Link to={'/'} ><img src="\images\vivoLogo.png" alt="" /></Link>
                            </div>
                            <div className="right">
                                <a href="">Service Center Locator</a>
                                <a href="">Contact Us</a>
                                <a className="Trackorder" href="">Track your Order</a>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="headerbottom">

                    {/* <div className="container"> */}

                    <div className="header_Bottom">
                        <div className="Left">

                            <Button id="toggleBtnId" className='toggleBtn' variant="" onClick={handleShow}>
                                <div><TfiMenu />
                                </div>
                            </Button>

                            <Offcanvas show={show} onHide={handleClose}>
                                <div className="CanvasDiv">
                                    <div className="container">

                                        <div className="closeDiv">
                                            <button onClick={handleClose} ><RxCross1 />
                                            </button>
                                        </div>

                                        <div className="inner">
                                            <h2>Shop vivo Smartphones</h2>

                                            <hr />

                                            <div className="Series">
                                                <div className="Y-Series">
                                                    <div className="left">
                                                        <h5>Y Series</h5>
                                                    </div>
                                                    <div className="seriesSec">
                                                        <div className="middle">
                                                            <h2>Y100  |  Y56 5G  |  Y02t  |  Y100 A  |  Y16...</h2>
                                                        </div>
                                                        <div className="right">
                                                            <h5><IoIosArrowForward />
                                                            </h5>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>

                                            <div className="Series">
                                                <div className="Y-Series">
                                                    <div className="left">
                                                        <h5>V Series</h5>
                                                    </div>

                                                    <div className="seriesSec">
                                                        <div className="middle">
                                                            <h2>V27 PRO  |  V 27</h2>
                                                        </div>
                                                        <div className="right">
                                                            <h5><IoIosArrowForward />
                                                            </h5>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="Series">
                                                <div className="Y-Series">
                                                    <div className="left">
                                                        <h5>T Series</h5>
                                                    </div>
                                                    <div className="seriesSec">
                                                        <div className="middle">
                                                            <h2>T2 5G  |  T2x 5G</h2>
                                                        </div>
                                                        <div className="right">
                                                            <h5><IoIosArrowForward />
                                                            </h5>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="Series">
                                                <div className="Y-Series">
                                                    <div className="left">
                                                        <h5>X Series</h5>
                                                    </div>

                                                    <div className="seriesSec">
                                                        <div className="middle">
                                                            <h2></h2>
                                                        </div>
                                                        <div className="right">
                                                            <h5><IoIosArrowForward />
                                                            </h5>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="SupportDiv">
                                                <h4>Support</h4>
                                                <hr />
                                                <ul>
                                                    <li>FAQs</li>
                                                    <li>Service Center</li>
                                                    <li>Funtouch OS</li>
                                                    <li>Track Your Order</li>
                                                </ul>
                                            </div>

                                            <div className="ImpLinks">
                                                <h4>Important Links</h4>
                                                <hr />
                                                <ul>
                                                    <li>Terms and Conditions</li>
                                                    <li>Privacy Policy</li>
                                                    <li>Cookie Policy</li>
                                                    <li>Warranty Terms</li>
                                                    <li>Shipping Policy</li>
                                                    <li>Return & Refund Policy</li>
                                                    <Link to={'/shop'} ><li>E-Store</li></Link>
                                                </ul>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </Offcanvas>

                            <div className='All'>ALL</div>
                        </div>
                        <div className="Middle">
                            <Link to={'/shop'}>E-Store</Link>
                            <a href="">About Vivo Pune</a>
                            <a href="">Funtouch OS</a>
                        </div>

                        <div className="Middle-1">
                           <Link to={'/'}><img src="\images\vivoLogo.png" alt="" /></Link>
                        </div>

                        <div className="Right">
                            <div className="rightDiv">
                                <input className='smartPhones' type="text" placeholder='Search VIVO Samrtphones' />
                                <img className='searchBar' src="images\searchImg.svg" alt="" />
                            </div>

                            <div className="icon">
                                <Link to={'/cart'} >
                                    <div className='righticon' onClick={() => { carthandleShow() }}><BsCart3 /></div>
                                </Link>
                                <div className='righticon' data-bs-toggle="dropdown" aria-expanded="false"><LuUser2 /></div>

                                <ul class="dropdown-menu mt-2">
                                    <li><a class="dropdown-item" href="#">Log In </a></li>
                                    <li><a class="dropdown-item" href="#">Create Account</a></li>

                                </ul>

                            </div>



                            <Offcanvas show={cartShow} onHide={carthandleClose} placement='end' >
                                <div className="CartDiv">
                                    <div className="container">
                                        <div className="closeDiv">
                                            <button onClick={carthandleClose} ><RxCross1 />
                                            </button>
                                        </div>

                                        <div className="CartInnerSec">
                                            <h4>Items in Your Shopping Cart</h4>
                                            <hr />

                                            <div className="cartMob">
                                                <div className="row gx-2">
                                                    <div className="col-3">
                                                        <div className="cartLeft">
                                                            <img className='w-100' src="/images/image 5.png" alt="" />
                                                        </div>
                                                    </div>

                                                    <div className="col-9">
                                                        <div className="CartRightSec">

                                                            <div className="cartMiddle">
                                                                <h3>Y16 (3+64)</h3>
                                                                <p className='mb-0'>3GB+64GB Stellar Black</p>
                                                                <div className='price' >
                                                                    <div className='number'>₹10,499.00</div>
                                                                    <div className='delete' >₹14,999.00</div>
                                                                    <div className='percent'>-30% off</div>
                                                                </div>
                                                                <select className='QtSelector'>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                    <option value="5">5</option>
                                                                </select>
                                                            </div>
                                                            <div className="cartRight">
                                                                <button className='delBtn'><RiDeleteBin6Line /></button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="cartMob">
                                                <div className="row gx-2">
                                                    <div className="col-3">
                                                        <div className="cartLeft">
                                                            <img className='w-100' src="/images/image 6 (1).png" alt="" />
                                                        </div>
                                                    </div>

                                                    <div className="col-9">
                                                        <div className="CartRightSec">

                                                            <div className="cartMiddle">
                                                                <h3>Y16 (3+64)</h3>
                                                                <p className='mb-0'>3GB+64GB Stellar Black</p>
                                                                <div className='price' >
                                                                    <div className='number'>₹10,499.00</div>
                                                                    <div className='delete' >₹14,999.00</div>
                                                                    <div className='percent'>-30% off</div>
                                                                </div>
                                                                <select className='QtSelector'>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                    <option value="5">5</option>
                                                                </select>
                                                            </div>
                                                            <div className="cartRight">
                                                                <button className='delBtn'><RiDeleteBin6Line /></button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>


                                            <div className="cartMob">
                                                <div className="row gx-2">
                                                    <div className="col-3">
                                                        <div className="cartLeft">
                                                            <img className='w-100' src="/images/image 6.png" alt="" />
                                                        </div>
                                                    </div>

                                                    <div className="col-9">
                                                        <div className="CartRightSec">

                                                            <div className="cartMiddle">
                                                                <h3>Y16 (3+64)</h3>
                                                                <p className='mb-0'>3GB+64GB Stellar Black</p>
                                                                <div className='price' >
                                                                    <div className='number'>₹10,499.00</div>
                                                                    <div className='delete' >₹14,999.00</div>
                                                                    <div className='percent'>-30% off</div>
                                                                </div>
                                                                <select className='QtSelector'>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                    <option value="5">5</option>
                                                                </select>
                                                            </div>
                                                            <div className="cartRight">
                                                                <button className='delBtn'><RiDeleteBin6Line /></button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>


                                            <div className="cartButtons">
                                                <button className='btn1'>GO TO CART</button>
                                                <button className='btn2'>CHECKOUT NOW</button>
                                            </div>


                                        </div>



                                    </div>
                                </div>
                            </Offcanvas>

                        </div>
                    </div>

                    {/* </div> */}


                </div>

                {/* <!-- dynamic show class here  --> */}
                {/* <div class="mobileDiv" id="mobDivId">
                    <div class="closeDiv toggleBtn" id="closeBtnId">
                        <button>
                            <i class="bi bi-x-lg iconn"></i>
                        </button>
                    </div>
                    <ul class="mobileList">
                        <li>
                            E-Store
                        </li>
                        <li>
                            About Vivo Pune
                        </li>
                        <li>
                            Funtouch OS
                        </li>

                    </ul>
                </div> */}

            </div>


            <marquee className="marClass" behavior="" direction="">
                www.vivopune.com is an official website of vivo Smartphones in association with vivo India and we deliver all over India. The registered name is HISOA Electronic Private Limited. Our offline markets are present in - Pune, Satara, Sangli, Miraj, Baramati, Phaltan, Kolhapur, Ichalkaranji, Ratnagiri, Sindhudurg, Lonavala, Shirur, Chakan, Solapur, Latur, Barshi, Osmanabad, Pandharpur, Ahmednagar, Rahuri, Sangamner, Shrirampur.
            </marquee>



        </div>


    )
}

export default Header