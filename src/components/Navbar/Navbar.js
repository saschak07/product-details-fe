import React,{useState} from 'react'
import './Navbar.css'
const Navbar = (props) => {
    const [catagory,setCatagory] = useState(null)
    const [location,setLocation] = useState(null)
    const [supplier,setSupplier] = useState(null)
    const [keyword,setKeyword] = useState(null)
    const [priceFiler,setPriceFilter] = useState(null)
    const [isPremium,setIsPremium] = useState(false)

    const handleSelection = (type,value) => {
        switch(type){
            case 'category_name': 
                setCatagory(value)
                break
            case 'country_origin': 
                setLocation(value)
                break
            case 'supplier_name': 
                setSupplier(value)
                break
            case 'price':
                setPriceFilter(value)
                break
            case 'premium':
                setIsPremium(value)
                break
            default:
                break
        }
            props.selectFilteres(type,value)
    }

    const handleKeyWordEnter = (value) =>{
        setKeyword(value)
    }
    const handleSearch = () => {
        if(keyword){
            props.selectFilteres('title',keyword)
        }
        else{
            alert('Enter a search key word')
        }
    }

    const categories = Array.from(props.categories).map(data => {
        return(<i key={Array.from(props.categories).indexOf(data)} 
        className="w3-bar-item w3-button"> <input type="radio"
        //onChange={event=>props.selectFilteres("category_name",data)}
        checked={catagory===data}
        value ={data}
        name = {data}
        />{data}</i>)
    })
    const suppliers = Array.from(props.suppliers).map(data => {
        return(<i key={Array.from(props.suppliers).indexOf(data)} 
        className="w3-bar-item w3-button"> <input type="radio"
        //onClick={event=>props.selectFilteres("supplier_name",data)}
        checked = {supplier===data}
        value ={data}
        name = {data}
        />{data}</i>)
    })
    const locations = Array.from(props.locations).map(data => {
        return(<i key={Array.from(props.locations).indexOf(data)} 
        className="w3-bar-item w3-button"> <input type="radio"
        //onClick={event=>props.selectFilteres("country_origin",data)}
        checked = {location===data}
        value ={data}
        name = {data}
        />{data}</i>)
    })
    return (
        <div className="w3-bar w3-white">
        <span className="navbar-fonts">
        <input type="text" className="w3-bar-item w3-input" placeholder="Enter search keyword"
        onChange={event=>handleKeyWordEnter(event.target.value)}
        />
        <i className="w3-bar-item fa fa-search"></i>
        <div className="w3-dropdown-hover">
            <button className="w3-button">Select category <i className="arrow down"></i></button>
            <div className=" w3-dropdown-content drop-downContent w3-bar-block w3-card-4"
            onChange={event=>handleSelection("category_name",event.target.value)}>
                {categories}
            </div>
        </div>
        <div className="w3-dropdown-hover">
            <button className="w3-button">Price filter <i className="arrow down"></i></button>
            <div className=" w3-dropdown-content drop-downContent w3-bar-block w3-card-4"
            onChange={event=>handleSelection("price",event.target.value)}>
                <i className="w3-bar-item w3-button"> 
                <input type="radio" checked={priceFiler==='max'}
                            value ='max'
                            name = 'max'/>max</i>
                <i className="w3-bar-item w3-button"> 
                <input type="radio" checked={priceFiler==='min'}
                            value ='min'
                            name = 'min'/>min</i>
            </div>
        </div>
        <div className="w3-dropdown-hover">
            <button className="w3-button">Ship From location <i className="arrow down"></i></button>
            <div className=" w3-dropdown-content drop-downContent w3-bar-block w3-card-4"
            onChange={event=>handleSelection("country_origin",event.target.value)}>
                {locations}
            </div>
        </div>
        <div className="w3-dropdown-hover">
            <button className="w3-button">Select supplier <i className="arrow down"></i></button>
            <div className=" w3-dropdown-content drop-downContent w3-bar-block w3-card-4"
            onChange={event=>handleSelection("supplier_name",event.target.value)}>
                {suppliers}
            </div>
        </div>
        <i className="w3-bar-item"><input type="checkbox"
        onChange={event=>handleSelection('premium',!isPremium)}
        /> Premium products </i>
        <button className="w3-bar-item w3-button w3-purple"
        onClick={event=>handleSearch()}
        >Search</button>
        </span>
      </div> 
    )
}

export default Navbar