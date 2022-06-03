import React from "react";
import '../style/PageContainer.css'
import CharacterSelect from "./CharacterSelect";
import Game from "./Game";
import Score from "./Score";
import Gameover from "./Gameover";
import Gameselect from "./Gameselect";

function PageContainer() {

    const gameState = 'new'

    if (gameState === 'new') {
        return (
            <section className="PageContainer">
                <Gameselect />
                <div className="Menu">
                    <Score />
                    <CharacterSelect />
                </div>
            </section>
        )

    }

    else if (gameState === 'over') {
        return (
            <section className="PageContainer">
                <Gameover />
                <div className="Menu">
                    <Score />
                    <CharacterSelect />
                </div>
            </section>
        )

    } else {   
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

}

export default PageContainer;