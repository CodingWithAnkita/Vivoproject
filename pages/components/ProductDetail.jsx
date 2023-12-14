import React from 'react'

function ProductDetail() {
    return (
        <div>
            <div className="productDetailPage">
                <div className="ProductDetail">
                    <div className="container">
                        <div className="ProductPath">
                            <div className="details">
                                "Home -"
                                <span> Mobiles & Tablets </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ProductDetailSection">
                    <div className="container">
                        <div className="product-Dividation">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="imgDiv">
                                        <div className="row">
                                            <div className="col-sm-2">
                                                <div className="img1">
                                                    <img className='' src="/images/Rectangle 25.png" alt="" />
                                                </div>
                                                <div className="img2">
                                                    <img className='' src="/images/Rectangle 26.png" alt="" />
                                                </div>
                                                <div className="img3">
                                                    <img className='' src="/images/Rectangle 27.png" alt="" />
                                                </div>
                                                <div className="img4">
                                                    <img className='' src="/images/Rectangle 28.png" alt="" />
                                                </div>
                                                <div className="img5">
                                                    <img className='' src="/images/Rectangle 29.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-sm-10">
                                                <img className='w-100' src="/images/Rectangle 23 (1).png" alt="" />

                                                <div className="btnDiv">
                                                    <button className='btn1' >ADD TO CART</button>
                                                    <button className='btn2' >BUY NOW</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="ProductDetails-Content">
                                        <div className="productName">
                                            <div className='smallHeading'>T2x 5G <span className='largeHeading'>8GB+128GB Aurora Gold</span></div>

                                        </div>
                                        <div className="prices">
                                            <div className="redPrice">₹20,999.00</div>
                                            <div className="delOff d-flex">
                                                <div className="delprice me-2">₹13,999.00</div>
                                                <div className="offPercent">-28% off</div>
                                            </div>

                                            <div className="TaxesDiv">(incl.of all taxes)</div>
                                        </div>
                                        <div className="Availableoffers">
                                            <div className="offers">Available offers</div>
                                            <div className="BankOffer">
                                                {/* <div className="row g-3"> */}
                                                <div className="offersec">
                                                    <h2>Bank Offer</h2>
                                                    <span>CC / DC EMI available.</span>
                                                    <h6>T&C</h6>
                                                </div>
                                                <div className="offersec">
                                                    <h2>No Cost EMI</h2>
                                                    <span>UPI / Net banking  available.</span>
                                                    <h6>View Plans</h6>
                                                </div>
                                                {/* </div> */}

                                            </div>
                                        </div>

                                        <div className="colourDiv">
                                            <div className="color">Colour</div>
                                            <div className="colorImg">
                                                {/* <div className="row"> */}
                                                <div className="img-sec">
                                                    <img className='' src="/images/Rectangle 25 (1).png" alt="" />
                                                    <div className='content'>Aurora Gold</div>
                                                </div>
                                                <div className="img-sec">
                                                    <img className='' src="/images/Rectangle 26 (1).png" alt="" />
                                                    <div className='content'>Glimmer Black</div>
                                                </div>

                                                <div className="img-sec">
                                                    <img className='' src="/images/Rectangle 26 (1).png" alt="" />
                                                    <div className='content'>Marine Blue</div>
                                                </div>
                                                {/* </div> */}
                                            </div>

                                        </div>

                                        <div className="RAMSec">
                                            <div className="RAM">Ram & Storage</div>
                                            <div className="RAMStorage">
                                                <div className="RAMDetail1">8GB+128GB (5G)</div>
                                                <div className="RAMDetail2">6GB+128GB (5G)</div>
                                                <div className="RAMDetail3">6GB+128GB (5G)</div>
                                            </div>
                                        </div>

                                        <div className="QuantitySec">
                                            <div className="quantityHead">
                                                Quantity
                                            </div>
                                            <div className="quantity">
                                                <div className="min">-</div>
                                                <span>1</span>
                                                <div className="plus">+</div>
                                            </div>
                                        </div>

                                        <div className="DelieverySec">
                                            <div className="delievery">Delivery</div>
                                            <div className="codeShip">
                                                <div className="pincode">
                                                    <input placeholder='Enter Delivery Pincode' type="text" />
                                                    <button className='check'>Check</button>
                                                </div>

                                                <div className="freeShip">FREE SHIPPING</div>
                                                <div className="business">4-5 Business Days</div>

                                            </div>


                                        </div>


                                        <div className="HighlightsSec">
                                            <div className="highText">Highlights</div>
                                            <div className="highlight">
                                                <ul>
                                                    <li>Funtouch OS 13, Based on Android 13</li>
                                                    <li>6.58-inch (16.2 cm) LCD Display</li>
                                                    <li>MediaTek Dimensity 6020 Processor</li>
                                                    <li>8GB RAM</li>
                                                    <li>128GB ROM</li>
                                                    <li>50 MP + 2 MP Rear Camera's</li>
                                                    <li>8 MP</li>
                                                    <li>5000 mAh (TYP) Battert</li>
                                                    <li>18W Fast Charge</li>
                                                    <li>Extended RAM 3.0, A maximum of 8 GB extended RAM</li>
                                                    <li>1 Year Manufacturer Warranty</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="SpecificationSec">
                                            <div className="specific">Specifications</div>
                                            <div className="spectification">
                                                <div className="heading">General Features</div>
                                                <div className="MainDiv">
                                                    <table>
                                                        <tr>
                                                            <td className='leftDiv' >Processor </td>
                                                            <td className='rightDiv'>MediaTek Dimensity 6020</td>
                                                        </tr>
                                                        <tr>
                                                            <td className='leftDiv'>RAM </td>
                                                            <td className='rightDiv'>4GB / 6GB / 8GB</td>
                                                        </tr>
                                                        <tr>
                                                            <td className='leftDiv'>Storage</td>
                                                            <td className='rightDiv'>128 GB</td>
                                                        </tr>
                                                        <tr>
                                                            <td className='leftDiv'>Battery</td>
                                                            <td className='rightDiv'>5000 mAh (TYP)</td>
                                                        </tr>
                                                        <tr>
                                                            <td className='leftDiv'>Color</td>
                                                            <td className='rightDiv'>Aurora Gold|Marine Blue|Glimmer Black</td>
                                                        </tr>
                                                        <tr>
                                                            <td className='leftDiv'>Operating System</td>
                                                            <td className='rightDiv'>Funtouch OS 13 (Based on Android 13)</td>
                                                        </tr>
                                                    </table>

                                                </div>
                                            </div>

                                            <div className="spectification">
                                                <div className="heading">Display</div>
                                                <div className="MainDiv">
                                                    <table>
                                                        <tr>
                                                            <td className='leftDiv' >Size </td>
                                                            <td className='rightDiv'>16.72cm (6.58-inch)</td>
                                                        </tr>
                                                        <tr>
                                                            <td className='leftDiv'> Resolution </td>
                                                            <td className='rightDiv'>2408×1080</td>
                                                        </tr>
                                                        <tr>
                                                            <td className='leftDiv'>Type </td>
                                                            <td className='rightDiv'>FHD+</td>
                                                        </tr>
                                                        <tr>
                                                            <td className='leftDiv'>Touch Screen</td>
                                                            <td className='rightDiv'>Capacitive multi-touch</td>
                                                        </tr>

                                                    </table>

                                                </div>
                                            </div>

                                            <div className="spectification">
                                                <div className="heading">Display</div>
                                                <div className="MainDiv">
                                                    <table>
                                                        <tr>
                                                            <td className='leftDiv' >Size </td>
                                                            <td className='rightDiv'>16.72cm (6.58-inch)</td>
                                                        </tr>
                                                        <tr>
                                                            <td className='leftDiv'> Resolution </td>
                                                            <td className='rightDiv'>2408×1080</td>
                                                        </tr>
                                                        <tr>
                                                            <td className='leftDiv'>Type </td>
                                                            <td className='rightDiv'>FHD+</td>
                                                        </tr>
                                                        <tr>
                                                            <td className='leftDiv'>Touch Screen</td>
                                                            <td className='rightDiv'>Capacitive multi-touch</td>
                                                        </tr>

                                                    </table>

                                                </div>
                                            </div>

                                            <div className="spectification">
                                                <div className="heading">Display</div>
                                                <div className="MainDiv">
                                                    <table>
                                                        <tr>
                                                            <td className='leftDiv' >Size </td>
                                                            <td className='rightDiv'>16.72cm (6.58-inch)</td>
                                                        </tr>
                                                        <tr>
                                                            <td className='leftDiv'> Resolution </td>
                                                            <td className='rightDiv'>2408×1080</td>
                                                        </tr>
                                                        <tr>
                                                            <td className='leftDiv'>Type </td>
                                                            <td className='rightDiv'>FHD+</td>
                                                        </tr>
                                                        <tr>
                                                            <td className='leftDiv'>Touch Screen</td>
                                                            <td className='rightDiv'>Capacitive multi-touch</td>
                                                        </tr>

                                                    </table>

                                                </div>
                                            </div>

                                            <div className="spectification">
                                                <div className="heading">Display</div>
                                                <div className="MainDiv">
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className='leftDiv' >Size </td>
                                                                <td className='rightDiv'>16.72cm (6.58-inch)</td>
                                                            </tr>
                                                            <tr>
                                                                <td className='leftDiv'> Resolution </td>
                                                                <td className='rightDiv'>2408×1080</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>

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
        </div >
    )
}

export default ProductDetail