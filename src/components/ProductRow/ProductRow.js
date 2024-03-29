import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './ProductRow.css'
/**
 * Functional component to enable each product rows
 * 
 * @param {*} props 
 * @returns 
 */
const ProductRow = (props) => {

const productRow = props.row.map(data => {
    return(data._id?<div className="w3-cell w3-container col-container w3-center">
        <ProductCard key={data._id}
            img = {data.image_cover_url}
            name = {data.title}
            supplier_name = {data.supplier_name}
            country_origin = {data.country_origin}
            formatted_msrp = {data.formatted_msrp}
            formatted_price = {data.formatted_price}
            premium = {data.premium}
        />
    </div>:null)
})

return(
    <div className="w3-cell-row row-container">
        {productRow}
    </div>
)

}

export default ProductRow