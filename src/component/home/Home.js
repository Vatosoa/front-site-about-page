import React from 'react'
//import Banner from '../banner/Banner';
import "./Home.css";
import Card from '../card/Card';
import { HeroImg } from '../heroImages/HeroImg';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Barre from '../barre/barre';
import Nh1 from '../../assets/nh1-bg.jpg';
import Nh2 from '../../assets/nh2-bg.jpg';
import P1 from '../../assets/p1.jpg'
import P2 from '../../assets/p2.jpg';
import P3 from '../../assets/p3.jpg';
import P4 from '../../assets/p4.jpg';
import P5 from '../../assets/p5.jpg'
import P6 from '../../assets/p6.jpg';
import P7 from '../../assets/p7.jpg';
import P8 from '../../assets/p8.jpg';
import P9 from '../../assets/p9.jpg';
import Vision from '../../assets/vision.jpg';
import Mission from '../../assets/mission.jpg';

function Home() {
    return (
        <div className="home">

            <Header />
            <div>
                <HeroImg />
            </div> 
            <br/><br/><br/>
            <div>
                <div style={{color:'rgb(234, 81, 162)', fontSize: "18px", textAlign:"center"}}>
                    ONG
                </div>
                <br/>
                <div style={{color:'#0c669b', fontSize: "22px", textAlign:"center"}}>
                    " NDAO HIFANOSIKA "
                </div>            
                <Barre />
                <br/><br/><br/>
                <div>
                    <p style={{position:"relative",color:"rgb(26, 150, 156)",fontSize:"18px", left:"50rem",width:"200px"}}>
                        QUI SOMMES-NOUS ?
                    </p>
                    <br/>    
                    <p style={{fontSize:"18px",color:"rgb(66, 66, 66)", left:"50rem", position:"relative",width:"550px"}}>
                        Ndao Hifanosika est une ONG des jeunes Fianarois qui a débuté ses activités en Février 2020 et a été légalisée en octobre 2021. Elle œuvre dans la promotion de la jeunesse,
                        de la culture entrepreneuriale ainsi que l’entrepreneuriat pour l’employabilité des jeunes. 
                    </p> 
                    <br/>
                    <p style={{fontSize:"18px",color:"rgb(66, 66, 66)", left:"50rem", position:"relative",width:"550px"}}>
                        Pour objectif : 
                        <br/>
                        - Oeuvrer pour l’atteinte de l’objectif numéro 8 du développement durable : travail décent et croissance économique. <br/>
                        - Créer de l’emploi décent par les jeunes et pour les jeunes dans la province de Fianarantsoa et à Madagascar.<br/>
                        - Limiter voir réduire le taux d’exode des jeunes de la province vers les autres provinces ou même la migration vers un autre pays.<br/>
                        - Développer le local par les efforts de tout un chacun au sein de la province. <br/>
                        - Instaurer la valeur Malagasy le « firaisan-kina ».<br/>
                        - Une jeunesse épanouie et en paix. 
                    </p>
                </div>
                <div style={{position:"relative",bottom:"17rem", right:"2rem"}}>
                    <img className="img" src={Nh1} style={{position:"relative", left:"20rem", width:"450px", height:"450px", bottom:"14rem",borderRadius:"100%"}} /> 
                    <img className="img" src={Nh2} style={{position:"relative", right:"8rem", width:"220px", height:"220px", bottom:"9rem",borderRadius:"100%"}} />            
                </div>

            </div>    


            <div style={{position:"relative", bottom:"22rem", backgroundColor:"#effcfc",height:"550px"}}>
                <br/><br/><br/><br/>
                <div style={{color:'rgb(234, 81, 162)', fontSize: "18px", textAlign:"center"}}>
                    VISIONS
                </div>
                <br/>
                <div style={{color:'#0c669b', fontSize: "22px", textAlign:"center"}}>
                    LES VISIONS DE NDAO HIFANOSIKA
                </div>
                <Barre />
                <br/><br/><br/>
                <div>
                    <p style={{position:"relative",color:"rgb(26, 150, 156)",fontSize:"18px", left:"50rem",width:"200px"}}>
                        NOS VISIONS
                    </p>
                    <br/>    
                    <p style={{fontSize:"18px",color:"rgb(66, 66, 66)", left:"50rem", position:"relative",width:"500px"}}>
                        UNE JEUNESSE ACTIVE ET RENTABLE 
                        <br/>CONTRIBUANT AU DEVELOPPEMENT 
                        <br/>ECONOMIQUE DE SA REGION ET DE 
                        <br/>SON PAYS, BASE DU DEVELOPPEMENT
                        <br/> DURABLE. 
                    </p>
                    <img className="img" src={Vision} style={{position:"relative", left:"20rem", width:"25rem", height:"300px", bottom:"14rem",borderRadius:"50px"}} /> 
                </div>
            
            </div>

            
            <div style={{position:"relative", bottom:"22rem",height:"550px"}}>
                <br/><br/><br/><br/>
                <div style={{color:'rgb(234, 81, 162)', fontSize: "18px", textAlign:"center"}}>
                    MISSIONS
                </div>
                <br/>
                <div style={{color:'#0c669b', fontSize: "22px", textAlign:"center"}}>
                    LES MISSIONS DE NDAO HIFANOSIKA
                </div>
                <Barre />
                <br/><br/><br/>
                <div>
                    <p style={{position:"relative",color:"rgb(26, 150, 156)",fontSize:"18px", left:"50rem",width:"200px"}}>NOS MISSIONS</p><br/>    
                    <p style={{fontSize:"18px",color:"rgb(66, 66, 66)", left:"50rem", position:"relative",width:"550px"}}>
                        - Sensibiliser les jeunes à avoir un esprit éveillé à l’exploitation des ressources sur place<br/>
                        - Mobiliser les jeunes à la culture entrepreneuriale et l’entrepreneuriat<br/>
                        - Sensibiliser et former les jeunes à devenir des entrepreneurs<br/>
                        - Accompagner les Start up afin qu’ils puissent devenir des grandes entreprises qui emploient plusieurs jeunes<br/>
                        - Coacher les jeunes à avoir un esprit combattant, patriote mais surtout à adopter la culture de l’excellence<br/>
                        - Renforcer les capacités des jeunes dans le domaine de la nouvelle technologie, un des supports du processus de développement<br/> 
                        - Développer et renforcer le leadership des jeunes. 

                    </p>
                    <img className="img" src={Mission} style={{position:"relative", left:"20rem", width:"25rem", height:"300px", bottom:"19rem"}} /> 
                </div>
            
            </div>


            <div style={{position:"relative", bottom:"22rem", backgroundColor:"#effcfc",height:"", bottom:"13rem"}}>
                <br/><br/><br/><br/>
                <div style={{color:'rgb(234, 81, 162)', fontSize: "18px", textAlign:"center"}}>GALERIES</div>
                <br/>
                <div style={{color:'#0c669b', fontSize: "22px", textAlign:"center"}}>LES PHOTOS DE SOUVENIR</div>
                <Barre />
                <br/><br/><br/>
                <div style={{marginRight:"5rem",marginLeft:"5rem",display:"grid",gridTemplateColumns:"1fr 1fr 1fr"}}>
                    <Card src={P1} />
                    <Card src={P2} />
                    <Card src={P3} />
                </div>
                <div style={{marginRight:"5rem",marginLeft:"5rem",display:"grid",gridTemplateColumns:"1fr 1fr"}}>
                    <Card src={P4} />
                    <Card src={P5} />
                </div>
                <div style={{marginRight:"5rem",marginLeft:"5rem",display:"grid",gridTemplateColumns:"2fr 2fr 2fr 2fr"}}>
                    <Card src={P6} />
                    <Card src={P7} />
                    <Card src={P8} />
                    <Card src={P9} />
                    <br/><br/><br/>
                </div>

            </div>

{/*
   <div>

 <img className='img' src={Img} alt=""/>    */}




{/*  
            {/* <Banner /> */}
            {/* <div className='home_section'>
            <Card
                src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
            />
            </div>
            <div className='home_section'>
            <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="3 Bedroom Flat in Bournemouth"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="£130/night"
            />
            <Card
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Penthouse in London"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="£350/night"
            />
            <Card
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="£70/night"
            /> 
            </div>
*/}
            <Footer />

        </div>
    )
}

//export default React.memo(Home)
export default Home;