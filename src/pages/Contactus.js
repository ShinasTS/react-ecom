import React, { Fragment } from 'react';
import Menu from './Meno';
function Contactus() {
    return (
        <Fragment>
            <div>

            <Menu/>



                <section id="page-header">
                    <h2>#followme</h2>
                    <p>save more with coupons and upto 70% off</p>
                </section>

                <section id="contactdetails" className="section-p1">
                    <div className="details">

                        <h2>GET IN TOUCH </h2>
                        <h3>Head office</h3>
                        <div className='data'>
                            <li>
                                <i className="ri-map-pin-fill"></i>
                                <p>EMS Shopping Complex,  Kunnamkulam, Kerala 680503</p>
                            </li>
                            <li>
                                <i className="ri-mail-line"></i>
                                <p>tharyilopticals@gmail.com</p>
                            </li>
                            <li>
                                <i className="ri-phone-line"></i>
                                <p>+91 7034186536</p>
                            </li>
                            <li>
                                <i className="ri-time-fill"></i>
                                <p>Mon - Sat: 9 AM to 8 PM</p>
                            </li>
                        </div>
                    </div>
                    {/* <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.1018106832325!2d76.06647487519956!3d10.649198289491919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba795441b100ae5%3A0x22ac34a679c8e350!2sTharayil%20Opticals!5e0!3m2!1sen!2sin!4v1699166662512!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div> */}

                </section>

<section id="contact">
                    <div className="cont">
                        <div>
                            <h2 className="contactustext">WRITE TO US</h2>
                        </div>
                        <div className="rowcontact">
                            <div className="col-md-7 shadow rounded p-5">
                                <div className>
                                    <div className="col mb-3">
                                        <label for="form-label">First Name</label>
                                        <input type="text" className="form-control" placeholder=""/>
                                    </div>
                                    <div className="col mb-3">
                                        <label for="form-label">Last Name</label>
                                        <input type="text" className="form-control" placeholder=""/>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label for="form-label">Email:</label>
                                    <input type="text" className="form-control" placeholder=""/>
                                </div>
                                <div className="mb-3">
                                    <label for="form-label">Subject:</label>
                                    <input type="text" className="form-control" placeholder=""/>
                                </div>
                                <div className="mb-3">
                                    <label for="form-label">Message:</label>
                                    <textarea name="" className="form-control" placeholder="Write your Message Here" cols="30" rows="10"></textarea>
                                </div>

                                {/* <!-- Button trigger modal --> */}
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                    Submit</button>

                            </div>


                            {/* <!-- Modal --> */}
                            <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLongTitle"></h5>

                                        </div>
                                        <div className="modal-body">
                                            Submit Message
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </section>


                <section id="newsletter" className="section-p1 section-m1" >
                    <div className="newstext">
                        <h4>Sign Up For Newsletter</h4>
                        <p>Get E-mail updates about our latest <span>Offers and Discounts</span></p>
                    </div>
                    <div className="form">
                        <input type="text" placeholder="Your email address"/>
                            <button className="normal">sign up</button>
                    </div>
                </section>

                <footer className="section-p1">
                    <div className="col">
                        <img src="img/logo.png" width="80px" alt=""/>
                            <br/>
                                <h4>Contact</h4>
                                <p><strong>Address:</strong>EMS Shopping Complex, Guruvayoor Road, Kunnamkulam, Kerala 680503</p>
                                <p><strong>Phone:</strong>090207 23382</p>
                                <p><strong>Hours:</strong>10:00-20:00 Mon-Sat</p>
                                <div className="follow">
                                    <h4>Follows Us </h4>
                                    <div className="icon">
                                        <a href="#"><i className="ri-facebook-box-fill"></i></a>
                                        <a href="#"><i className="ri-instagram-fill"></i></a>
                                        <a href="#"><i className="ri-twitter-fill"></i></a>
                                        <a href="#"><i className="ri-linkedin-box-fill"></i></a>


                                    </div>

                                </div>
                            </div>

                            <div className="col">
                                <h4>About</h4>
                                <a href="#">About Us</a>
                                <a href="#">Delivery Information</a>
                                <a href="#">privacy policy</a>
                                <a href="#">Terms & Conditions</a>
                                <a href="#">Contact Us</a>
                            </div>

                            <div className="col">
                                <h4>My Account</h4>
                                <a href="#">Sign In</a>
                                <a href="#">View Cart</a>
                                <a href="#">My Wishlist</a>
                                <a href="#">Track My Order</a>
                                <a href="#">Help</a>
                            </div>

                            <div className="col install">
                                <h4>Install App</h4>
                                {/* <!-- <p>From App Store or Google Play</p> --> */}
                                <div className="row">
                                    <a href="#"><img src="img/playstore.png" width="110" alt=""/></a>
                                    <a href="#"><img src="img/appstore.png" width="110" alt=""/></a>
                                </div>
                                <br/>
                                    <h4>Secured Payment Gateways</h4>
                                    <img src="img/visarupayupi.png" alt=""/>

                                    </div>

                                    <div className="copyright">
                                        <p>All rights reserved to tharyil opticals</p>
                                    </div>

                                </footer>

                                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

                                <script src="app.js"></script>
                            </div>
                        </Fragment>

                        )
}

                        export default Contactus;