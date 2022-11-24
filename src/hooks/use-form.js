import { useState } from "react";

const useForm = (validate_input_value) => {
    const [name , setName] = useState('')
    const [touched , setTouched] = useState(false);
  
    const validName = validate_input_value(name) 
    const validCheck = !validName && touched;
  
  
  
    const nameHandler = (e)=>{ 
      setName(e.target.value)
    }
  
   const  blurHandler = ()=>{ 
      setTouched(true);
    }
  
  

    return {
        name, 
        validName,
        blurHandler,
        nameHandler,
        validCheck,
       

    }
}
 
export default useForm;