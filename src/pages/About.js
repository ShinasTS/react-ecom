import React, { Fragment } from 'react';
import Menu from './Meno';

function About() {
    return (
        <Fragment>
            <div>
            <Menu/>

                


                <section id="page-header">
                    <h2>#myself</h2>
                    <p>save more with coupons and upto 70% off</p>
                </section>


                <section id="feature" class="section-p1">
                    <div class="featurecontainer">

                        <div class="row">
                            <div class="featureheading">
                                <h2>SERVICES PROVIDED</h2>

                            </div>
                            <div class="imgcontainer">
                                <div class="fe-box">
                                    <img src="assets/img/freeshipping.png" width="100" height="145"/>

                                </div>
                                <div class="fe-box">
                                    <img src="assets/img/discount.jpeg" width="100"/>

                                </div>
                                <div class="fe-box">
                                    <img src="assets/img/return.png" width="100"/>

                                </div>
                                <div class="fe-box">
                                    <img src="assets/img/repair.png" width="100"/>

                                </div>
                                <div class="fe-box">
                                    <img src="assets/img/customer.png" width="100"/>

                                </div>
                                <div class="fe-box">
                                    <img src="assets/img/new.png" width="100"/>

                                </div>
                            </div>
                        </div>
                        </div>
                </section>


                <section id="newsletter" class="section-p1 section-m1" >
                    <div class="newstext">
                        <h4>Sign Up For Newsletter</h4>
                        <p>Get E-mail updates about our latest <span>Offers and Discounts</span></p>
                    </div>
                    <div class="form">
                        <input type="text" placeholder="Your email address"/>
                            <button class="normal">sign up</button>
                    </div>
                </section>

                <footer class="section-p1">
                    <div class="col">
                        <img src="assets/img/logo.png" width="80px" alt=""/>
                            <br/>
                                <h4>Contact</h4>
                                <p><strong>Address:</strong>EMS Shopping Complex Guruvayoor, Road, Kunnamkulam, Kerala 680503</p>
                                <p><strong>Phone:</strong>090207 23382</p>
                                <p><strong>Hours:</strong>10:00-20:00 Mon-Sat</p>
                                <div class="follow">
                                    <h4>Follows Us </h4>
                                    <div class="icon">
                                        <a href="#"><i class="ri-facebook-box-fill"></i></a>
                                        <a href="#"><i class="ri-instagram-fill"></i></a>
                                        <a href="#"><i class="ri-twitter-fill"></i></a>
                                        <a href="#"><i class="ri-linkedin-box-fill"></i></a>


                                    </div>

                                </div>
                            </div>

                            <div class="col">
                                <h4>About</h4>
                                <a href="#">About Us</a>
                                <a href="#">Delivery Information</a>
                                <a href="#">privacy policy</a>
                                <a href="#">Terms & Conditions</a>
                                <a href="#">Contact Us</a>
                            </div>

                            <div class="col">
                                <h4>My Account</h4>
                                <a href="#">Sign In</a>
                                <a href="#">View Cart</a>
                                <a href="#">My Wishlist</a>
                                <a href="#">Track My Order</a>
                                <a href="#">Help</a>
                            </div>

                            <div class="col install">
                                <h4>Install App</h4>
                                {/* <!-- <p>From App Store or Google Play</p> --> */}
                                <div class="row">
                                    <a href="#"><img src="assets/img/playstore.png" width="110" alt=""/></a>
                                    <a href="#"><img src="assets/img/appstore.png" width="110" alt=""/></a>
                                </div>
                                <br/>
                                    <h4>Secured Payment Gateways</h4>
                                    <img src="assets/img/visarupayupi.png" alt=""/>

                                    </div>

                                    <div class="copyright">
                                        <p>All rights reserved to tharyil opticals</p>
                                    </div>

                                </footer>

                                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

                                <script src="app.js"></script>
                            </div>
                        </Fragment>
                        )
}
export default About;