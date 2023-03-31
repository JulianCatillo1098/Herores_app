import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContex";

export const LoginPage = () => {

const navigate = useNavigate()

const{login}=useContext(AuthContext)

const islogin = ()=>{
  login('Julian Castillo')
  navigate('/marvel',{replace: true})
}

  return (
    <div className="container mt-2">
      <h2>LoginPage</h2>
      <hr/>
      <button className="bn btn-primary" onClick={islogin}>login</button>
    </div>
  );
};
