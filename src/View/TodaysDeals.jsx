import React from "react";
import './TodaysDeals.css';
import Deals from '../Assets/Deals.jpg';
import Deals2 from '../Assets/Deals2.jpg';
import deals3 from '../Assets/deals3.jpg';
import deals4 from '../Assets/deals4.jpg';
import deals5 from '../Assets/deals5.jpg';
import deals7 from '../Assets/deals7.jpg';
import deals8 from '../Assets/deals8.jpg';

const TodaysDeals = () => {
    return (
        <div>

            <h1 className="td">Todays Deals</h1>
            <h2 className="mo">Must-have offers</h2>

            <div class="card-section">
                <div class="cards">
                    <div class="img6">
                        <img src={Deals} alt="" />
                    </div>
                    <div class="text">
                        <h3>Beauty</h3>
                    </div>

                </div>

                <div class="cards">
                    <div class="img6">
                        <img src={Deals2} alt="" />
                    </div>
                    <div class="text">
                        <h3>Deals on Winter Facorites</h3>
                    </div>

                </div>

                <div class="cards">
                    <div class="img6">
                        <img src={deals3} alt="" />
                    </div>
                    <div class="text">
                        <h3>Sports & Outdoors</h3>
                    </div>

                </div>

                <div class="cards">
                    <div class="img6">
                        <img src={deals4} alt="" />
                    </div>
                    <div class="text">
                        <h3>Electronics</h3>
                        
                    </div>

                </div>

                <div class="cards">
                    <div class="img6">
                        <img src={deals5}alt="" />
                    </div>
                    <div class="text">
                        <h3>Overstock deals</h3>
                    </div>

                </div>


                <div class="cards">
                    <div class="img6">
                        <img src={deals7} alt="" />
                    </div>
                    <div class="text">
                        <h3>Overstock deals</h3>
                    </div>

                </div>


                <div class="cards">
                    <div class="img6">
                        <img src={deals8} alt="" />
                    </div>
                    <div class="text">
                        <h3>Overstock deals</h3>
                    </div>

                </div>


                <div class="cards">
                    <div class="img6">
                        <img src={deals5} alt="" />
                    </div>
                    <div class="text">
                        <h3>Fashion</h3>
                    </div>

                </div>


                <div class="cards">
                    <div class="img6">
                        <img src={deals3} alt="" />
                    </div>
                    <div class="text">
                        <h3>Home</h3>
                    </div>

                </div>


                <div class="cards">
                    <div class="img6">
                        <img src={deals3} alt="" />
                    </div>
                    <div class="text">
                        <h3>Home</h3>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default TodaysDeals;