import React, { useState } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Login from './components/Login';
import Logout from './components/Logout';
import 'tachyons';




function App() {

    return (
    <BrowserRouter>
        <div>
              <Route path= "/" exact>
                <Login />
              </Route>  
              <Route path= "/Logout">
                <Logout />   
              </Route>    
        </div>
    </BrowserRouter>     
    );
}
export default App;



// import React from 'react';
// import { useHistory } from 'react-router-dom';

// const Signin=()=>{
//     let history=useHistory();
//     return(
        
//     );


// }

// export default Signin;


{/* <div>
{ showloginButton ?
    <GoogleLogin
        clientId={clientId}
        buttonText="Sign In"
        onSuccess={onLoginSuccess}
        onFailure={onLoginFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
    /> : null}

{ showlogoutButton ?
    <GoogleLogout
        clientId={clientId}
        buttonText="Sign Out"
        onLogoutSuccess={onSignoutSuccess}
    >
    </GoogleLogout> : null
}
</div> */}