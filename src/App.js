import React, { useState } from "react";
import {Routes, Route, Link, useNavigate} from "react-router-dom";
import Pizza from "./Components/Pizza"
import PizzaForm from "./Components/PizzaForm";

// const initialFormValues = {
//   name:"",
//   size:"",
//   cheese:"false", pepperoni:"false", sausage:"false", mushroom:"false",
//   special:""\
// }



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
      <Link to="PizzaForm">Order Pizza</Link>
    </nav>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/pizza" element={<Pizza/>}/>
      <Route path="/PizzaForm" element={<PizzaForm/>}/>
    </Routes>
    </div>
  )

  }
