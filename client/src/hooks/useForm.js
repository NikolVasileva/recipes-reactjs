import { useState } from "react";

export default function useForm(initialValues, callback) {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const formAction = (formData) => {
        callback(values, formData);
    }

    return {
        values,
        changeHandler,
        formAction
    }
}