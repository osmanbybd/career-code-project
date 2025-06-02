import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthConext';
import signInLottie from '../../assets/lotttie/SignIn.json'
import Lottie from 'lottie-react';
import SocialLofin from '../Shared/SocialLofin';
import { useLocation, useNavigate } from 'react-router';
const SignIn = () => {



  const {signInUser} = use(AuthContext)
  const location = useLocation()
  const from = location.state || '/';
  const navigate = useNavigate()
  console.log(location)

    const handleSignIn = e =>{
        e.preventDefault()
        
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

        // Sign in  user
        signInUser(email, password)
        .then(result =>{
            console.log(result.user)
            navigate(from)
        })
        .catch(error => {
            console.log(error)
        })
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      
        <Lottie style={{width: '300px'}} animationData={signInLottie} loop={true}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Sign In now!</h1>
    <form onSubmit={handleSignIn}>
            <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
        </fieldset>
    </form>
    <SocialLofin></SocialLofin>
      </div>
    </div>
  </div>
        </div>
    );
};

export default SignIn;