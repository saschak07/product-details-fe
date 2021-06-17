import React from 'react'
import './Navbar.css'
const Navbar = (props) => {
    const categories = Array.from(props.categories).map(data => {
        return(<i key={Array.from(props.categories).indexOf(data)} 
        className="w3-bar-item w3-button"> <input type="checkbox"/>{data}</i>)
    })
    const suppliers = Array.from(props.suppliers).map(data => {
        return(<i key={Array.from(props.suppliers).indexOf(data)} 
        className="w3-bar-item w3-button"> <input type="checkbox"/>{data}</i>)
    })
    const locations = Array.from(props.locations).map(data => {
        return(<i key={Array.from(props.locations).indexOf(data)} 
        className="w3-bar-item w3-button"> <input type="checkbox"/>{data}</i>)
    })
    return (
        <div className="w3-bar w3-white">
        <span className="navbar-fonts">
        <input type="text" className="w3-bar-item w3-input" placeholder="Enter search keyword"/>
        <i className="w3-bar-item fa fa-search"></i>
        <div className="w3-dropdown-hover">
            <button className="w3-button">Select category <i className="arrow down"></i></button>
            <div className=" w3-dropdown-content drop-downContent w3-bar-block w3-card-4">
                {categories}
            </div>
        </div>
        <div className="w3-dropdown-hover">
            <button className="w3-button">Price filter <i className="arrow down"></i></button>
            <div className=" w3-dropdown-content drop-downContent w3-bar-block w3-card-4">
                <i className="w3-bar-item w3-button"> <input type="checkbox"/> Link 1</i>
                <i className="w3-bar-item w3-button"> <input type="checkbox"/> Link 2</i>
                <i className="w3-bar-item w3-button"> <input type="checkbox"/> Link 3</i>
            </div>
        </div>
        <div className="w3-dropdown-hover">
            <button className="w3-button">Select by location <i className="arrow down"></i></button>
            <div className=" w3-dropdown-content drop-downContent w3-bar-block w3-card-4">
                {locations}
            </div>
        </div>
        <div className="w3-dropdown-hover">
            <button className="w3-button">Select supplier <i className="arrow down"></i></button>
            <div className=" w3-dropdown-content drop-downContent w3-bar-block w3-card-4">
                {suppliers}
            </div>
        </div>
        <i className="w3-bar-item"><input type="checkbox"/> Premium products </i>
        <a href="/" className="w3-bar-item w3-button w3-purple">Search</a>
        </span>
      </div> 
    )
}

export default Navbar