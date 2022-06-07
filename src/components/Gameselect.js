import React from "react";
import '../style/Gameselect.css'
import { Link } from "react-router-dom";

function Gameselect() {

    return (
        <section className="Gameselect">
            <h2>Game Station</h2>
            <button className="SelectButton"><Link to="/match" className='link'><span>TechMatch</span></Link><i></i>
            </button>
            <button className="SelectButton"><Link to="/snake" className='link'><span>Snake</span></Link><i></i>
            </button>
            <button className="SelectButton"><Link to="/uno" className='link'><span>Uno</span></Link><i></i>
            </button>
            <button className="SelectButton"><Link to="/flappy" className='link'><span>Flappy Bird</span></Link><i></i>
            </button>
            <button className="SelectButton"><Link to="/dino" className='link'><span>Dino MoonJump</span></Link><i></i>
            </button>
        </section>
    )
}

export default Gameselect;