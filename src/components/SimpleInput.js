import { useRef, useState, useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [touched, setTouched] = useState(false);
  const inputNameRef = useRef();

  useEffect(() => {
    if (isValid) {
      console.log("lololo");
    }
  }, [isValid]);

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setTouched(true);

    if (enteredName.trim() === "") {
      setIsValid(false);
      return;
    }

    setIsValid(true);
    const enteredValue = inputNameRef.current.value;
    console.log(enteredValue, enteredName);
    // inputNameRef.current.value= ''; NOT IDEAL ,DON'T ,ANIPULATE THE DOM
    setEnteredName("");
  };

  const nameIsInValid = !isValid && touched;
  const nameInputClassess = !nameIsInValid ? "form-control" : "form-control invalid";
 
  const blurHandler = ()=>{ 
    setTouched(true);

    if (enteredName.trim() === "") {
      setIsValid(false);
      return;
    }
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClassess}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={inputNameRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
          onBlur={blurHandler }
        />
        {nameIsInValid && <p className="error-text">invalid name feild</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
