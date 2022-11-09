import React from "react";
import products from "../components/product.json"
import { useParams } from "react-router-dom";
import "./product.scss";
import Add from "../components/Add/Add"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function ProductPage() {
      const {id} = useParams();
      const product = products.find(item => item.id == id);
 return (
        <> 
            <Header/>
            <section className="main">
                   <section className="main__content" key={product.id}>
                    <div className="main__box">
                        <img className="main__img" src={product.img}></img>
                    </div>
                    <div className="main__description">
                        <h1 className="main__h1">
                            {product.name}
                        </h1>
                        <p className="main__p">
                            {product.description1}
                        </p>
                        <p className="main__p">
                            {product.description2}
                        </p>
                    </div>
                </section>
                    <div className="main__characteristics">
                        <h3 className="main__h3">Характеристики</h3>
                        <ol className="main__ol">
                            <li className="main__li">{product.characteristic1}</li>
                            <li className="main__li">{product.characteristic2}</li>
                            <li className="main__li">{product.characteristic3}</li>
                            <li className="main__li">{product.characteristic4}</li>
                        </ol>
                     </div>
            <Add/>  
            <Footer/>      
          </section>        
        </>
    )
}