import React, {useState} from "react";
import axios from 'axios'
import './Register.css'
import { useNavigate } from "react-router-dom"

function Register(){

    const navigate = useNavigate();

    var uri = "http://localhost:2000/";
    const[user, setUser] = useState({
        name : "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name] : value
        })
    }

    const register = () =>{
        const {name, email, password, reEnterPassword} = user
        if(name.length > 5 && email && (password === reEnterPassword)){
            axios.post(uri + "register", {
                name, email, password
            })
            .then(res => {
                alert(res.data.message)
                navigate('/login')
            });
        } else{
            alert("Invalid input")
        }
    }

    const nav = () => {
        navigate('/login');
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-sm-12 col-lg-offset-3 registerbox">
                    <h1>Register</h1>
                    <div className="form-group">
                        <input type="text" placeholder="Your Name" className="form-control" name="name" value={user.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Your Email" className="form-control" name="email" value={user.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Your Password" className="form-control" name="password" value={user.password} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Re-enter Password" className="form-control" name="reEnterPassword" value={user.reEnterPassword} onChange={handleChange} />
                    </div>
                        <br></br>
                    <button className="btn btn-primary btn-block" onClick={register}>Register</button>
                    <h4>Or</h4>
                    <button className="btn btn-primary btn-block" onClick={nav} >Login</button>
                </div>
            </div>
        </div>
    )
}

export default Register