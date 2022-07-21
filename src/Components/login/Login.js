import axios from "axios";
import React , {useState }from "react";
import './Login.css'
import { useNavigate } from "react-router-dom"

function Login({setLoginuser}){

    const navigate = useNavigate();

    var uri = "http://localhost:2000/";

    const[user, setUser] = useState({
        email: "",
        password: "",
    })

    const handleChange = e => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name] : value
        })
    }
    const login = () => {
        const {email, password} = user;
        axios.post(uri + "login", {
            email, password
        }).then( res => {
            alert(res.data.message)
            setLoginuser(res.data.user)
            navigate('/');
            
        })
    }
    const nav =() => {
        navigate('/register')
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-sm-12 col-lg-offset-3 loginbox">
                    <h1>Login</h1>
                    <div className="form-group">
                        <input type="email" placeholder="Enter Your Email" className="form-control" name="email" value={user.email} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Enter your Password" className="form-control" name="password" value={user.password} onChange={handleChange} />
                    </div>
                        <br></br>
                    <button className="btn btn-primary btn-block" onClick={login}>Login</button>
                    <h4>Or</h4>
                    <button className="btn btn-primary btn-block" onClick={nav}>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Login