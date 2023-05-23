import React, { useState } from "react";
import FormSchema from './Validation/FormSchema';
import * as yup from 'yup';
import axios from "axios";

export default function PizzaForm() {

const initialFormValues = {
  name:"",
  size:"",
  cheese:false, pepperoni:false, sausage:false, mushroom:false,
  special:""
}
const initialFormErrors = {
    name:"",
  }

    const [form, setForm] = useState(initialFormValues);
    const [formErrors, setFormErrors]= useState(initialFormErrors);
    const onChange = (event) => {
        const {name, type,  value, id, checked} = event.target;
        const newVal = type === "checkbox"? checked: form.value;
        change(name, value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }

    const change = (name,value) => {
        validate (name, value);
        setForm({...form, [name]:value})
    }

    const validate = (name, value) => {
        yup.reach(FormSchema, name)
        .validate(value)
        .then(() => setFormErrors({...formErrors, [name]:""}))
        .catch((err) => setFormErrors({...formErrors, [name]: err.erros[0]}))
    }
    
    const submit = () => {
        axios.post('')
    }



return (
<div>
    <form id="pizza-form" onSubmit={onSubmit}>
        <label>
            Name:
            <input id="name-input" name="name" type="text" onChange={onChange} />
        </label>
        <label>
            Pizza Size:
            <select id="size-dropdown" name="size" onChange={onChange}>
                <option name="small"value="1">Small</option>
                <option name="medium"value="2">Medium</option>
                <option name="large"value="3">Large</option>
            </select>
        </label>
        <label>
            Toppings:
            <input type="checkbox" name="cheese" checked={form.cheese} onChange={onChange}/>
            <input type="checkbox" name="pepperoni" checked={form.pepperoni} onChange={onChange}/>
            <input type="checkbox" name="sausage" checked={form.sausage} onChange={onChange}/>
            <input type="checkbox" name="mushroom" checked={form.mushroom} onChange={onChange}/>
        </label>
        <label>
            Special Instructions:
            <input type="text" id="special" name="special-text" onChange={onChange} />
        </label>
    </form>
</div>
)
};