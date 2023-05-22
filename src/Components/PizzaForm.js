import React, { useState } from "react";

export default function PizzaForm(props) {
    const {change, submit} = props;
    const {name, size, cheese, pepperoni, sausage, mushroom, special, checked} = props.values;
    const [form, setForm] = useState();
    const onChange = (event) => {
        const {name, type,  value, id} = event.target;
        const newVal = type === "checkbox"? checked: value;
        change(name, value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }
    



return (
<div>
    <form id="pizza-form">
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
            <input type="checkbox" name="cheese" checked={checked} onChange={onChange}/>
            <input type="checkbox" name="pepperoni" checked={checked} onChange={onChange}/>
            <input type="checkbox" name="sausage" checked={checked} onChange={onChange}/>
            <input type="checkbox" name="mushroom" checked={checked} onChange={onChange}/>
        </label>
        <label>
            Special Instructions:
            <input type="text" id="special" name="special-text" onChange={onChange} />
        </label>
    </form>
</div>
)
};