import React, { Fragment } from "react";
import { Link } from "react-router-dom";
function Meno(){
    return(
        <Fragment>
             <section id="header">
             <Link to="/"><img src="assets/img/logo.jpg" alt="" height="40" /></Link>

          <div>
            <ul id="navbar">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Shope">Shop</Link></li>
              {/* <!-- <li><a href="blog.html">Home</a></li> --> */}
              <li><Link to="/About">About</Link></li>
              <li><Link to="/Contactus">Contact Us</Link></li>
              <li><a href="cart"><i class="ri-shopping-bag-line"></i></a></li>
              <a href="#" id="close"><i class="ri-close-fill"></i></a>
            </ul>

          </div>
          <div id="mobile">
            <a href="cart.html"><i class="ri-shopping-bag-line"></i></a>

            <i id="bar" class="ri-menu-unfold-line icons"></i>
          </div>
        </section>
        </Fragment>
    )
}

export default Meno;