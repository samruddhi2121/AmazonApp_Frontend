import React from "react";
import './India.css';
const India = () => {
    return (

        <div className="main">
            <div className="container">
                <div className="nav">
                    <h2>Choose your location</h2>
                </div>

                <div className="para">
                    <p>Delivery options and delivery speeds may vary for different locations</p>
                </div>

                <div className="btn">
                    <button>Sign in to see your address</button>
                </div>
                <br />
                <hr />
                <div className="zip"> <p>OR enter  a US zip code</p></div><br />
                <div className="inpt">
                    <input type="text" />
                    <button>Apply</button>
                </div><br />

                <hr />
                <div className="zip"> <p>OR  ship outside the US</p></div><br />

                <div className="choose">
                    <input type="text" placeholder="Choose"list="suggest" />
                    <datalist id="suggest">
                        {/* <option value=""></option> */}
                        <option value="India">India</option>
                        <option value="China">China</option>
                        <option value="Canda">Canda</option>
                        <option value="Pune">Pune</option>
                    </datalist>
                </div>

                <div className="done">
                    <button>Done</button>
                </div>



            </div>

        </div>
    )
}

export default India;