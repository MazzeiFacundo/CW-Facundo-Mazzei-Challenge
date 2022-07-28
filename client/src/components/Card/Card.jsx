import React from "react";
import "./Card.css"

function Card({ invertedText, palindrome, oldText }) {
    if(invertedText) {
        return (
            <div className="cardContainer">
                <h3>
                {palindrome === true ? `${oldText} invertido es: ${invertedText} y es un palindromo`:
                 `${oldText} invertido es: ${invertedText} y no es un palindromo`}</h3>
            </div>
        );
    } else {
        return (
            <div className="cardContainer">
                <h3>Escribe una palabra para invertirla!</h3>
            </div>
        );
    }
    
}

export default Card;