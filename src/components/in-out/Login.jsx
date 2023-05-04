import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './singUp.css'
import { AuthContext } from '../provider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../Firebase/Firebase';

const Login = () => {

    const auth = getAuth(app)
    const GoogleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const handleGoogleSignIn = () =>{
        signInWithPopup (auth, GoogleProvider)
        .then(result => {
            const user = result.user;

        })
        .catch(error =>{
            console.log(error);
        })
    }
    const handleGitHubSignIn =() =>{
        signInWithPopup(auth, gitHubProvider)
        .then (result =>{
            const loggedInUser = result.user;
            console.log(loggedInUser)
        })
        .catch(error => console.log(error))
    }

    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate()

    const handelToSignIn = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        signIn(email,password)
        .then (result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate('/')
        })
        .catch(error =>{
            console.log(error)
        })

       
    }
    return (
        <div className='login-page'>
            <h1 style={{textAlign:'center'}}>Login</h1>
            <div className='from-position'>
            <form onSubmit={handelToSignIn}>
                <div className='from-control'>
                
                    <div className='input-filed'>
                        <label>Email</label>
                        <input type="email" name="email" id="" required />
                    </div>
                    <div className='input-filed'>
                        <label>Password</label>
                        <input type="password" name="password" id="" required />
                        
                    </div>
                    
                    <button>Login</button>
                    <p className='text-error'></p>
                    <p >New to Eatery . Cafe <Link to='/singUp'>Sing Up</Link> </p>
                    <div className='other-sing-in-border'>
                        <div/>
                        <p style={{color:'white'}}>or</p>
                        <div/>
                    </div>
            <button onClick={handleGoogleSignIn} style={{background:'none',border: '1px solid #95A0A7',display: 'flex',alignItems:'center',justifyContent:'center',marginBottom:'10px'}}><img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" width="20"/>Continue with Google</button>
            <button onClick={handleGitHubSignIn} style={{background:'none',border: '1px solid #95A0A7',display: 'flex',alignItems:'center',justifyContent:'center',marginBottom:'44px',}}><img style={{borderRadius:'50%'}} src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" width="20"/>Continue with Git Hub</button>
                </div>
            </form>
            <div></div>
            </div>
        </div>
    );
};

export default Login;