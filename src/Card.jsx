import React from "react";
import './App.css'

function Card ( props){
    return (
        <div className="card">
            <h4> { props.titulo} </h4>
            <hr />
            <p> { props.sinopsis }</p>
        </div>
    )
}

export default Card;