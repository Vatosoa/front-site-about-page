import React from 'react';
import Img from '../../assets/barre-bg.png';

function Barre() {
    return (
        <div>
            <img className="img" src={Img} style={{position:"relative", left:"45rem", width:"6.5rem", height:"100px", top:"-20px"}} />

        </div>
    )
}

export default Barre