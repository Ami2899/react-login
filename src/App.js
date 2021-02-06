import React, { useEffect, useState } from "react";
import './App.css';
import {useSpring, animated} from 'react-spring';
import react from "react";

function App() {
  const [registrationFormStatus,setRegistrationFormStatus] = useState(false);
  const loginProps=useSpring({
    left:registrationFormStatus ? -500 : 0,
  })

  const registerProps=useSpring({
    left:registrationFormStatus ? 0 : 500,
  })

  const loginBtnProps=useSpring({
    borderBottom:registrationFormStatus ? 'solid 0px transparent' : 'solid 2px #8A2BE2'
  })

  const registerBtnProps=useSpring({
    borderBottom:registrationFormStatus ? 'solid 2px #8A2BE2' : 'solid 0px transparent'
  })

  function registerClicked(){setRegistrationFormStatus(true)}
  function loginClicked(){setRegistrationFormStatus(false)}
 
  return (
    <div className="login-register-wrapper">
      <div className="nav-buttons">
        <animated.button onClick={loginClicked} id="loginBtn" style={loginBtnProps}>Login</animated.button>
        <animated.button onClick={registerClicked} id="registerBtn" style={registerBtnProps}>Register</animated.button>
      </div>
      <div className="form-group">
        <animated.form action='' id='loginform' style={loginProps}> <LoginForm/> </animated.form>
        <animated.form action='' id='registerform' style={registerProps}> <RegistrationForm/></animated.form>
      </div>
      <animated.div className="forgot-panel" style={loginProps}><a href="#">Forgot password</a></animated.div>
    </div>
  );
}
function LoginForm() { 
  return(
    <react.Fragment>
      <label for='username'>User Name</label>
      <input type='text' id='username'/>
      <label for='password'>Password</label>
      <input type='password' id='password'/>
      <input type='submit' value='submit' className='submit'/>
    </react.Fragment>
  )
}
function RegistrationForm() {
   return(
     <react.Fragment>
       <label for="fullname">Full Name</label>
       <input type='text' id="fullname"/>
       <label for="email">Email</label>
       <input type='text' id="email"/>
       <label for="password">Password</label>
       <input type='password' id="password"/>
       <label for="Confirmpassword">Confirm Password</label>
       <input type='password' id="Confirmpassword"/>
       <input type='submit' value='submit' className='submit'/>
     </react.Fragment>
   )
  }
export default App;
