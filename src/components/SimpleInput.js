import { useEffect, useState} from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [touched, setTouched] = useState(false);
  const [formIsValid , setFormIsValid] = useState(false);
 
 const isValid = enteredName !== '';
 const nameIsInValid = !isValid && touched;
 const nameInputClassess = !nameIsInValid ? "form-control" : "form-control invalid";

 useEffect(() => {
  
  if(isValid){
    setFormIsValid(true)
  }else{
    setFormIsValid(false)
  }
 
  
 }, [isValid])
 

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const blurHandler = ()=>{ 
    setTouched(true);
  }


  const formSubmitHandler = (e) => {
    e.preventDefault();

    setTouched(true);

    if(!isValid){
      return
    }


  
    console.log(enteredName);
    // inputNameRef.current.value= ''; NOT IDEAL ,DON'T ,ANIPULATE THE DOM
    setEnteredName("");
    setTouched(false);
  };


  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClassess}>
        <label htmlFor="name">Your Name</label>
        <input
        
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
          onBlur={blurHandler }
        />
        {nameIsInValid && <p className="error-text">invalid name feild</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
