import React from "react";

import './Sign.css';


const Sign = () => {
    return (
        <div className="main">

            <header>
                {/* <div><h1  className="sign">Sign in</h1></div> */}
                <div className="sign">
                    Sign in
                </div>
                {/* <div ><h3 className="mn">Email or mobile phone number</h3></div> */}
                <div className="mn" >
                Email or mobile phone number
                </div>
                <div className="input-type">
                    <input type="text" placeholder="Enter email or phone no" />
                </div>

                <div className="button">

                    <button>Continue</button>
                </div>

                <div className="text1">
                    <p>By continuing, you agree to Amazon's <a href="#">Conditions of
                        Use</a> and <a href="#">Privacy Notice.</a></p>
                </div>

                <div className="Needhelp">
                    <select name="" id="">
                        <option value=""><a href="">Need help ?</a></option>
                        <option value="">forgot ypur password ?</option>
                        <option value="">Other issues with Sign-In</option>
                    </select>
                    <hr className="line" />
                </div>
                <div className="bw">Buying for work?</div>
                <h3 className="shop"><a href="#">Shop on Amazon Business</a></h3>


            </header>

        </div>
    )
}
export default Sign;