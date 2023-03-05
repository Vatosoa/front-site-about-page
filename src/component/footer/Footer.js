import { Button } from '@material-ui/core'
import React from 'react';
import './Footer.css'
import { FaHome, FaPhone, FaMailBulk,FaLinkedin, FaFacebook, FaInstagram, FaWordpressSimple } from 'react-icons/fa';
import { HiOutlineGlobeAlt } from 'react-icons/hi';

function Footer() {
    return (
        // <div className='footer'>
        //     <p>© 2020 Airbnb clone! No rights reserved - this is a demo!</p>
        //     <p>Privacy · Terms · Sitemap · Company Details</p>
        // </div>
        <div className='footer'>
        <div className="footer-container">
          

        <div className="A" style={{position:"relative",left:"5rem",marginLeft:"",display:"grid",gridTemplateColumns:"1fr 1fr 1fr", textAlign:"left",width:"900px",top:"4rem" }}>
          <div className="location">
            <h4 style={{position: "relative",bottom:"4rem",left: "5rem",textAlign:"center",width:"300px", margin:"0px",padding:"0px",}}>Notre adresse</h4>            
            <h4>
            <FaHome size={50} style={{ color: "#fff", left:"1px", top:"10px", position:"absolute"}} />
            <p style={{position:"relative", right:"6rem"}}>NH Center, 2ème Etage face de Soratel Fianarantsoa,<br/> Madagascar</p> </h4>
            
          </div>

          <div className="phone">
            <h4 style={{position: "relative",bottom:"4rem",right: "2rem",textAlign:"center",width:"300px", margin:"0px",padding:"0px",}}>Appelez nous</h4>            
            <h4>
              <FaPhone
                size={35}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <p style={{position:"relative", bottom:"2rem", left:"4rem"}}>032 03 987 95</p>
            </h4>
          </div>

          <div className="email">
            <h4 style={{position: "relative",bottom:"4rem",right: "2rem",textAlign:"center",width:"300px", margin:"0px",padding:"0px",}}>Envoyez nous un email</h4>            
            <h4>
              <FaMailBulk
                size={40}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <p style={{position:"relative", bottom:"2rem", left:"4rem"}}>contact@ndaohifanosika.org</p>
            </h4>
          </div>
        </div>

          <div className="social" style={{position:"relative",left:"13rem",marginLeft:"",display:"grid",gridTemplateColumns:"2fr", textAlign:"left",width:"250px",top:"3rem" }}>
            <h4 style={{position: "relative",bottom:"4rem",right: "4rem",textAlign:"center",width:"300px", margin:"0px",padding:"0px",}}>Suivez nous</h4>            
            <FaFacebook
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            /> <p style={{position:"relative",left:"2rem", bottom:"1rem"}}>ONG Ndao Hifanosika</p>
            <FaLinkedin
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            /> <p style={{position:"relative",left:"2rem", bottom:"1rem"}}>ONG Ndao Hifanosika</p>

            <FaInstagram
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
          /> <p style={{position:"relative",left:"2rem", bottom:"1rem"}}>ONG Ndao Hifanosika</p>
          </div>
        </div>
        <hr style={{borderBlock:"1px solid rgb(96, 94, 94)", width:"90%", marginLeft:"4rem", position:"relative", top:"5rem"}}/>
        <div>
            <p style={{position:"relative", width:"500px", left:"8rem", top:"5rem"}}>© 2023. all rights reserved by developer ong ndao hifanosika fianara.</p>
        </div>

        <div className='buttom'>                          
            <Button className='buttom-right' style={{left:"80rem", top:"3rem", backgroundColor:"rgb(124, 122, 122)", color:"white"}}>English<p className='vl'></p> <HiOutlineGlobeAlt/> </Button>
        </div>

      </div>

    )
}

// export default React.memo(Footer);
export default Footer;