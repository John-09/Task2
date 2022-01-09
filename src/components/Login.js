import React, {useState} from "react";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useHistory } from 'react-router-dom';
// import "./Login.css";

const Login= () =>{
    let history=useHistory();
    const clientId = "387996028402-1oaq3ekfq6tr8m9e00lg5fcmnjboo0cb.apps.googleusercontent.com";

    const [showloginButton, setShowloginButton] = useState(true);
    const [showEnterButton, setShowEnterButton] = useState(false);
    
    
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowEnterButton(true);
        setShowloginButton(false);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    return(
        <div>
          <legend className="f1 fw6 ph0 mh0">Sign In</legend> 
             <div className="mt3" >
               <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
               <input className=" pa2 input-reset ba bw b--black bg-transparent hover-bg-black hover-white w-50" type="email" name="email-address"  id="email-address" />
             </div>
             <div className="mv3">
               <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
               <input className="ba bw b--black pa2 input-reset ba bg-transparent hover-bg-black hover-white w-50" type="password" name="password"  id="password" />
             </div>                     
             { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}
                  <div onClick={()=>{history.push('Logout');}} >
                    
                    { showEnterButton ?
                         <button > Logged In successfully Click Here!!! </button>
                         : null}
                        
                  </div> 
                  
                
         </div>             

    )    
}

export default Login;

