import React,{useState} from "react";
import Homepage from "./Components/homepage/Homepage";
import Login from "./Components/login/Login";
import Register from "./Components/register/Register";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/src/jquery";
import "bootstrap/dist/js/bootstrap";
import "./App.css";

export const App = () => {

  const [user, setLoginuser] = useState({});
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route exact path="/" element={<Login setLoginuser={setLoginuser}/>}></Route> */}
          <Route exact path="/" element={
            user && user._id ? <Homepage setLoginuser={setLoginuser} /> : <Login setLoginuser={setLoginuser}/>
          }></Route>
          <Route exact path="/login" element={<Login setLoginuser={setLoginuser} />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
