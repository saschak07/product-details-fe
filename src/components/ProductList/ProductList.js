import React,{useEffect,useState} from 'react'
import ProductRow from '../ProductRow/ProductRow'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'
import ReactPaginate from 'react-paginate';
import './ProductList.css'

/**
 * Functional component to load all products from the 
 * backend, shoot queries to the backend based on the input filters
 * @param {*} props 
 * @returns 
 */
const ProductList = (props) => {
    const [productList,setProductList] = useState([])
    const [categories,setCatagories] = useState([])
    const [locations,setLocations] = useState([])
    const [suppliers,setSuppliers] = useState([])
    const perPage = 24
    const [offset,setOffset] = useState(0)
    const [currentPage,setCurrentPage] = useState(0)
    const [query,setQuery] = useState({})
    const [pageCount,setPageCount] = useState(0)


    useEffect(() => {
        loadData()
    },[offset,currentPage,query])

    const loadData = () => {
        axios.get('https://product-details-spock.herokuapp.com/spocket/items',{
            params: query
        })
        .then((res) => {
            console.log(`offset:${offset} & currentPage:${currentPage}`)
            const paginatedProducts = res.data.slice(offset,offset+perPage)
            setProductList(paginatedProducts)
            setPageCount(res.data.length/perPage)
            loadFilterOptions(res.data)
        })
        .catch(error => console.log(error))
    }
    /**
     * Loading filter options dynamically from the 
     * backend response, gets updated every time the states are updated
     * @param {*} products 
     */
    const loadFilterOptions = (products) => {
        const catagoryList = new Set(products.map(data => data.category_name))
        setCatagories(catagoryList)
        const locationList = new Set(products.map(data => data.country_origin))
        setLocations(locationList)
        const supplierList = new Set(products.map(data => data.supplier_name))
        setSuppliers(supplierList)
    }
    const handlePageClick = (e) => {
        console.log(`handleClick input:${e.selected}`)
        const selectedPage = e.selected;
        const offset = selectedPage * perPage;

        setOffset(offset)
        setCurrentPage(selectedPage)
    }

    const handleSelectFileters = (filterType,value) => {
        let newQuery = {...query}
        if(filterType in newQuery && newQuery[filterType]===value){
            delete newQuery[filterType]
            setQuery(newQuery)
            return
        }
        if(filterType==='premium' && !value){
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
    const handleClearSearch = () =>{
        window.location.reload()
    }
    const productRowList = []
    let count = 0
    while (count+4 <= productList.length){
        productRowList.push(productList.slice(count,count+4))
        count+=4
    }
    if(count<productList.length){
        productList.push(productList.slice(productList.length-count,
            productList.length))
    }
    const rowData = productRowList.map(element =>{
        return(<ProductRow key={productRowList.indexOf(element)}
        row = {element}
        />)
    } )
    const showClearSearch = Object.keys(query).length!==0?
    <span className="navbar-fonts">
    <button className="w3-bar-item w3-button w3-purple search-style"
    onClick={event=>handleClearSearch()}
    > clear search X</button>
    </span>    
    :null
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
        <div className="w3-cell-row row-container">
        <div className="w3-cell w3-container col-container w3-center">
        <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
                    </div> 
                    <div className="w3-cell w3-container col-container w3-center">
        {showClearSearch}
        </div>
        </div>
        </div>       
        <div className="product-content">
            {rowData}
         </div>
    </div>)

}

export default ProductList
