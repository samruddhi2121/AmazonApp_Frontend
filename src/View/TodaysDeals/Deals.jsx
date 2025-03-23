import React from "react";



import Data from './Data.json'
import Deals1 from "./Deals1";

class Deals extends React.Component{
    constructor(){
        super()
        this.state={
            title:"Todays Deals",
            details: Data//json file 
        }

        
    }

    render(){
        return(
            <div>
                <h1>{this.state.title}</h1>
                <Deals1 prodlist={this.state.details}/>
                {/* <ProductList prodlist={this.state.details} /> */}
            </div>
        )
    }

}
export default Deals;