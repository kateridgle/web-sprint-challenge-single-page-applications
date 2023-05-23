import * as yup from 'yup';

const FormSchema = yup.object().shape({
    name: yup
        .string()
        .required("name must be at least 2 characters")
        .min(2, "name must be at least 2 characters"),
})

export default FormSchema;