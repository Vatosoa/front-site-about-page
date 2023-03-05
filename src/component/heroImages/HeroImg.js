import "./HeroImg.css";
import React, { Component } from "react";

import IntroImg from "../../assets/intro-bg.jpg";
import { Link } from "react-router-dom";
import Barre from "../../assets/barre-bg.png"

export class HeroImg extends Component {
  render() {
    return(
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt='Hero Image' />
      </div>

      <div className="content">
        {/* <p>HI, I'M A FREELANCER.</p> */}
        {/* <h1 style={{position: "relative",color:"white", top:"8rem"}}>UNE JEUNESSE ACTIVE ET RENTABLE CONTRIBUANT <br/>AU DEVELOPPEMENT ECONOMIQUE DE SA REGION <br/>ET DE SON PAYS</h1> */}
        <h1 style={{position: "relative",color:"white", top:"3rem", textAlign:"center", fontSize:"40px", left:"20rem"}}>A PROPOS DE NOUS</h1> 
  {/*         <Link to="/" className="btn btn-blue" style={{position: "relative", top: "9rem", textDecoration:"none"}}>
            DECOUVRIR PLUS
          </Link>
        </div> */}

        <br/><br/>
                <image src={Barre}></image>
      </div>
    </div>
    )
  };
};

