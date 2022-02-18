import { getValue } from "@testing-library/user-event/dist/utils";
import "./product.css"
import QuantityPicker from './quantityPicker';
import { useState } from "react";

const Product = (props)=>{

    let [quantity,setQuantity]=useState(1);
        
    


    const onQuantityChange = (value)=>{
        console.log("QNTY Change to: ", value);
        setQuantity(value);
    };

    const getTotal = ()=>{
        let total = quantity * props.data.price;
        return "$" + total.toFixed(2)
    }
    return(
        <div className="product">
            <img className="product-img" src={props.data.image} alt="Product"/>
            {/* <div className="hoverSpot"></div> */}
            <h5>{props.data.title}</h5>
                <div className="price">
                    <label className="price">${props.data.price.toFixed(2)}</label>
                    <label className="total">{getTotal()}</label>  
                </div>
            <QuantityPicker  onChange={onQuantityChange} />
            <button className="btn btn-sm btn-primary addCart">Add to Cart</button> 
        </div>
    );
};

export default Product

//test for git