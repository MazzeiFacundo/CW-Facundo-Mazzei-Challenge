import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cards.css"
import Card from "../Card/Card";
import { fetchAllResults } from "../../app/slices/results";

function Cards() {

    const { results } = useSelector(state => state.results)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllResults("Hola"));
    }, [])


    return (
        <div className="cardsContainer">
            <div>
            {
                results.map((e, index) => {
                    <Card text={e.text} key={index}/>
                })
            }
            </div>
        </div>
    )
}

export default Cards;