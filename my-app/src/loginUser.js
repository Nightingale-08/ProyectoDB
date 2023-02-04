import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Comps.css'

const URI = 'http:://localhost:3001/'

const loginUserComp = () => {
  return(
    <div>
        <h1>Usuario</h1>
    </div>
  );
};

export default loginUserComp;