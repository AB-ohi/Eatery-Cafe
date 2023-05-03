import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';


const SingUp = () => {
    
    const handelToSignIn = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        console.log(name, email, password, photo)

        createUser (email, password)
        .then(result => {
            const createdUser = result.createUser
            console.log(createdUser)
        })
        
    }

    
    return (
        <div>
            <div className='login-page'>
            <h1 style={{textAlign:'center'}}>Sing Up</h1>
            <div className='from-position'>
            <form onSubmit={handelToSignIn}>
                <div className='from-control'>
                <div className='input-filed'>
                        <label>Name</label>
                        <input type="text" name="name" id="" required />
                    </div>
                    <div className='input-filed'>
                        <label>Email</label>
                        <input type="email" name="email" id="" required />
                    </div>
                    <div className='input-filed'>
                        <label>Password</label>
                        <input type="password" name="password" id="" required />
                        
                    </div>
                    <div className='input-filed'>
                        <label>Photo Url</label>
                        <input type="text" name="photo" id="" required />
                        
                    </div>
                    <button>Sing Up</button>
                    <p className='text-error'></p>
                    <p >already have an account Eatery . Cafe <Link to='/login'>Login</Link> </p>
                    
                </div>
            </form>
            <div></div>
            </div>
        </div>
        </div>
    );
};

export default SingUp;