
import useForm from "../hooks/use-form";

const BasicForm = (props) => {
 const 
  {
 name: fname, 
 validName: fvalidName,
 blurHandler: fblurHandler,
 nameHandler: fnameHandler,
 validCheck: fvalidCheck,

} = useForm(fname => fname.trim() !== '');

const 
  {
 name: lname, 
 validName: lvalidName,
 blurHandler: lblurHandler,
 nameHandler: lnameHandler,
 validCheck: lvalidCheck,

} = useForm(lname => lname.trim() !== '');

const 
  {
 name: ename, 
 validName: evalidName,
 blurHandler: eblurHandler,
 nameHandler: enameHandler,
 validCheck: evalidCheck,

} = useForm(ename => ename.includes('@'));




const fclassCheck = fvalidCheck ? 'form-control' : 'form-control invalid';
const lclassCheck = lvalidCheck ? 'form-control' : 'form-control invalid';
const eclassCheck = evalidCheck ? 'form-control' : 'form-control invalid';

let validForm = false;

if(fvalidName &&  lvalidName &&  evalidName){
  validForm = true;
 
}else{
  validForm = false;
}


  const formHandler = e => { 
    e.preventDefault();

    if(!validForm){
      return;
    }

    console.log('submitted');
    console.log(fvalidName , lvalidName, ename);
  }
  return (
    <form onSubmit={formHandler} >
      <div className='control-group'>
        <div className={fclassCheck}>
          <label htmlFor='fname'>First Name</label>
          <input type='text' id='fname' value={fname} onChange={fnameHandler} onBlur={fblurHandler} />
          {fvalidCheck && <p className="error-text">feild is empty</p>}
        </div>
        <div className={lclassCheck}>
          <label htmlFor='lname'>Last Name</label>
          <input type='text' id='lname' value={lname} onChange={lnameHandler} onBlur={lblurHandler} />
          {lvalidCheck && <p className="error-text">feild is empty</p>}
        </div>
      </div>
      <div className={eclassCheck}>
          <label htmlFor='ename'>E-mail</label>
          <input type='email' id='ename' value={ename} onChange={enameHandler} onBlur={eblurHandler} />
          {evalidCheck && <p className="error-text">feild is empty</p>}
        </div>
      <div className='form-actions'>
        <button disabled={!validForm}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
