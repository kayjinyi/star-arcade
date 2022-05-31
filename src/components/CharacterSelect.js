import React from "react";
import '../style/CharacterSelect.css'

function CharacterSelect() {

    return (
        <div className="CharacterSelect">
            <p>Characters</p>
            <div className="button-container">
                <button className="btn">Alpha</button>
                <button className="btn">Beta</button>
                <button className="btn">Gamma</button>
                <button className="btn">Delta</button>
                <button className="btn">Espilon</button>
            </div>
        </div>
    )
}

export default CharacterSelect;