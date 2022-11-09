import React from "react";
import {BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";


export default function RoutesPage() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/:id' element={<ProductPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}