import React from "react";
import {Link} from 'react-router-dom';


const Nav = () => {
    return (
        <div>
            <div>
                <div className="navbar">
                    <div className="nav-logo border">
                        <div className="logo">
                            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy8L1HIH2ZlhTcSR2x5c993GIA6DFFs06YEg&s" alt="" /> */}
                            <Link to="/" className="add-first"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy8L1HIH2ZlhTcSR2x5c993GIA6DFFs06YEg&s" alt="" /></Link> 
                        </div>
                    </div>

                    <div className="nav-address border">
                        {/* <p className="add-first">Deliver to</p> */}
                        <Link to="/DeliverTo" > <p className="add-first">Deliver to</p></Link> 
                        <div className="add-icon">
                            <i className="fa-solid fa-location-dot"></i>
                            <p className="add-second">India</p>
                        </div>
                    </div>

                    <div className="nav-search">
                        <select className="search-select">
                            <option>All</option>3
                            <option value="pune">Pune</option>
                        </select>
                        <input type="text" placeholder="search Amazon" className="search-input" />
                        <div className="search-icon">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>

                    <div className="nav-signin border">
                        <p className="nav-sec">Hello,Sign in</p>
                        {/* <Link to="/SignIn" className="add-first"><p className="nav-second"><a href="">Account & Lists</a></p></Link>  */}
                        <Link to="/Sign" className="add-first"><p className="nav-second">Account & Lists</p></Link> 
                        {/* <p className="nav-second"><a href="">Account & Lists</a></p> */}
                    </div>

                    <div className="nav-return border">
                        <p className="return">Returns</p>
                        <p className="nav-second">& Orders</p>
                    </div>

                    <div className="nav-cart border">
                        <i className="fa-solid fa-cart-shopping"></i>
                        cart
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;