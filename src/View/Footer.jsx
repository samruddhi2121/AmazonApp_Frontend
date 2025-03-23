import React from "react";

const Footer = () => {
    return(
        <div>


        <footer>
            <div className="foot-panel1">
                Back to Top
            </div>

            <div className="foot-panel2">
                <ul>
                    <p>Get to Know Us</p>
                    <a>Blog</a>
                    <a>Investor Relations</a>
                    <a> Careers</a>
                    <a>Amazon Devices</a>
                    <a>Amazon Science</a>
                    <a>About Amazon</a>

                </ul>

                <ul>
                    <p>Make Money with Us</p>
                    <a>Sell products on Amazon</a>
                    <a>Sell on Amazon Business</a>
                    <a>Sell apps on Amazon</a>
                    <a>Become an Affiliate</a>
                    <a>Advertise Your Products</a>
                    <a>Self-Publish with Us</a>
                    <a>Host an Amazon Hub</a>

                </ul>


                <ul>
                    <p>Amazon Payment Products</p>
                    <a>Amazon Business Card</a>
                    <a>Shop with Points</a>
                    <a>Reload Your Balance</a>
                    <a>Amazon Currency Converter</a>

                </ul>

                <ul>
                    <p>Let Us Help You</p>
                    <a>Amazon and COVID-19</a>
                    <a>Your Account</a>
                    <a>Your Orders</a>
                    <a>Shipping Rates & Policies</a>
                    <a>Returns & Replacements</a>
                    <a>Manage Your Content and Devices</a>
                    <a>Help</a>


                </ul>


            </div>

            {/* <!-- panel 3 --> */}
            <div className="foot-panel3">
                <div className="logo"></div>
            </div>


            {/* <!-- panel 4 --> */}
            <div className="foot-panel4">
                <div className="pages">
                    <a>Conditions of Use</a>
                    <a>Privacy Notice</a>
                    <a>Your add Privacy Choices</a>
                </div>
                <div className="copyright">
                    © 1996-2024, Amazon.com, Inc. or its affiliates
                </div>
            </div>
        </footer>
    </div>
    )
}

export default Footer;