import React from "react";
import './Homepage.css';

function Homepage({setLoginuser}){
    return(
        <div className="container-fluid">
            <div className="row">
            <div className="col-lg-6 col-lg-offset-3 main">
                    <h1 className="heading">This is Homepage </h1>
                    <button type="submit" className="btn btn-success" onClick={() => setLoginuser({})}>Log-out</button>
            </div>
        </div>
        </div>
        
    )
}

export default Homepage