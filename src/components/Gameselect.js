import React from "react";
import '../style/Gameselect.css'
import { Link } from "react-router-dom";

function Gameselect() {

    return (
        <section className="Gameselect">
            <h2>Game Station</h2>
            <button className="SelectButton btn"><Link to="/match">TechMatch</Link>
            </button>
            <button className="SelectButton btn"><Link to="/snake">Snake</Link>
            </button>
            <button className="SelectButton btn"><Link to="/uno">Uno</Link>
            </button>
            <button className="SelectButton btn"><Link to="/flappyBird">Flappy Bird</Link>
            </button>
            <button className="SelectButton btn"><Link to="/dino">Dino Run</Link>
            </button>
        </section>
    )
}

export default Gameselect;