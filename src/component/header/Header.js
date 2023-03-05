import React from 'react'
import "./Header.css"
//import { HiUser , HiOutlineShoppingBag} from 'react-icons/hi';

//import { FaHome } from 'react-icons/fa';
import Logo from "../../assets/logo-bg.png";

//import {AiOutlineLogout} from "react-icons/ai"
import SearchIcon from '@material-ui/icons/Search';

import {Link, useHistory} from "react-router-dom"
//import { useStateValue } from '../../service/StateProvider';
//import { actionTypes } from '../../service/reducer'



function Header() {
    // const [{user}, dispatch] = useStateValue();
    const history = useHistory();
    var logout = ()=>{
        localStorage.clear();
        // dispatch({
        //     type:actionTypes.LOGOUT,
        // })
    }

    return (
        <div className="header">
            <Link to="/">
            <img src={Logo} className="header_icon"></img>
            </Link>

            <div className="header_center">
                <div className="item " onClick={()=>{history.push("/fallback")}}>
                  {/* <FaHome style={{fontSize:"16px",color:"grey",marginBottom:"5px"}} /> */}
                  <span className="icon_desc">ACCUEIL</span>
              </div>
              <div className="item" onClick={()=>{history.push("/fallback")}}>
                  {/* <HiUser style={{fontSize:"16px",color:"grey",marginBottom:"5px"}}/> */}
                  <span className="icon_desc" >ACTIVITES</span>
              </div>
              <div className="item" onClick={()=>{history.push("/fallback")}}>
                  {/* <HiOutlineShoppingBag style={{fontSize:"16px",color:"grey",marginBottom:"5px"}} /> */}
                
                  <span className="icon_desc">NOS PROJETS</span>
              </div>
              {/* <div className="item" onClick={()=>{history.push("/about")}}> */}
              <div className='item under' onClick={()=>{history.push('/')}}>
                  {/* <HiOutlineShoppingBag style={{fontSize:"16px",color:"grey",marginBottom:"5px"}} /> */}
                
                  <span className="icon_desc">A PROPOS</span>
              </div>
            <div className="item" onClick={()=>{history.push("/fallback")}}>
                  {/* <HiOutlineShoppingBag style={{fontSize:"16px",color:"grey",marginBottom:"5px"}} /> */}
                
                  <span className="icon_desc">CONTACT</span>
              </div>
               
            </div>


            <div className="header_right">
                <SearchIcon />
                {/* <input type="text"  className="input" placeholder=" Search for best Hotels"/> */}

              <div className="item" >       
          {/*     {user ? <span onClick={logout} className="icon_desc">Deconnecter<AiOutlineLogout style={{fontSize:"20px",color:"black",marginBottom:"2px"}} />  </span> : <Link to="login">Se Connecter<AiOutlineLogout style={{fontSize:"20px",color: "black", marginBottom:"2px"}} /> </Link>} */}
              </div>
            
            </div>
        </div>
    )
}

// export default React.memo(Header)
export default Header;