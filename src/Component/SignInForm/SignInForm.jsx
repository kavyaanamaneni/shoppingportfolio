import React from 'react';
import { useState } from 'react';
import "./SignInForm.css";
import { signInWithGooglePopup,
  //  createUserDocumentFromAuth,
   signInAuthUserWithEmailAndPassword } from '../../Utils/Firebase/FireBase';


import Button from '../Button/Button';
import InputForm from '../SignUpForm/Input-Form/InputForm';
const defaultFormFields={
   email:'',
    password:'',
}
const SignInForm = () => {
  const[formFields,setFormFields]=useState(defaultFormFields);
    const{email,password}=formFields;
    const resetFormFields=()=>{
      setFormFields(defaultFormFields);
    }
   let handleChange=(event)=>{
     const {name,value}=event.target;
     setFormFields({...formFields,[name]:value})
   }
   const handleSubmit=async(event)=>{
    event.preventDefault()
   try{
   const {user}= await signInAuthUserWithEmailAndPassword(email,password);
    resetFormFields(); 
    } 
    catch(error){
     switch(error.code){
      case 'auth/wrong-password':
        alert("incorrect password for email");
        break;
        case "auth/user-not-found":
        alert("no user associated with this email");
        break;
        default:
        console.log(error);
     }
    }
  }
  const signInWithGoogle=async()=>{
    await signInWithGooglePopup();
   }
   
  //  console.log(formFields);
  return (
    <div className='sign-up-container'>
      <h2>alredy  have an account</h2>
      <span>sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <InputForm type='email' label='email' required  onChange={handleChange} name='email' value={email}/>
        <InputForm  type='password' label='password' required onChange={handleChange} name='password' value={password}/>
        <div className='buttons-container'>
        <Button buttonType='google' type='button'  onClick={signInWithGoogle}> google </Button>
        <Button type='submit'>sign-in</Button>
        </div>
       </form>
    </div>
  )
}
export default SignInForm;

