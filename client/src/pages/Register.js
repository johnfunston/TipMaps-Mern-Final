import React from 'react'
import { useState, useEffect } from 'react'
import { Logo, FormRow, Alert } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
import { useAppContext } from '../context/appContext'
import { ImageBackground } from '../components'
import img from '../assets/images/registration-background.jpg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: false,
}


const Register = () => {
    const [values, setValues] = useState(initialState)
    const { user } = useAppContext()
    const navigate = useNavigate()

    const { isLoading, showAlert, displayAlert, registerUser } = useAppContext()
    const toggleMember = () => {
        setValues({...values, isMember: !values.isMember})
    }

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const {name, email, password, isMember} = values
        if(!email || !password || (!isMember && !name)) {
            displayAlert()
            return
        }
        const currentUser = {name, email, password}
        if(isMember) {
            console.log('Already a memeber')
        } else {
            registerUser(currentUser)
        }
    }

    useEffect(() => {
        if(user) {
            setTimeout(() => {
            navigate('/')
        }, 3000)
    }
    }, [user, navigate])

  return (
    <Wrapper className="full-page">
        <ImageBackground img={img}/>
        <form className="form" onSubmit={onSubmit}>
            <Logo/>
            <h3>{values.isMember ? 'Login to' : 'Register for'} TipMaps</h3>
            
            {showAlert && <Alert/>}
            {!values.isMember && (
            <FormRow 
            type='text' 
            name='name' 
            value={values.name} 
            handleChange={handleChange}/>
            )}
            <FormRow 
            type='email' 
            name='email' 
            value={values.email} 
            handleChange={handleChange}/>
            <FormRow 
            type='password'
            name='password' 
            value={values.password} 
            handleChange={handleChange}/>
            <button type='submit' className='btn btn-block' disabled={isLoading}>Submit</button>
            <p>
                {values.isMember ? 'Not a member yet?' : 'Already a member?'}
                <button type="button" onClick={toggleMember} className='member-btn' >{values.isMember ? 'Register' : 'Login'}</button>
            </p>
        </form>
    </Wrapper>
  )
}

export default Register