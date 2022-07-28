import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card"
import { sendText } from "../../actions";

import "./Home.css"

function Home() {

    const dispatch = useDispatch();
    const currentResult = useSelector((state) => state.results)
    const previousResult1 = useSelector((state) => state.previousResult1)
    const previousResult2 = useSelector((state) => state.previousResult2)

    const [input, setInput] = useState("")

    function handleClick(e) {
        e.preventDefault()
        dispatch(sendText(input));
        setInput("")
        console.log(currentResult)
    }

    function handleChange(e) {
        e.preventDefault();
        setInput(e.target.value.toLowerCase());
    }

    return (
        <div className="homeContainer">
            <div className="interfaceContainer">
                <h2>Facundo Mazzei</h2>
                <div className="inputContainer">
                    <input value={input} onChange={(e) => handleChange(e)} id="invertInput" className="input" placeholder="Type something to invert it!"></input>
                    <button id="invertButton" onClick={(e) => handleClick(e)} className="searchButton">Invert text</button>
                </div>
            </div>

            <div className="homeCardsContainer">

                <Card invertedText={currentResult.text} palindrome={currentResult.palindrome} oldText={currentResult.oldText}/> 

                <Card invertedText={previousResult1.text} palindrome={previousResult1.palindrome} oldText={previousResult1.oldText}/> 

                <Card invertedText={previousResult2.text} palindrome={previousResult2.palindrome} oldText={previousResult2.oldText}/> 

            </div>
        </div>
    )
}

export default Home;