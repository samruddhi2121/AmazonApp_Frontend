import React from "react";
// import './Customer.css';
import './Customer.css';
// import img from '../Assets/deals3.jpg'

const Customer=()=>{
    return(
        <div className="cust">

            <h1 className="h1">Welcome to Amazon</h1>
            <h3 className="h3">What would you like help with today? You can quickly take care of most things here, or connect with us when needed. </h3>
          <div className="part">
            <div className="shoping">
                <div className="pic">
                    <img alt="" src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_order_v2._CB432205751_.png"></img>
                </div>
                <div className="text">
                   <p className="del" >A delivery ,order or return</p >
                </div>
            </div>

            <div className="shoping">
                <div className="pic">
                <img alt="" src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_dcontent_v3._CB428304563_.png"></img>
                </div>
                <div className="text">
                   <p className="del "> eBooks, Prime Videos, Music, or Games</p >
                </div>
            </div>

            <div className="shoping">
                <div className="pic">
                <img alt="" src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_prime_v2._CB432205750_.png"></img>
                </div>
                <div className="text">
                   <p  className="del "> Prime</p >
                </div>
            </div>

            <div className="shoping">
                <div className="pic">
                <img alt="" src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_paymentgc_v2._CB432205751_.png"></img>
                </div>
                <div className="text">
                   <p className="del ">Payment, charges or gift cards</p >
                </div>
            </div>

            <div className="shoping">
                <div className="pic">
                <img alt="" src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_login_security_v2._CB432205751_.png"></img>
                </div>
                <div className="text">
                   <p className="del " >Address,security and Privacy</p >
                </div>
            </div>
            
            <div className="shoping">
                <div className="pic">
                <img alt="" src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_account_v2._CB432205751_.png"></img>
                </div>
                <div className="text">
                   <p className="del ">Memberships, subscriptions or communications</p >
                </div>
            </div>

            <div className="shoping">
                <div className="pic">
                <img alt="" src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_device_v2._CB432205751_.png"></img>
                </div>
                <div className="text">
                   <p className="del " >eBooks, Prime Videos, Music, or Games</p >
                </div>
            </div>

            <div className="shoping">
                <div className="pic">
                <img alt="" src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/accessibility._CB653395151_.png"></img>
                </div>
                <div className="text">
                   <p className="del ">Accessibility</p >
                </div>
            </div>

            <div className="shoping">
                <div className="pic">
                <img alt="" src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/Login_Icon_2._CB618207853_.png"></img>
                </div>
                <div className="text">
                   <p className="del " >Login & Password</p >
                </div>
            </div>
        </div>

        </div>
    )
}
export default Customer;