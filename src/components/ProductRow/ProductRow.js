import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './ProductRow.css'

const ProductRow = (props) => {

const productRow = props.row.map(data => {
    return(data._id?<div className="w3-cell w3-container col-container w3-center">
        <ProductCard key={data._id}
            img = {data.image_cover_url}
            name = {data.title}
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