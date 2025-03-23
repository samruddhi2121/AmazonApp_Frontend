import React from "react";
import './Registry.css';

const Registry = () => {
    return (
        <div >

            <div className="navigation">
                <div className="registry">
                    <p>registry & gifting</p>
                </div>

                <div className="find">
                    <p>Find a registry or gift list</p>
                </div>

                <div className="createregistry">
                    <p>Create a registry or gift list</p>
                </div>

                <div className="help">
                    <p>Help</p>
                </div>
            </div>


            <div className="giftPart">
                <div className="baby">
                    <div className="images">
                        <img alt="Baby Registry" src="https://m.media-amazon.com/images/G/01/img18/home/GL/AdobeStock_237143437_crop.jpeg" class="_gift-registry-featured-header-desktop_tile_grTileImgLarge__2v7Up"></img>
                    </div>
                    <div className="text3">
                        <p className="h4">Baby Registry</p>
                        <p>Get help Preparing for your new arrival</p>
                    </div>
                </div>

            
                    <div className="baby">
                        <div className="images">
                        <img alt="Wedding Registry" src="https://m.media-amazon.com/images/G/01/DiscoTec/2024/HomeLifestyle/AWR/Images/SUM24_AWR_Homepage_11_1200x900.jpg" class="_gift-registry-featured-header-desktop_tile_grTileImgLarge__2v7Up"></img>
                        </div>
                        <div className="text3">
                            <p className="h4">Wedding Registry</p>
                            <p>Register for gifts to start your new chapter.</p>
                        </div>
                    </div>

                    
                    <div className="baby">
                        <div className="images">
                        <img alt="Gift List" src="https://m.media-amazon.com/images/G/01/img18/home/GL/AdobeStock_285034732_ggr_crop.jpeg" class="_gift-registry-featured-header-desktop_tile_grTileImgLarge__2v7Up"></img>
                        </div>
                        <div className="text3">
                            <p className="h4">Gift List</p>
                            <p>Share gift ideas or needs for birthdays, holidays, graduations, new homes and more.</p>
                        </div>
                    </div>

                    <div className="baby">
                        <div className="images">
                        <img alt="Wedding" src="https://m.media-amazon.com/images/G/01/img18/home/GL/wedding_650_300.jpg " class="_gift-registry-tile-selection-desktop_tile_grTileImgLarge__2v7Up"></img>
                        </div>
                        <div className="text3">
                            <p className="h4">Wedding</p>
                            <p>Everything you need for a life together</p>
                        </div>
                    </div>

                </div>

             <article className="art">
                    <p>Reasons to register with Amazon</p>

                    <div className="register">
                    <div className="reasons">
                         <div className="img5">
                         <img alt="" src="https://m.media-amazon.com/images/G/01/weddingregistry/images/icon-highlights/icon_selection.png" class="_gift-registry-icon-highlights-desktop_style_iconHighlightIcon__1vw0k" role="presentation"></img>
                         </div>

                         <div className="para">
                          <p id="e1">Earths biggest selection</p>
                          <p>Add items from Amazon to create a gift registry for any occasion.</p>
                         </div>
                    </div>


                   
                    
                    <div className="reasons">
                         <div className="img5">
                            <img src="https://m.media-amazon.com/images/G/01/weddingregistry/images/icon-highlights/icon_share.png" alt="" />
                         </div>

                         <div className="para">
                          <p id="e1">Easy to Share</p>
                          <p>Share your gift registry with friends and family so they'll know exactly what gifts to get.</p>
                         </div>
                    </div>


                    
                    <div className="reasons">
                         <div className="img5">
                         <img alt="" src="https://m.media-amazon.com/images/G/01/weddingregistry/images/icon-highlights/icon_returns.png"/>
                         </div>

                         <div className="para">
                          <p id="e1">Extended returns</p>
                          <p>Not quite right? Registry gifts have an extended return period.</p>
                         </div>
                    </div>     
                </div>
             </article>
                
      </div>
        
    )

}
export default Registry;