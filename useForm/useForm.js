import { useState } from "react"

// Custom Hook encargado de los formularios

export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState)

    const reset = () => setValues( initialState );
    

    const handleInputChange = ({ /*e.*/target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });
    }

    return [ values, handleInputChange, reset ];
}
