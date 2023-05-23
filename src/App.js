import React, { useState } from "react";
import {Routes, Route, Link, useNavigate} from "react-router-dom";
import PizzaForm from "./Components/PizzaForm";




export default function App() {
  const navigate = useNavigate()
  const routeToPizza = () => {
    navigate('pizza')
  }

  return (
    <div className="App">
    <h1>BloomTech Eats!</h1>
    <nav>
      <Link to="/">Home</Link>
      
      <button id="order-pizza"><Link to="/pizza">Order Pizza</Link></button>
     
    </nav>
    <Routes>
      {/* <Route path="/" element={<Home/>}/> */}
      <Route path="/pizza" element={<PizzaForm />}/>
    </Routes>
    </div>
  )

  }
