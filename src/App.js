import React, { useState } from "react";
import {Routes, Route, Link, useNavigate} from "react-router-dom";
// import Pizza from "./Components/Pizza"
import PizzaForm from "./Components/PizzaForm";




export default function App() {
  const navigate = useNavigate()
  const routeToPizza = () => {
    navigate('pizza')
  }
  // const [formValues, setFormValues] = useState(initialFormValues);
  return (
    <div className="App">
    <h1>BloomTech Eats!</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="pizza">Pizza</Link>
    </nav>
    <Routes>
      {/* <Route path="/" element={<Home/>}/> */}
      <Route path="pizza" element={<PizzaForm change={change} />}/>
    </Routes>
    </div>
  )

  }
