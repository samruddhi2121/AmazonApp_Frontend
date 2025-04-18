import React from "react";
import {Link} from 'react-router-dom';


const Panel = () => {
    return(
        <div>
        <div className="panel">
            <div className="panel-all">
                <i className="fa-solid fa-bars"></i>  
                <span>All</span>
                
            </div>

            <div className="panel-ops">
                {/* <p>Todays Deals</p> */}
               <Link to="/TodaysDeals" > <p>TodaysDeals</p></Link> 
               <Link to="/CustomerService" > <p>Customer Service</p></Link>
               <Link to="/Registry1" > <p>Registry</p></Link> 
                {/* <p>Registry</p> */}
                <p>Gift Cards</p>
                <Link to="/sell" > <p>Sell</p></Link> 
            </div>

            <div className="panel-deals">
                <Link to="/BuyProductByType/:type"><h3>Buy Product</h3></Link>
                {/* <Link to="/BuyProduct"><h3>Buy Product</h3></Link> */}
            </div>
        </div>
    </div>
    )
}

export default Panel;