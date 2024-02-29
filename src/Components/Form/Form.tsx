import './Form.css'
import { ChangeEvent, FormEvent, useState } from "react"

export default function Form(){


    const [ErrorFirstName,setErrorFirstName]=useState('')
    const[firstName,setFirstName]=useState('')
    const [ErrorLastName,setErrorLastName]=useState('')
    const[lastName,setLastName]=useState('')
    const [ErrorEmail,setErrorEmail]=useState('')
    const[email,setEmail]=useState('')
    const [ErrorPassword,setErrorPassword]=useState('')
    const[password,setPassword]=useState('')
    const [ErrorPasswordConf,setErrorPasswordConf]=useState('')
    const[passwordConf,setPasswordConf]=useState('')
    const [check,setCheck]=useState(false)
    const [ErrorCheck,setErrorCheck]=useState('')




    const handleSubmit=(event:FormEvent)=>{
        event.preventDefault()
        if(firstName?.length>10 && firstName?.length<3){
            setErrorFirstName("First name can have 10 characters as max")
        }else {
            setErrorFirstName("")
        }

        if(lastName?.length>10 && lastName?.length<3){
            setErrorLastName("Last name can have 10 characters as max")
        }else {
            setErrorLastName("")
        }
        if(email?.length>20 && email?.length<5){
            setErrorEmail("Email can have 20 characters as max")
        }else {
            setErrorEmail("")
        }
        if(password?.length<8){
            setErrorPassword("Password can have 8 characters as min")
        }else  {
            setErrorPassword("")
        }
        if(passwordConf===password){
            setErrorPasswordConf("Password confirmation is incorrect")
        }else {
            setErrorPasswordConf("")
        }   
        if(check===true){
            setErrorCheck('you must accept the conditions')
        } 
    }


    return(
        <div className="form">
            <h1>Create your account</h1>
            <h4>Fill the form bellow to create an account</h4>
            <form onSubmit={handleSubmit}>
                <div className="fullName" >
                <label>
                    First name*
                    <input type="text" className='input' onChange={(event:ChangeEvent<HTMLInputElement>) => setFirstName(event.target.value)}/>
                    <h3>{ErrorFirstName}</h3>
                </label>
                <label>
                    Last name*
                    <input type="text" className='input' onChange={(event:ChangeEvent<HTMLInputElement>) => setLastName(event.target.value)}/>
                    <h3>{ErrorLastName}</h3>
                </label>
                </div>
                <label>
                    Email*
                    <input type="email" className='email input'onChange={(event:ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}/>
                    <h3>{ErrorEmail}</h3>
                </label>
                <div className="passwordConf">
                    <label>
                        Password*
                        <input type="password" className='input'onChange={(event:ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}/>
                        <h3>{ErrorPassword}</h3>
                    </label>
                    <label>
                        Password confirmation*
                        <input type="password" className='input'onChange={(event:ChangeEvent<HTMLInputElement>) => setPasswordConf(event.target.value)}/>
                        <h3>{ErrorPasswordConf}</h3>
                    </label>
                </div>
                <p>We want you to know exactly how our service works and why need your details. 
                    Please confirm that you have read, understood and accept the terms  and conditions.
                </p>
                <div className='check'>
                   < input type="checkbox"/>
                   <p>I have read, understood and accept the terms and conditions.</p>
                   <h3>{ErrorEmail}</h3>
                </div>
                <button type="submit" >Next</button>
            </form>

        </div>
    )
}