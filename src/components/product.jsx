import "./product.css"
import QuantityPicker from './quantityPicker';

const Product = (props)=>{
    return(
        <div className="product">
            <img src={props.data.image} alt="Product"/>
            {/* <div className="hoverSpot"></div> */}
            <h5>{props.data.title}</h5>
                <div className="price">
                    <label className="price">${props.data.price}</label>
                    <label className="total">$20,000</label>  
                </div>
            <QuantityPicker/>
            <button className="btn btn-sm btn-primary addCart">Add to Cart</button> 
        </div>
    );
};

export default Product

//test