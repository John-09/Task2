import React, {useState} from "react";
import {GoogleLogout } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import "./Logout.css"

const Logout= () =>{
    let history=useHistory();
    const clientId = "387996028402-1oaq3ekfq6tr8m9e00lg5fcmnjboo0cb.apps.googleusercontent.com";

    const [showlogoutButton, setShowlogoutButton] = useState(true);
    const [showBackButton, setShowBackButton] = useState(false);


    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowlogoutButton(false);
        setShowBackButton(true);
    };

    const[color1,setcolor1]= useState('');
    const[color2,setcolor2]= useState('');

 


    return(
        <div>
            <div className="Gradient" >
                <h1>Gradient Generator</h1>
                <input className="color1" type="color" name="color1" value={color1} onChange={e => setcolor1(e.target.value)}   />
                <input className="color2" type="color" name="color2" value={color2} onChange={e => setcolor2(e.target.value)} />
                <h2>current css background</h2>
                <h3></h3>
                <button className="button"><span>Random</span></button>
            </div>
          <div>
                <div>
                    { showlogoutButton ?
                        <GoogleLogout
                        clientId={clientId}
                        buttonText="Sign Out"
                        onLogoutSuccess={onSignoutSuccess}
                        >
                        </GoogleLogout> : null
                    }
                </div>
                <div onClick={()=>{history.push('/');}} >                    
                    { showBackButton ?
                                <button > Click Here to Login </button>
                                : null     
                        }
                </div> 
           </div>       
        </div>             

    )    
}

export default Logout;



// { showloginButton ?
//     <GoogleLogout
//         clientId={clientId}
//         buttonText="Sign Out"
//         onLogoutSuccess={onSignoutSuccess}
//     >
//                         </GoogleLogout> : null}
//       <div onClick={()=>{history.push('Logout');}} >
        
//         { showEnterButton ?
//              <button > Logged In successfully Click Here!!! </button>
//              : null}
            
//       </div> 