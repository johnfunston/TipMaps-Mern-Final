import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/images/404-image2.svg';
import Wrapper from '../assets/wrappers/ErrorPage'


const Error = () => {
  return (
    <Wrapper className='full-page'>
        <div>
            <img src={img} alt='not found' className='not-found-image'/>
            <h3>Oops! Page not found!</h3>
            <p>We can't seem to find the page you are looking for, or it does not exist.</p>
            <Link to='/'>Back home</Link>
        </div>
    </Wrapper>
  )
}

export default Error