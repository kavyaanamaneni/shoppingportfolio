import React from 'react';
import"./Authentication.css"
import SignUpForm from '../../SignUpForm/SignUpForm';
import SignInForm from '../../SignInForm/SignInForm';

const Authentication = () => {
 

  return (
    <div className='signIn'>
    
    <div className='authentication' >
     
      {/* <button onClick={logGoogleUser}>sign in with google popup</button> */}
      <SignInForm/>
      <SignUpForm/>
    </div>
    </div>
  )
}

export default Authentication;

