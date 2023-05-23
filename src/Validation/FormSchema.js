import * as yup from 'yup';

const FormSchema = yup.object().shape({
    name: yup
        .string()
        .required("name must be at least 2 characters")
        .min(2, "name must be at least 2 characters"),

    size: yup
        .string()
        .oneOf(["small", "medium", "large"], "size is required"),
    cheese: yup
        .boolean(),
    pepperoni: yup
        .boolean(),
    sausage: yup
        .boolean(),
    mushroom: yup
        .boolean(),
    special: yup
        .string()
})

export default FormSchema;