import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import ReactSlider from 'react-slider';

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { RxCross1 } from "react-icons/rx";

import { RiArrowDropDownLine } from "react-icons/ri";

import Dropdown from 'react-bootstrap/Dropdown';

function Shop() {

    const [MaxPrice, setMaxPrice] = useState(200000)
    const [MinPrice, setMinPrice] = useState(1000)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [display, setDisplay] = useState(false);

    const onClose = () => setDisplay(false);
    const onShow = () => setDisplay(true);


    return (
        <div>

            <div className="productListMain">
                <div className="vivoPathSec">
                    <div className="container">
                        <div className="path">
                            <div className="shop">
                                "Home -"
                                <span> Mobiles & Tablets </span>
                            </div>
                        </div>
                    </div>
                </div>





                <div className="filterProducts">

                    <div className="MobileFiltersSec d-lg-none d-block">
                        <div className="mobileFilter">

                            <div className="fill">
                                <img src="/images/uiw_filter.svg" alt="" />
                                <div className='filter' onClick={handleShow}>Filters</div>

                                <Offcanvas className="Offcanvas-sec" show={show} onHide={handleClose}>
                                    <Offcanvas.Header closeButton>
                                        <div className="canvas-title">
                                            <img src="/images/uiw_filter.svg" alt="" />
                                            <Offcanvas.Title className="filters" >Filters</Offcanvas.Title>
                                        </div>

                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <div className="Accordion-sec">
                                            <Accordion defaultActiveKey={["0", "1", "2"]}>
                                                <Accordion.Item eventKey="0" className="item1" >
                                                    <Accordion.Header>CATEGORIES / SERIES</Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="accordion-checkbox">
                                                            <div className="checkbox">
                                                                <input className='box' type="checkbox" name="" id="" />
                                                                <div className='box-name' >Y Series</div>
                                                            </div>
                                                            <div className="checkbox d-flex">
                                                                <input className='box' type="checkbox" name="" id="" />
                                                                <div className='box-name'>T Series</div>
                                                            </div>
                                                            <div className="checkbox d-flex">
                                                                <input className='box' type="checkbox" name="" id="" />
                                                                <div className='box-name'>V Series</div>
                                                            </div>
                                                            <div className="checkbox d-flex">
                                                                <input className='box' type="checkbox" name="" id="" />
                                                                <div className='box-name'>X Series</div>
                                                            </div>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="1" className="item1" >
                                                    <Accordion.Header>Price Range</Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="PriceRangeDiv">
                                                            <ReactSlider
                                                                className="horizontal-slider"
                                                                onChange={(e) => {
                                                                    console.log("on change", e)
                                                                    let [f, s] = e
                                                                    setMaxPrice(s)
                                                                    setMinPrice(f)
                                                                    // console.log(f, s);
                                                                }}
                                                                thumbClassName="example-thumb"
                                                                trackClassName="example-track"
                                                                defaultValue={[1000, 200000]}
                                                                min={1000}
                                                                max={200000}
                                                                ariaLabel={['Lower thumb', 'Upper thumb']}
                                                                ariaValuetext={state => `Thumb value ${state.valueNow}`}
                                                                renderThumb={(props, state) => <div {...props}></div>}
                                                                pearling
                                                                minDistance={1000}
                                                            />
                                                            {/* <ReactSlider
                                                                className="horizontal-slider"
                                                                thumbClassName="example-thumb"
                                                                onChange={(e) => {
                                                                    console.log("on change", e)
                                                                    let [f, s] = e
                                                                    setMaxPrice(s)
                                                                    setMinPrice(f)
                                                                }}
                                                                trackClassName="example-track"
                                                                defaultValue={[minPrice, maxPrice]}
                                                                ariaLabel={['Lower thumb', 'Upper thumb']}
                                                                ariaValuetext={state => `Thumb value ${state.valueNow}`}
                                                                renderThumb={(props, state) => <div className='thmmm' {...props}></div>}
                                                                pearling
                                                                minDistance={5000}
                                                                max={200000}
                                                                min={1000}
                                                                step={5000}
                                                            /> */}
                                                            <div className="filterPrices">
                                                                <div className="fPrice">
                                                                    ₹{MinPrice}
                                                                </div>
                                                                <div className="lPrice">
                                                                    ₹{MaxPrice}
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="2" className="item1">
                                                    <Accordion.Header>RAM</Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="accordion-checkbox">
                                                            <div className="checkbox d-flex">
                                                                <input className='box' type="checkbox" name="" id="" />
                                                                <div className='box-name' >4 GB</div>
                                                            </div>
                                                            <div className="checkbox d-flex">
                                                                <input className='box' type="checkbox" name="" id="" />
                                                                <div className='box-name'>3 GB</div>
                                                            </div>
                                                            <div className="checkbox d-flex">
                                                                <input className='box' type="checkbox" name="" id="" />
                                                                <div className='box-name'>6 GB</div>
                                                            </div>
                                                            <div className="checkbox d-flex">
                                                                <input className='box' type="checkbox" name="" id="" />
                                                                <div className='box-name'>8 GB</div>
                                                            </div>
                                                            <div className="checkbox d-flex">
                                                                <input className='box' type="checkbox" name="" id="" />
                                                                <div className='box-name'>12 GB</div>
                                                            </div>
                                                            <div className="checkbox d-flex">
                                                                <input className='box' type="checkbox" name="" id="" />
                                                                <div className='box-name'>16 GB</div>
                                                            </div>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="3" className="item1">
                                                    <Accordion.Header>INTERNAL STORAGE</Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="accordion-checkbox">
                                                            <div className="checkbox d-flex">
                                                                <input className='box' type="checkbox" name="" id="" />
                                                                <div className='box-name' >32 GB</div>
                                                            </div>
                                                            <div className="checkbox d-flex">
                                                                <input className='box' type="checkbox" name="" id="" />
                                                                <div className='box-name'>64 GB</div>
                                                            </div>
                                                            <div className="checkbox d-flex">
                                                                <input className='box' type="checkbox" name="" id="" />
                                                                <div className='box-name'>128 GB</div>
                                                            </div>
                                                            <div className="checkbox d-flex">
                                                                <input className='box' type="checkbox" name="" id="" />
                                                                <div className='box-name'>256 GB</div>
                                                            </div>
                                                            <div className="checkbox d-flex">
                                                                <input className='box' type="checkbox" name="" id="" />
                                                                <div className='box-name'>512 GB</div>
                                                            </div>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>
                                    </Offcanvas.Body>
                                </Offcanvas>

                                <img src="/images/bx_sort.svg" alt="" />
                                <div className='sort1' onClick={onShow} >Sort By</div>

                                <Offcanvas show={display} onHide={onClose} placement='bottom' >
                                    <Offcanvas.Body>
                                        <div className="sortSection">
                                            <div className="sortBy">
                                                <div className="sortLogo">
                                                    <img src="/images/bx_sort.svg" alt="" />
                                                    <div className='sort'>Sort By</div>
                                                </div>
                                                <div onClick={onClose} ><RxCross1 /> </div>
                                            </div>
                                            <div className="sortNewSec">
                                                <ul>
                                                    <li>
                                                        <div className="Text">New</div>
                                                        <div className="cir"></div>
                                                    </li>
                                                    <li>
                                                        <div className="Text">Price Low to High</div>
                                                        <div className="cir"></div>
                                                    </li>
                                                    <li>
                                                        <div className="Text">Price High to Low</div>
                                                        <div className="cir"></div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Offcanvas.Body>
                                </Offcanvas>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="filterProMain">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="filtersSec-null">
                                        <div className="filReset">
                                            <div className="fill">
                                                <img src="/images/uiw_filter.svg" alt="" />
                                                <div className='filter'>Filters</div>
                                            </div>
                                        </div>


                                        <div className="AccordionSection">
                                            <Accordion defaultActiveKey={["0", "1", "2"]}>
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>CATEGORIES / SERIES</Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="accordion-checkbox">
                                                            <div className="checkbox d-flex">
                                                                <input className='box' type="checkbox" name="" id="" />
                                                                <div className='box-name' >Y Series</div>
                                                            </div>
                                                            <div className="checkbox d-flex">
                                                                <input className='box' type="checkbox" name="" id="" />
                                                                <div className='box-name'>T Series</div>
                                                            </div>
                                                            <div className="checkbox d-flex">
                                                                <input className='box' type="checkbox" name="" id="" />
                                                                <div className='box-name'>V Series</div>
                                                            </div>
                                                            <div className="checkbox d-flex">
                                                                <input className='box' type="checkbox" name="" id="" />
                                                                <div className='box-name'>X Series</div>
                                                            </div>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header>Price Range</Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="PriceRangeDiv">
                                                            <ReactSlider
                                                                className="horizontal-slider"
                                                                onChange={(e) => {
                                                                    console.log("on change", e)
                                                                    let [f, s] = e
                                                                    setMaxPrice(s)
                                                                    setMinPrice(f)
                                                                    // console.log(f, s);
                                                                }}
                                                                thumbClassName="example-thumb"
                                                                trackClassName="example-track"
                                                                defaultValue={[1000, 200000]}
                                                                min={1000}
                                                                max={200000}
                                                                ariaLabel={['Lower thumb', 'Upper thumb']}
                                                                ariaValuetext={state => `Thumb value ${state.valueNow}`}
                                                                renderThumb={(props, state) => <div {...props}></div>}
                                                                pearling
                                                                minDistance={1000}
                                                            />
                                                            {/* <ReactSlider
                                                                className="horizontal-slider"
                                                                thumbClassName="example-thumb"
                                                                onChange={(e) => {
                                                                    console.log("on change", e)
                                                                    let [f, s] = e
                                                                    setMaxPrice(s)
                                                                    setMinPrice(f)
                                                                }}
                                                                trackClassName="example-track"
                                                                defaultValue={[minPrice, maxPrice]}
                                                                ariaLabel={['Lower thumb', 'Upper thumb']}
                                                                ariaValuetext={state => `Thumb value ${state.valueNow}`}
                                                                renderThumb={(props, state) => <div className='thmmm' {...props}></div>}
                                                                pearling
                                                                minDistance={5000}
                                                                max={200000}
                                                                min={1000}
                                                                step={5000}
                                                            /> */}
                                                            <div className="filterPrices">
                                                                <div className="fPrice">
                                                                    ₹{MinPrice}
                                                                </div>
                                                                <div className="lPrice">
                                                                    ₹{MaxPrice}
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="2">
                                                    <Accordion.Header>RAM</Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="accordion-checkbox">
                                                            <div className="checkbox d-flex">
                                                                <input className='box' type="checkbox" name="" id="" />
                                                                <div className='box-name' >4 GB</div>
                                                            </div>
                                                            <div className="checkbox d-flex">
                                                                <input className='box' type="checkbox" name="" id="" />
                                                                <div className='box-name'>3 GB</div>
                                                            </div>
                                                            <div className="checkbox d-flex">
                                                                <input className='box' type="checkbox" name="" id="" />
                                                                <div className='box-name'>6 GB</div>
                                                            </div>
                                                            <div className="checkbox d-flex">
                                                                <input className='box' type="checkbox" name="" id="" />
                                                                <div className='box-name'>8 GB</div>
                                                            </div>
                                                            <div className="checkbox d-flex">
                                                                <input className='box' type="checkbox" name="" id="" />
                                                                <div className='box-name'>12 GB</div>
                                                            </div>
                                                            <div className="checkbox d-flex">
                                                                <input className='box' type="checkbox" name="" id="" />
                                                                <div className='box-name'>16 GB</div>
                                                            </div>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="3">
                                                    <Accordion.Header>INTERNAL STORAGE</Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="accordion-checkbox">
                                                            <div className="checkbox d-flex">
                                                                <input className='box' type="checkbox" name="" id="" />
                                                                <div className='box-name' >32 GB</div>
                                                            </div>
                                                            <div className="checkbox d-flex">
                                                                <input className='box' type="checkbox" name="" id="" />
                                                                <div className='box-name'>64 GB</div>
                                                            </div>
                                                            <div className="checkbox d-flex">
                                                                <input className='box' type="checkbox" name="" id="" />
                                                                <div className='box-name'>128 GB</div>
                                                            </div>
                                                            <div className="checkbox d-flex">
                                                                <input className='box' type="checkbox" name="" id="" />
                                                                <div className='box-name'>256 GB</div>
                                                            </div>
                                                            <div className="checkbox d-flex">
                                                                <input className='box' type="checkbox" name="" id="" />
                                                                <div className='box-name'>512 GB</div>
                                                            </div>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>

                                    </div>

                                    <div className="ImageSec">
                                        <img className='w-100 img1' src="/images/AccordionImg1 (1).png" alt="" />
                                        <img className='w-100 img2' src="/images/AccordionImg2 (2).png" alt="" />
                                    </div>

                                </div>

                                <div className="col-lg-9">

                                    <div className="allProds">
                                        <div className="selListSortSec">
                                            <div className="selHead">Shop vivo Top Selling Products</div>
                                            <div className="sortSec">
                                                <div className="sortBysort">
                                                    <img src="/images/bx_sort.svg" alt="" />
                                                    <div className='sort'>Sort By</div>
                                                </div>
                                                <div className="NewDropDiv">
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                            New  <span></span>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1">New</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Price Low to High</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">Price High to Low</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>

                                                </div>
                                            </div>
                                        </div>

                                    
                                        <div className="smartPhoneSeries">
                                            <div className="row gy-3">
                                                <div className="col-lg-3 col-6">
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

                                                <div className="col-lg-3 col-6">
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

                                                <div className="col-lg-3 col-6">
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

                                                <div className="col-lg-3 col-6">
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
                                            </div>

                                        </div>

                                        <div className="smartPhoneSeries">
                                            <div className="row gy-3">
                                                <div className="col-lg-3 col-6">
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

                                                <div className="col-lg-3 col-6">
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

                                                <div className="col-lg-3 col-6">
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

                                                <div className="col-lg-3 col-6">
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
                                            </div>

                                        </div>


                                        <div className="smartPhoneSeries">
                                            <div className="row gy-3">
                                                <div className="col-lg-3 col-6">
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

                                                <div className="col-lg-3 col-6">
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

                                                <div className="col-lg-3 col-6">
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

                                                <div className="col-lg-3 col-6">
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

export default Shop