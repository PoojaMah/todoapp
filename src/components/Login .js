import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [error, setError]= useState('');

    const handle = () => {       
        if(email === "default@email.com" && pwd === "Default@2022") {
         localStorage.setItem('Email', email);
         setError("");
         window.location.replace("/dashboard");

        } else{
         setError("Id and Password is invalid!") ;
         console.log("Id and Password is invalid");
        }
        
     };

    return(
        <div className='container'>
            <h5>Email Id of the user:</h5>
         <input
            placeholder="Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='form-control'
         />
         <h5>Password of the user:</h5>
         <input
            type="password"
            placeholder="Password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            className='form-control'
         />
         <div style={{textAlign: "center"}}>
            <button className='btn-primary' style={{margin:"15px", padding: "5px 15px"}} onClick={handle}>Login</button>
            <p style={{color: "red"}}>{error}</p>
         </div>
        </div>
    );
}

export default Login;