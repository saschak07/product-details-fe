import React from 'react'
import './ProductCard.css'
const ProductCard = (props) => {
return (
    <div className = "product-card">
        <div className="w3-card-4 product-img">
            <img src= {props.img}
            alt="Alps" className="product-details"/>
            <div className="w3-container w3-center">
                <p>{props.name}</p>
            </div>
        </div>
     </div>    
    )
}

export default ProductCard