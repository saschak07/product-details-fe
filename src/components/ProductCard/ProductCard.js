import React from 'react'
import './ProductCard.css'
import getFlag from '../util/CountryFlag'
const ProductCard = (props) => {
return (
    <div className = "product-card">
        <div className="w3-card-4 product-img">
            <img src= {props.img}
            alt="Alps" className="product-details"/>
            <div className="w3-container w3-center">
                <span className="product-text">
                <p>{props.name.slice(0,21)}</p>
                <p>By <span className="supplier-name">{props.supplier_name} 
                <span className="flag-margin">{getFlag(props.country_origin)}</span>
                 </span></p>
                    <p className='price'>Price (usd): {props.formatted_price}</p>
                    <p className='retail-price'>Retail Price (usd): {props.formatted_msrp}</p>
                </span>
            </div>
        </div>
     </div>    
    )
}

export default ProductCard