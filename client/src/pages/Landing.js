import React from 'react';
import { Logo } from '../components'
import landingDecal from '../assets/images/landing-graphic.png';
import Wrapper from '../assets/wrappers/LandingPage'
import { Link } from 'react-router-dom'

const Landing = () => {
  return <Wrapper>
    <nav>
      <Logo/>
    </nav>
    <div className="container page">
      <div className="info">
        <h1>
          Welcome <span>to</span> TipMaps
        </h1>
        <p className="">Take control of your finances and your future. When your living depends on customer gratuities, it can be hard to keep track of your income and expenses. Let us handle that for you. 
         </p>
         <Link to="/register" className="btn btn-hero">Login/Register</Link>
      </div>
      <img src={landingDecal} alt="job" className="img main-img"/>
    </div>
 </Wrapper>
  
}

export default Landing