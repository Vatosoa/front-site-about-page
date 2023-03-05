import React,{Suspense} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"

import Fallback from './service/Fallback';
//import Login from './component/login/Login';
import "./service/AdminRegister.css";
//import Rsgister from './service/Rsgister';


//import { useStateValue } from './service/StateProvider'
const Footer = React.lazy(()=>import('./component/footer/Footer'));
const Header = React.lazy(()=>import('./component/header/Header'));
const Home = React.lazy(()=>import('./component/home/Home'));
// const SearchPage = React.lazy(()=>import('./component/search/searchPage/SearchPage'));
// const Profile = React.lazy(()=>import('./component/profile/Profile'));
// const Bookings = React.lazy(()=>import('./component/bookings/Bookings'));
// const Edituser = React.lazy(()=>import('./service/Edituser'));
// const Order = React.lazy(()=>import('./component/order/Order'));


function App() {
//  const [{isAuth}, dispatch] = useStateValue();




  return (
    <div className="app">

   
      <Router>
        <Switch>
        <Suspense fallback={<Fallback />} >
        <Route path="/">
            <Home />
        </Route>  
{/* 
        <Route path="/activity" element={<Activity />}>
          <div>
            <Activity />
          </div>  
        </Route>
        <Route path="/project" element={<Project />}>
          <div>
            <Project />
          </div>
        </Route>
        <Route path="/about" element={<About />}>
          <div>
            <About />
          </div>
        </Route>
        <Route path="/contact" element={<Contact />}>
          <div>
            <Contact />  
          </div>  
        </Route>  */}
        <Route path="/fallback" element={<Fallback />}>
          <div><Fallback /></div>
          </Route>     
      
{/*             

              <Route path="/search/:startdate/:enddate/:persons">   
                <div>
                  <Header /> <SearchPage /> <Footer />
                </div> 
              </Route>

              <Route path="/edituser">     
                {isAuth ? ( 
                  <div>
                    <Header /> <Edituser /> <Footer />
                  </div>) : ( <Redirect to="login" />) 
                }
              </Route>

              <Route path="/login">
                <Login />
              </Route>

              <Route path="/user_register">
                <Rsgister />
              </Route>
              <Route path="/profile">
                {isAuth ? ( <div><Header />
              <Profile />      
              <Footer />
              </div>) : ( <Redirect to="login" />) }
              </Route>
              <Route path="/bookings">{isAuth ? ( <div>
                <Header /><Bookings />       
                <Footer /></div>) : ( <Redirect to="login" />) }</Route>
              <Route path="/checkout" ><Header />       <Order />      <Footer /></Route>
              <Route path="/" exact><Header />       <Home />      <Footer /></Route>
        
     */}
       </Suspense> 

        </Switch> 
    </Router>
    

    </div>
  );
}

export default App;
