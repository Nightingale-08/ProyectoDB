import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import { Button } from "bootstrap";
import loginUserComp from "./loginUser";
import loginWorkerComp from "./LoginWorker";

const Bienvenida = () => {
  return (
    <div>
      <h1 className="app-wel">Bienvenido a Mande!! 👋</h1>
      <p className="app-p">
        ¿Quieres iniciar sesion como usuario ó Trabajador?
      </p>
      <div className="app-div">
         <Link to={"/loginuser"} className="bt">
          Usuario
        </Link> 

        <Link to={"/loginworker"} className="bt">
          Trabajador
        </Link> 
      </div>
      <p className="app-p">Si no tienes cuenta registrate</p>

      <div className="app-div">
        <Link to={"/register"} className="bt">
          Registrate
        </Link>
      </div>
    </div>
  );
};

export default Bienvenida;
