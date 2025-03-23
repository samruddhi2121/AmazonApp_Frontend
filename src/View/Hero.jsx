import React from "react";

import hero from '../Assets/hero.img';

const Hero = () => {
    return (
        <div>
            <div className="hero-section">
                <div className="herosection">
                <div className="img1">
                    {/* <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/Nov_New_3000x1200._CB542180708_.jpg " alt="" /> */}
                    <img src={hero} alt="" />
                    
                    <img src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg" alt="" />
                    <img src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg" alt="" />
                    <img src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg" alt="" />
                </div>

                </div>
               
                <div className="hero-msg">
                    <p>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery.  <a href=""> Click here to go to amazon.in</a></p>
                </div>
            </div>
        </div>
    )
}

export default Hero;