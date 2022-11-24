
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

 const {
  valueIsValid,
  enteredValue : value,
  hasError,
  valueChangeHandler,
  inputBlurHandler,
  reset
 } =  useInput(value => value.trim() !== '');

 const {
  valueIsValid : emailIsValid,
  enteredValue : emailValue,
  hasError:error,
  valueChangeHandler:emailChangeHandler,
  inputBlurHandler:emailBlurHandler,
  reset:emailReset
 } =  useInput(emailValue =>  emailValue.includes('@'));


  const nameInputClassess = !hasError ? "form-control" : "form-control invalid";
  const InputClassess = !error ? "form-control" : "form-control invalid";

  let formIsValid = false;
  
  if(valueIsValid && emailIsValid){
    formIsValid = true;
  }else{
    formIsValid = false;
  }
 


  const formSubmitHandler = (e) => {
    e.preventDefault();


    if(!formIsValid){
      return
    }

   
  
    // console.log(enteredName , enteredEmail);
    // inputNameRef.current.value= ''; NOT IDEAL ,DON'T ,ANIPULATE THE DOM
    reset();
    emailReset()

    console.log(value , emailValue);

  };


  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClassess}>
        <label htmlFor="name">Your Name</label>
        <input
        
          type="text"
          id="name"
          onChange={valueChangeHandler}
          value={value}
          onBlur={inputBlurHandler}
        />
        {hasError && <p className="error-text">invalid name feild</p>}
      </div>
      <div className={InputClassess}>
        <label htmlFor="email">Your E-mail</label>
        <input
        
          type="email"
          id="email"
          onChange={emailChangeHandler}
          value={emailValue}
          onBlur={emailBlurHandler }
        />
        {error && <p className="error-text">invalid email feild</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
