import React from "react";
import '../style/PageContainer.css'
import CharacterSelect from "./CharacterSelect";
import Game from "./Game";
import Score from "./Score";
import Gameover from "./Gameover";

function PageContainer() {

    const gameRunning = 'over'

    if (gameRunning === 'over') {
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