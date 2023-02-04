import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './comps/Apps.css';


const URI = 'http:://localhost:3001/'

const loginWorkerComp = () => {
  return(
    <div>
        <h1 className="app-link">worker</h1>
    </div>
  );
};

export default loginWorkerComp;