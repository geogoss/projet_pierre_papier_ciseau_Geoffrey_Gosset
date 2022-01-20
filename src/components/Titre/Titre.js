import "./Titre.css"
import React from 'react'

export default function Titre(props) {
    return (
        <div onClick={props.reset} className="titreContainer">
            <div className="ppc">
                <p>ROCK</p>
                <p>PAPER</p>
                <p>SCISSOR</p>
            </div>
            <div className="score">
                <p>score</p>
                <p>{props.point}</p>
            </div>
        </div>
    )
}

