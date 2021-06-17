import React,{useEffect,useState} from 'react'
import ProductRow from '../ProductRow/ProductRow'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'

const ProductList = (props) => {
    const [productList,setProductList] = useState([])
    const [categories,setCatagories] = useState([])
    const [locations,setLocations] = useState([])
    const [suppliers,setSuppliers] = useState([])

    useEffect(() => {
        LoadData()
    },[])

    const LoadData = () => {
        axios.get('http://localhost:9000/spocket/items')
        .then((res) => {
            setProductList(res.data)
            loadFilterOptions(res.data)
        })
        .catch(error => console.log(error))
    }
    const loadFilterOptions = (products) => {
        const catagoryList = new Set(products.map(data => data.category_name))
        setCatagories(catagoryList)
        const locationList = new Set(products.map(data => data.country_origin))
        setLocations(locationList)
        const supplierList = new Set(products.map(data => data.supplier_name))
        setSuppliers(supplierList)
    }


    const productRowList = []
    let count = 0
    while (count+3 <= productList.length){
        productRowList.push(productList.slice(count,count+3))
        count+=3
    }
    console.log(productRowList);
    const rowData = productRowList.map(element =>{
        return(<ProductRow key={productRowList.indexOf(element)}
        row = {element}
        />)
    } )
    return(<div>
        <Navbar categories ={categories}
                suppliers = {suppliers}
                locations = {locations} />

        {rowData}
    </div>)

}

export default ProductList