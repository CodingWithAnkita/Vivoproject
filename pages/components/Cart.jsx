import React from 'react'


function Cart() {

    return (
        <div>
            <div className='CartPage'>
                <div className="container">
                    <div className="cart">
                        <div className="Cart-Text1">Home -</div>
                        <div className="Cart-Text2">Cart</div>
                    </div>
                </div>


                <div className="ShoppingCart">
                    <div className="container">
                        <div className="Shop_cart">
                            <div className="row">
                                <div className="col-lg-7">
                                    {/* <div className="card"> */}
                                    <div className="ShopProduct">
                                        <div className='shopHeader'>My Shopping Cart</div>
                                        <div className="shop-Product1">
                                            {/* <div className="row"> */}
                                            {/* <div className="col-lg-4"> */}
                                            <img className='image1' src="/images/Rectangle 23.png" alt="" />
                                            {/* </div> */}
                                            {/* <div className="col-lg-8"> */}
                                            <div className="cart-Content">
                                                <div className="Cart-Value">
                                                    <div className='smallHeading'>T2x 5G <span className='largeHeading'>8GB+128GB Aurora Gold</span></div>

                                                    <div className="Incre-Decre">
                                                        <div className="add">+</div>
                                                        1
                                                        <div className="sub">-</div>
                                                    </div>
                                                </div>

                                                <div className="colour">Colour: <span>Aurora Gold</span> </div>
                                                <div className="size">Size: <span>8GB+128GB</span> </div>

                                                <div className="Value">₹20,999.00</div>
                                                <div className="valueDiv">
                                                    <div className="number">₹23,999.00</div>
                                                    <div className="percentOFF">
                                                        <div className="percentOff">-28% off</div>
                                                        <div className="taxes">(incl.of all taxes)</div>
                                                    </div>

                                                </div>
                                                {/* </div> */}
                                            </div>
                                            {/* </div> */}
                                        </div>

                                        <hr />

                                        <div className="shop-Product1">
                                            {/* <div className="row"> */}
                                            {/* <div className="col-lg-4"> */}
                                            <img className='image1' src="/images/Rectangle 23.png" alt="" />
                                            {/* </div> */}
                                            {/* <div className="col-lg-8"> */}
                                            <div className="cart-Content">
                                                <div className="Cart-Value">
                                                    <div className='smallHeading'>T2x 5G <span className='largeHeading'>8GB+128GB Aurora Gold</span></div>

                                                    <div className="Incre-Decre">
                                                        <div className="add">+</div>
                                                        1
                                                        <div className="sub">-</div>
                                                    </div>
                                                </div>

                                                <div className="colour">Colour: <span>Aurora Gold</span> </div>
                                                <div className="size">Size: <span>8GB+128GB</span> </div>

                                                <div className="Value">₹20,999.00</div>
                                                <div className="valueDiv">
                                                    <div className="number">₹23,999.00</div>

                                                    <div className="percentOFF">
                                                        <div className="percentOff">-28% off</div>
                                                        <div className="taxes">(incl.of all taxes)</div>
                                                    </div>

                                                </div>
                                                {/* </div> */}
                                            </div>
                                            {/* </div> */}
                                        </div>

                                    </div>
                                    {/* </div> */}
                                </div>
                                <div className="col-lg-5">
                                    <div className="Coupon-code">
                                        <div className="Coupon">
                                            <input placeholder='Add Coupon Code' type="text" />
                                            <button className='apply'>Apply</button>
                                        </div>
                                    </div>

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

                                            <div className="proceedBtn">
                                                <button className='btn'>PROCEED TO BUY</button>
                                            </div>

                                        </div>
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

export default Cart