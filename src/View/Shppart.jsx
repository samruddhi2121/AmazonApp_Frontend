import React from "react";
import box1 from '../Assets/box2.jpg';
import box2 from'../Assets/box1.img';
import box3 from '../Assets/box3.webp';
import box4 from '../Assets/box4.jpg';
import  deals from '../Assets/Deals.jpg';

const Shppart=()=>{
    return(
        <div>
            <div className="shop-section">
                            {/* <div className="box1 box">
                                <div className="box-content">
                                    <h2>Get your game on</h2>
                                    <div className="box-img">
                                        <img src={box1} alt="" />
                                        
                                    </div>
                                   
            
                                </div>
                            </div> */}
                            <div className="box2 box">
                                <div className="box-content">
                                    <h2>Get your Mobile</h2>
                                    <div className="box-img" >
                                        <img src={box1} alt="" />
                                    </div>
                                    <button>View More</button>
                                  
            
                                </div>
                            </div>
                            <div className="box3 box">
                                <div className="box-content">
                                    <h2> Home </h2>
                                    <div className="box-img" >
                                        <img src={box3} alt="" />
                                    </div>
                                    
            
                                </div>
                            </div>
                            
                         
                            {/* <div className="box6 box">
                                <div className="box-content">
                                    <h2>Clothes</h2>
                                    <div className="box-img" >
                                        <img src={box3} alt="" />
                                    </div>
                                    
            
                                </div>
                            </div> */}
                            <div className="box7 box">
                                <div className="box-content">
                                    <h2>Beauty Product</h2>
                                    <div className="box-img" >
                                        <img src={deals} alt="" />
                                    </div>
                                    {/* <div className="seemore">
                                    <p><a href="#">See more</a></p>
                                    </div> */}
            
                                </div>
                            </div>
                            
            
                        </div>
        </div>
    )
}

export default Shppart;