import React from "react";
import { Link } from "react-router-dom";
import product from "../product.json"
import "./Header.scss"

export default function Header() {

    return (
        <>
        <header className="header" >
    {product.map((product) => (
        <Link to={`/${product.id}`}> 
            <button className="header__button" key={product.id}>
            {product.button} 
            </button>
         </Link>  
    ))}
       </header> 
       </>
    )
}