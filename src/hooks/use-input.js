import {
    useState
} from "react";
const useInput = (validate_value) => {

    const [enteredValue, setEnteredValue] = useState("");
    const [touched, setTouched] = useState(false);
    const valueIsValid = validate_value(enteredValue);
    const hasError = !valueIsValid && touched;


    const valueChangeHandler = (e) => {
        setEnteredValue(e.target.value);
    };



    const inputBlurHandler = () => {
        setTouched(true);

    }

    const reset = ()=>{ 
        setEnteredValue("");
        setTouched(false);
    }

    return {
        valueIsValid,
        enteredValue,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }

}

export default useInput;