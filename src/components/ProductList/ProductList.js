import React,{useEffect,useState} from 'react'
import ProductRow from '../ProductRow/ProductRow'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'
import ReactPaginate from 'react-paginate';
import './ProductList.css'

const ProductList = (props) => {
    const [productList,setProductList] = useState([])
    const [categories,setCatagories] = useState([])
    const [locations,setLocations] = useState([])
    const [suppliers,setSuppliers] = useState([])
    const perPage = 24
    const [offset,setOffset] = useState(0)
    const [currentPage,setCurrentPage] = useState(0)
    const [query,setQuery] = useState({})


    useEffect(() => {
        loadData()
    },[])

    const loadData = () => {
        axios.get('http://localhost:9000/spocket/items',{
            params: query
        })
        .then((res) => {
            const paginatedProducts = res.data.slice(offset,offset+perPage)
            setProductList(paginatedProducts)
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
    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * perPage;

        setOffset(offset)
        setCurrentPage(currentPage)
        loadData()
    }

    const handleSelectFileters = (filterType,value) => {
        console.log(`filter type:${filterType} & value:${value}`)
        let newQuery = {...query}
        if(filterType in newQuery && newQuery[filterType]===value){
            delete newQuery[filterType]
            setQuery(newQuery)
            return
        }
        newQuery[filterType] = value
        setQuery(newQuery)
    }

    const handleSearch = () => {

        loadData()
    }
    //revist this logic
    const productRowList = []
    let count = 0
    while (count+3 <= productList.length){
        productRowList.push(productList.slice(count,count+3))
        count+=3
    }
    if(count<productList.length){
        productList.push(productList.slice(productList.length-count,
            productList.length))
    }
    console.log(productRowList)
    const rowData = productRowList.map(element =>{
        return(<ProductRow key={productRowList.indexOf(element)}
        row = {element}
        />)
    } )
    return(<div>
        <div className="mast-head ">
        <h2>Search for products</h2>
        <Navbar categories ={categories}
                suppliers = {suppliers}
                locations = {locations} 
                selectFilteres = {handleSelectFileters}
                query = {query}
                search = {handleSearch}
                />
        <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={perPage}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/> 
        </div>       
        <div className="product-content">
            {rowData}
         </div>
    </div>)

}

export default ProductList