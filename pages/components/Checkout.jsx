import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Checkout() {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <div className='CheckoutPage'>
                <div className="container">
                    <div className="checkout">
                        <div className="Checkout-Text1">Home - </div>
                        <div className="Checkout-Text2">Cart - </div>
                        <div className="Checkout-Text3">Checkout</div>
                    </div>

                    <div className="row">
                        <div className="col-lg-8">
                            <div className="Delievery-Address">
                                <div className="Address">Delivery Address</div>

                                <div className="Addresses active">
                                    <div className="address1">
                                        <div className="Names">
                                            <input className='radioBtn' type="radio" name="" id="" />
                                            <div className="Details">
                                                <div className="name-Detail">
                                                    <div className="name">Bhanupriya Reddy</div>
                                                    <div className="home">Home</div>
                                                </div>

                                                <h5>KPHB Phase 6th Local Rd, K P H B Phase 5, Malaysian Township, Kukatpally, Hyderabad, Andhra Pradesh, 500073</h5>


                                                <div className="mobileDiv">
                                                    <div className="Mob">
                                                        <div className="mob">Mob:</div>
                                                        <div className="num">4065811256</div>
                                                    </div>
                                                    <div className="Email">
                                                        <div className="email">Email:</div>
                                                        <div className="address">bhanu.reddy@gmail.com</div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="edit">EDIT</div>
                                    </div>
                                </div>

                                <div className="Addresses">
                                    <div className="address2">
                                        <div className="Names">
                                            <input className='radioBtn' type="radio" name="" id="" />
                                            <div className="Details">
                                                <div className="name-Detail">
                                                    <div className="name">Bhanupriya Reddy</div>
                                                    <div className="home">Work</div>
                                                </div>

                                                <h5>KPHB Phase 6th Local Rd, K P H B Phase 5, Malaysian Township, Kukatpally, Hyderabad, Andhra Pradesh, 500073</h5>

                                                <div className="mobileDiv">
                                                    <div className="Mob">
                                                        <div className="mob">Mob:</div>
                                                        <div className="num">4065811256</div>
                                                    </div>
                                                    <div className="Email">
                                                        <div className="email">Email:</div>
                                                        <div className="address">bhanu.reddy@gmail.com</div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="edit">EDIT</div>
                                    </div>
                                </div>

                            </div>

                            <div className="NewAddress">
                                <div className="btnDiv"
                                    onClick={() => setOpen(!open)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open}>

                                    <div className="content">+</div>
                                    <div className="newAdd">Add a New Address</div>
                                </div>


                                {/* <Button
                                    onClick={() => setOpen(!open)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open}
                                >
                                    click
                                </Button> */}

                                <Collapse in={open}>
                                    <div id="example-collapse-text">
                                        <div className="AddNewAddress">
                                            <div className="Addaddress">Add a New Address</div>

                                            <div className="formSec">
                                                <input className='w-100 ' placeholder='Full Name*' type="text" />
                                                <div className="IdNum">
                                                    <input className='w-100' placeholder='Email Id*' type="text" />
                                                    <input className='w-100' placeholder='Mobile Number*' type="text" />
                                                </div>
                                                <textarea className='w-100' placeholder='Enter your full Address (Area, House No, Building Name)*' name="" id="" cols="50" rows="5"></textarea>
                                                <div className="LandMark">
                                                    <input className='w-100' placeholder='Landmark (Optional)' type="text" />
                                                    <input className='w-100' placeholder='Pin Code*' type="text" />
                                                </div>

                                                <div className="Cities">
                                                    <input className='w-100' placeholder='City' type="text" />
                                                    <input className='w-100' placeholder='State*' type="text" />
                                                </div>

                                                <div className="AddressType">
                                                    <div className="Addtype">Select Address Type</div>
                                                    <div className="HomeDiv">
                                                        <input className='radioBtn' type="radio" name="Home" id="" />
                                                        <div className="home">Home</div>
                                                    </div>
                                                    <div className="WorkDiv">
                                                        <input className='radioBtn' type="radio" name="Work" id="" />
                                                        <div className="work">Work</div>
                                                    </div>
                                                </div>

                                                <div className="AddressBtn">
                                                    <button className='btn1'>SAVE ADDRESS</button>
                                                    <button className='btn2'>Cancel</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </Collapse>

                            </div>


                            <div className="payment-Option">
                                <div className="payment">Select Payment Option</div>
                            
                                <div className="mainPaymentDiv">
                                    <div className="PaymentDiv">
                                        <input type="radio" name="" id="" />
                                        <div className="UPI">UPI</div>
                                    </div>
                                    <div className="PaymentDiv">
                                        <input type="radio" name="" id="" />
                                        <div className="UPI">Debit/Credit Card</div>
                                    </div>
                                    <div className="PaymentDiv">
                                        <input type="radio" name="" id="" />
                                        <div className="UPI">Pay Using EMI (Bajaj Finserv)</div>
                                    </div>
                                    <div className="PaymentDiv">
                                        <input type="radio" name="" id="" />
                                        <div className="UPI">Net Banking</div>
                                    </div>
                                    <div className="PaymentDiv">
                                        <input type="radio" name="" id="" />
                                        <div className="UPI">COD (Pay on Delivery)</div>
                                    </div>
                                </div>

                                <div className="ImagesDiv">
                                    <img src="/images/image 28.svg" alt="" />
                                    <img src="/images/image 29.svg" alt="" />
                                    <img src="/images/image 30.svg" alt="" />
                                    <img src="/images/image 31.svg" alt="" />
                                    <img src="/images/image 32.svg" alt="" />
                                </div>
                            </div>


                        </div>

                        <div className="col-lg-4">
                            <div className="PriceDetailsDiv">
                                <div className="PriceDetail">Price Details</div>

                                <hr className='horizontal' />

                                <div className="PriceAdd">
                                    <div className="items">
                                        <div className="item1">Price (1 item)</div>
                                        <div className="item2">₹23,999</div>
                                    </div>
                                    <div className="items">
                                        <div className="item1">Discount</div>
                                        <div className="item2">₹3,000</div>
                                    </div>
                                    <div className="items">
                                        <div className="item1">Delivery Charges</div>
                                        <div className="item2">FREE</div>
                                    </div>

                                    <div className="Items">
                                        <div className="Item1">Total Amount</div>
                                        <div className="Item2">₹20,999</div>
                                    </div>

                                    <div className="orderSave">
                                        You will save ₹3,000 on this order
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>



                </div>




            </div>
        </div>
    )
}

export default Checkout