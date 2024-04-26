import React, { Fragment } from 'react';
import Menu from './Meno';
function Home() {
  return (
    <Fragment>
      
      <div>

        <Menu/>

        <section id="hero1">
          <div class="slider">
            <div class="slides">
              <input type="radio" name="radiobtn" id="radio1" />
              <input type="radio" name="radiobtn" id="radio2" />
              <input type="radio" name="radiobtn" id="radio3" />
              <input type="radio" name="radiobtn" id="radio4" />

              <div class="slide first">
                <img src="assets/img/herobanners/img1.jpg" width="1500px" alt="" />
              </div>
              <div class="slide">
                <img src="assets/img/herobanners/img2.jpg" width="1500px" alt="" />
              </div>
              <div class="slide">
                <img src="assets/img/herobanners/img3.jpg" width="1500px" alt="" />
              </div>
              <div class="slide">
                <img src="assets/img/herobanners/img4.jpg" width="1500px" alt="" />
              </div>

              <div class="autonavigation">
                <div class="autobtn1"></div>
                <div class="autobtn2"></div>
                <div class="autobtn3"></div>
                <div class="autobtn4"></div>
              </div>


            </div>

            <div class="manualnavigation">
              <label for="radio1" class="manualbtn"></label>
              <label for="radio2" class="manualbtn"></label>
              <label for="radio3" class="manualbtn"></label>
              <label for="radio4" class="manualbtn"></label>
            </div>
          </div>

        </section>







        <section id="product1" class="section-p1">
          <h2>Featured Products</h2>
          <p>Summer Collection </p>
          <div class="pro-container">
            <div class="pro">
              <a href="productpage.html"><img src="assets/img/frame1/image1.png" alt="" /></a>
              <div class="des">
                <span>RayBan</span>
                <h5>AVIATOR CLASSIC</h5>
                <div class="star">
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-half-fill"></i>
                </div>
                <h4>RS 9590</h4>
              </div>
              <a href="#"><i class="ri-shopping-cart-line cart"></i></a>
            </div>
            <div class="pro">
              <img src="assets/img/frame2/img1.jpg" alt="" />
              <div class="des">
                <span>RayBan</span>
                <h5>WAYFARER EASE</h5>
                <div class="star">
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-half-fill"></i>
                </div>
                <h4>RS 12450</h4>
              </div>
              <a href="#"><i class="ri-shopping-cart-line cart"></i></a>
            </div><div class="pro">
              <img src="assets/img/frame3/img1.jpg" alt="" />
              <div class="des">
                <span>RayBan</span>
                <h5>BLAZE DOUBLE BRIDGE</h5>
                <div class="star">
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-half-fill"></i>
                </div>
                <h4>RS 12100</h4>
              </div>
              <a href="#"><i class="ri-shopping-cart-line cart"></i></a>
            </div><div class="pro">
              <img src="assets/img/frame4/img1.jpg" alt="" />
              <div class="des">
                <span>RayBan</span>
                <h5>NOMAD OPTICS </h5>
                <div class="star">
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-half-fill"></i>
                </div>
                <h4>RS 12150</h4>
              </div>
              <a href="#"><i class="ri-shopping-cart-line cart"></i></a>
            </div><div class="pro">
              <img src="assets/img/frame5/img1.webp" alt="" />
              <div class="des">
                <span>RayBan</span>
                <h5>AVIATOR CLASSIC</h5>
                <div class="star">
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-half-fill"></i>
                </div>
                <h4>RS 9590</h4>
              </div>
              <a href="#"><i class="ri-shopping-cart-line cart"></i></a>
            </div><div class="pro">
              <img src="assets/img/frame6/img1.jpg" alt="" />
              <div class="des">
                <span>RayBan</span>
                <h5>AVIATOR OPTICS</h5>
                <div class="star">
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-half-fill"></i>
                </div>
                <h4>RS 8590</h4>
              </div>
              <a href="#"><i class="ri-shopping-cart-line cart"></i></a>
            </div><div class="pro">
              <img src="assets/img/frame8/img1.jpg" alt="" />
              <div class="des">
                <span>RayBan</span>
                <h5>NEW WAYFARER COLOR MIX</h5>
                <div class="star">
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-half-fill"></i>
                </div>
                <h4>RS 9690</h4>
              </div>
              <a href="#"><i class="ri-shopping-cart-line cart"></i></a>
            </div><div class="pro">
              <img src="assets/img/frame7/img1.png" alt="" />
              <div class="des">
                <span>RayBan</span>
                <h5>ROUND</h5>
                <div class="star">
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-half-fill"></i>
                </div>
                <h4>RS 9590</h4>
              </div>
              <a href="#"><i class="ri-shopping-cart-line cart"></i></a>
            </div>
          </div>
        </section>


        <section id="banner" class="">
          {/* <!-- <h4>Repair Services</h4> --> */}
          <h2>Up to <span>70 %</span> On all Frames & Sunglasses</h2>
          <a href="shop.html"><button class="normal">Explore More </button></a>
        </section>

        <section id="product1" class="section-p1">
          <h2>New Arrivals</h2>
          <p>Summer Collection </p>
          <div class="pro-container">
            <div class="pro">
              <a href="productpage.html"><img src="assets/img/frame1/image1.png" alt="" /></a>
              <div class="des">
                <span>RayBan</span>
                <h5>AVIATOR CLASSIC</h5>
                <div class="star">
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-half-fill"></i>
                </div>
                <h4>RS 9590</h4>
              </div>
              <a href="#"><i class="ri-shopping-cart-line cart"></i></a>
            </div>
            <div class="pro">
              <img src="assets/img/frame2/img1.jpg" alt="" />
              <div class="des">
                <span>RayBan</span>
                <h5>WAYFARER EASE</h5>
                <div class="star">
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-half-fill"></i>
                </div>
                <h4>RS 12450</h4>
              </div>
              <a href="#"><i class="ri-shopping-cart-line cart"></i></a>
            </div><div class="pro">
              <img src="assets/img/frame3/img1.jpg" alt="" />
              <div class="des">
                <span>RayBan</span>
                <h5>BLAZE DOUBLE BRIDGE</h5>
                <div class="star">
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-half-fill"></i>
                </div>
                <h4>RS 12100</h4>
              </div>
              <a href="#"><i class="ri-shopping-cart-line cart"></i></a>
            </div><div class="pro">
              <img src="assets/img/frame4/img1.jpg" alt="" />
              <div class="des">
                <span>RayBan</span>
                <h5>NOMAD OPTICS </h5>
                <div class="star">
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-half-fill"></i>
                </div>
                <h4>RS 12150</h4>
              </div>
              <a href="#"><i class="ri-shopping-cart-line cart"></i></a>
            </div><div class="pro">
              <img src="assets/img/frame5/img1.webp" alt="" />
              <div class="des">
                <span>RayBan</span>
                <h5>AVIATOR CLASSIC</h5>
                <div class="star">
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-half-fill"></i>
                </div>
                <h4>RS 9590</h4>
              </div>
              <a href="#"><i class="ri-shopping-cart-line cart"></i></a>
            </div><div class="pro">
              <img src="assets/img/frame6/img1.jpg" alt="" />
              <div class="des">
                <span>RayBan</span>
                <h5>AVIATOR OPTICS</h5>
                <div class="star">
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-half-fill"></i>
                </div>
                <h4>RS 8590</h4>
              </div>
              <a href="#"><i class="ri-shopping-cart-line cart"></i></a>
            </div><div class="pro">
              <img src="assets/img/frame8/img1.jpg" alt="" />
              <div class="des">
                <span>RayBan</span>
                <h5>NEW WAYFARER COLOR MIX</h5>
                <div class="star">
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-half-fill"></i>
                </div>
                <h4>RS 9690</h4>
              </div>
              <a href="#"><i class="ri-shopping-cart-line cart"></i></a>
            </div><div class="pro">
              <img src="assets/img/frame7/img1.png" alt="" />
              <div class="des">
                <span>RayBan</span>
                <h5>ROUND</h5>
                <div class="star">
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-half-fill"></i>
                </div>
                <h4>RS 9590</h4>
              </div>
              <a href="#"><i class="ri-shopping-cart-line cart"></i></a>
            </div>
          </div>
        </section>



        <section id="newsletter" class="section-p1 section-m1" >
          <div class="newstext">
            <h4>Sign Up For Newsletter</h4>
            <p>Get E-mail updates about our latest <span>Offers and Discounts</span></p>
          </div>
          <div class="form">
            <input type="text" placeholder="Your email address" />
            <button class="normal">sign up</button>
          </div>
        </section>

        <footer class="section-p1">
          <div class="col">
            <img src="assets/img/logo.png" width="80px" alt="" />
            <br />
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
              <a href="#"><img src="assets/img/playstore.png" width="110" alt="" /></a>
              <a href="#"><img src="assets/img/appstore.png" width="110" alt="" /></a>
            </div>
            <br />
            <h4>Secured Payment Gateways</h4>
            <img src="assets/img/visarupayupi.png" alt="" />

          </div>

          <div class="copyright">
            <p>All rights reserved to tharyil opticals</p>
          </div>

        </footer>

        <script src="app.js"></script>
      </div>
    </Fragment>

  )
}

export default Home;