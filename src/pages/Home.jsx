import React from "react";
import { Link } from "react-router-dom";
import "./product.scss";

export default function Home() {
    return (
    <h3 className="home">
       <Link to="/1">Товары » </Link> 
        </h3>
    )
}