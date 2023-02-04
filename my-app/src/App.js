import "./App.css";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";

import Bienvenida from "./Welcome";
import loginWorkerComp from "./LoginWorker";
import loginUserComp from "./loginUser";

function App() {
  return (
    
      <div>
        <header className="App-header">Mande</header>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Bienvenida />} />
            <Route path="/loginuser" element={<loginUserComp />} />
            <Route path="/loginworker"element={<loginWorkerComp/>}/>

          </Routes>
        </BrowserRouter>
      </div>

    
  );
}
export default App;
