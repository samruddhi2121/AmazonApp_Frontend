import React from "react";
import "./Deals.css";

const Deals1 = (prodlist) => {
  const renderList = ({ prodlist }) => {
    if (prodlist) {
      return prodlist.map((data) => {
        //map() function iteratively executes once for each record, in the json data
        return (
          <div className="main">
          <div key={data.id}>
            
              <div className="Deal-section">
                <div className="boxes">
                  <div className="boxes-content">
                    <h3 className="name">{data.name}</h3>

                    <div className="boxes-img">
                      <img src={data.image} alt="" />
                      <h3>Price:{data.price}</h3>
                    </div>

                    <p>
                      <a href="See more">See more</a>
                    </p>
                  </div>
                </div>
              </div>
           
          </div>
          </div>
        );
      });
    }
  };

  return <div className="main">{renderList(prodlist)}</div>;
};

export default Deals1;
