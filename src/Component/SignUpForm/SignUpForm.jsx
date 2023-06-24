import React from 'react';
import { useState } from 'react';
import "./SignUpForm.css";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../Utils/Firebase/FireBase';

import InputForm from './Input-Form/InputForm';
import Button from '../Button/Button';

const defaultFormFields={
    dispalyName:'',
    email:'',
    password:'',
    confirmPassword:''

}

const SignUpForm = () => {
  
    const[formFields,setFormFields]=useState(defaultFormFields);
    const{dispalyName,email,password,confirmPassword}=formFields;
    const resetFormFields=()=>{
      setFormFields(defaultFormFields);
    }
   let handleChange=(event)=>{
     const {name,value}=event.target;
     setFormFields({...formFields,[name]:value})
   }
   const handleSubmit=async(event)=>{
    event.preventDefault()
    if(password !== confirmPassword){
     alert("password do not match");
     return;
    }
    try{
        const {user}=await createAuthUserWithEmailAndPassword(email,password);
           await createUserDocumentFromAuth(user,{dispalyName});
        resetFormFields();
    } 
    catch(error){
      if(error.code==="auth/email-already-in-use"){
        alert("can not create user already in use");
      }
      else{
        console.log("user creation encountered error",error);
      }
      
    }
   }
  //  console.log(formFields);
  return (
    <div className='sign-up-container'>
      <h2>don't have account</h2>
      <span>sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        
        <InputForm type='text' label='dispalyName' required onChange={handleChange} name='dispalyName' value={dispalyName}/>
        
        <InputForm type='email' label='email' required  onChange={handleChange} name='email' value={email}/>
     
        <InputForm  type='password' label='password' required onChange={handleChange} name='password' value={password}/>
        
        <InputForm type='password'label='confirmPassword' required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
        <Button   type='submit'>sign-up</Button>
      </form>
    </div>
  )
}

export default SignUpForm;

