import React from "react";
import '../style/PageContainer.css'
import CharacterSelect from "./CharacterSelect";
import Game from "./Game";
import Score from "./Score";

function PageContainer() {

    return (
        <section className="PageContainer">
            <Game/>
            <div className="Menu">
                <Score/>
                <CharacterSelect/>
            </div>
        </section>
    )
}

export default PageContainer;