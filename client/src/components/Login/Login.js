import React,{useState} from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import YourBlog from '../Your Blog/YourBlog'

const Login = () => {
    const [container, setContainer] = useState("container");
    const [signIn, setSignIn] = useState({email:"",password:""});
    const [signUp ,setSignUp] = useState({name : "" ,email:"",password:""})
  
    const [data,setData] = useState(false)
    const history = useNavigate();
    //for transition
    const handleSignUp = (e) =>{
        e.preventDefault();
      setContainer("container right-panel-active");
      console.log(container);
    }
    const handleSignIn = (e) =>{
        e.preventDefault();
      setContainer("container");
    }

  //sign up api
    const submitSignUp = async (e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:5000/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: signUp.name, email: signUp.email, password: signUp.password })
        });
        const json = await response.json()
        console.log(json)
        if (json.success === true) {
            //Redirect
            localStorage.setItem("token", json.authToken)
            localStorage.setItem("user",json.userId)
            history("/")
            
        }
        else {
            console.log("error");
        }
    }
    //login api
    const submitSignIn = async (e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:5000/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: signIn.email, password: signIn.password })
        });
        const json = await response.json()
        console.log(json)
        if (json.success === true) {
            //Redirect
            localStorage.setItem("token", json.authToken)
            localStorage.setItem("user",json.userId)
            history("/")
         
        }
        else {
            console.log("error");
        }
    }

    const onChange1 = (e) =>{
        setSignUp({...signUp,[e.target.name]:e.target.value})
    }
    const onChange2 = (e) =>{
        setSignIn({...signIn,[e.target.name]:e.target.value})
    }
    return (
        <div className='login-container'><h2></h2>
            <div className={container} id="container">
                <div className="form-container sign-up-container">
                    <form onSubmit={submitSignUp}>
                        <h1>Create Account</h1>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" name='name' value={signUp.name} onChange={onChange1} required/>
                        <input type="email" placeholder="Email" name='email' value={signUp.email} onChange={onChange1} required/>
                        <input type="password" placeholder="Password" name='password' value={signUp.password} onChange={onChange1} required/>
                        <button >Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form onSubmit={submitSignIn}>
                        <h1>Sign in</h1>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" name='email' value={signIn.email} onChange={onChange2} required/>
                        <input type="password" placeholder="Password" name='password' value={signIn.password} onChange={onChange2} required/>
                        <a href="#">Forgot your password?</a>
                        <button >Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn" onClick={handleSignIn}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp" onClick={handleSignUp}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
</div>

    )
}

export default Login