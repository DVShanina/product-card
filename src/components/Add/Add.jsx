import React from "react";
import "./Add.scss"

export default function Add() {
   
    const AddClick = () => {
             const newCharacterictic = document.getElementById("add").value;
             const num = Number(newCharacterictic)
            if (newCharacterictic === "") {
                return alert ('Поле не заполнено')
            }
            }

    return (
        <section className="add">
            <h3 className="add__h3">Добавить характеристику</h3>
            <form className="add__form">
                <input 
                className="add__input" 
                placeholder="Алюминиевый сплав"
                id="add"
                >
                </input>
                <button 
                className="add__button"
                onClick={AddClick}
                >
                Добавить</button>
            </form>
        </section>
    )
}