import { Button, TextField } from '@mui/material';
import './App.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');

  const [isFname, setIsFname] = useState(true);
  const [isLname, setIsLname] = useState(true);
  const [isEmail, setIsEmail] = useState(true);
  const [isPassword, setIsPassword] = useState(true);
  const [isCpassword, setIsCpassword] = useState(true);

  const [iFname, setiFname] = useState(true);
  const [iLname, setiLname] = useState(true);
  const [iEmail, setiEmail] = useState(true);
  const [iPassword, setiPassword] = useState(true);
  const [iCpassword, setiCpassword] = useState(true);

  const getValidate = (e) => {
    const { name, value } = e.target;

    console.log(name, value);

    if (name === 'fname') {
      if (!!value.match(/^[A-Za-z\s]+$/)) {
        setFname(value);
        setIsFname(true);
      } else {
        setFname(value);
        setIsFname(false);
      }
    }

    if (name === 'lname') {
      if (!!value.match(/^[A-Za-z\s]+$/)) {
        setLname(value);
        setIsLname(true);
      } else {
        setLname(value);
        setIsLname(false);
      }
    }

    if (name === 'email') {
      if (!!value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        setEmail(value);
        setIsEmail(true);
      } else {
        setEmail(value);
        setIsEmail(false);
      }
    }

    if (name === 'password') {
      if (value.length >= 8 && /\d/.test(value)) {
        setPassword(value);
        setIsPassword(true);
      } else {
        setPassword(value);
        setIsPassword(false);
      }
    }

    if (name === 'cpassword') {
      setCpassword(value);
      if (value === password) {
        setIsCpassword(true);
      } else {
        setIsCpassword(false);
      }
    }
  };

  const validateFname = () => {
    if (!fname) {
      setiFname(false)
    } else {
      setiFname(true)
    }
  }

  const validateLname = () => {
    if (!lname) {
      setiLname(false)
    } else {
      setiLname(true)
    }
  }

  const validateEmail = () => {
    if (!email) {
      setiEmail(false)
    } else {
      setiEmail(true)
    }
  }

  const validatePassword = () => {
    if (!password) {
      setiPassword(false);
    } else {
      setiPassword(true);
    }
  };

  const validateCpassword = () => {
    if (!cpassword) {
      setiCpassword(false);
    } else {
      setiCpassword(true);
    }
  }

  const handleSubmit = (e) => {
    if (!fname || !lname || !email || !password || !cpassword) {
      toast.warning('please fill the form')
    } else {
      toast.success('Your Registration Successful!!')
    }
  }
  
  return (
    <div >
  <section className="background-radial-gradient overflow-hidden">
        <div className="container px-2  py-4 text-center text-lg-start  ">
          <div className="row align-items-center bg-white px-5" >
            <div className="col-lg-6 mt-3">
              <div className='bg-light px-5 py-4 rounded shadow' style={{ maxWidth: '700px', margin: 'auto', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <h1 className='text-center' style={{ fontFamily: 'Lorem', fontWeight: 'bold' }}>Register Here</h1>
                <form className="mt-2" onSubmit={handleSubmit}>
                  <div className="row ">
                    <div className='col-sm-6 '>
                      <div className='mb-2'>
                        <TextField name='fname' onBlur={validateFname} onChange={(e) => getValidate(e)} className='w-100' id='standard-basic' label="First Name" variant="standard" autoComplete='off' required />
                        {!isFname &&
                          <div>
                            <span className='text-danger' > <p>Invalid Input</p> </span>
                          </div>
                        }
                        {!iFname &&
                          <div>
                            <span className='text-danger'>Enter first name</span>
                          </div>
                        }
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='mb-2'>
                        <TextField name='lname' onBlur={validateLname} onChange={(e) => getValidate(e)} className='w-100' id='standard-basic' label="Last Name" variant="standard" autoComplete='off' required />
                        {!isLname &&
                          <div>
                            <span className='text-danger'>Invalid Input</span>
                          </div>
                        }
                        {!iLname &&
                          <div>
                            <span className='text-danger'>Enter last name</span>
                          </div>
                        }
                      </div>
                    </div>
                  </div>
                  <div className='mb-2'>
                    <TextField name='email' onBlur={validateEmail} value={email || ""} onChange={(e) => getValidate(e)} className='w-100' id='' label="Enter Your Email" variant="standard" autoComplete='off' required />
                    {!isEmail &&
                      <div>
                        <span className='text-danger'>Enter valid email</span>
                      </div>
                    }
                    {!iEmail &&
                      <div>
                        <span className='text-danger'>Please Enter Email</span>
                      </div>
                    }
                  </div>

                  <div className='mb-2'>
                    <TextField name='password' onBlur={validatePassword} onChange={(e) => getValidate(e)} type='password' className='w-100' id='' label="Enter Password" variant="standard" autoComplete='off' required
                    />
                    {!isPassword &&
                      <div>
                        <span className='text-danger'>set a strong password</span>
                      </div>
                    }
                    {!iPassword &&
                      <div>
                        <span className='text-danger'>Please Enter Password</span>
                      </div>
                    }
                  </div>

                  <div className='mb-2'>
                    <TextField name='cpassword' onBlur={validateCpassword} onChange={(e) => getValidate(e)} type='password' className='w-100' id='' label="Confirm Password" variant="standard" autoComplete='off' required />
                    {!isCpassword &&
                      <div>
                        <span className='text-danger '>password do not match</span>
                      </div>
                    }
                    {!iCpassword &&
                      <div>
                        <span className='text-danger '>Please re-enter Password</span>
                      </div>
                    }
                  </div>

                  <div className='text-center mt-3'>
                    <Button type='submit' variant="contained" color="warning">Signup</Button>
                  </div>
                  <div>
                    <p className='text-center mt-2'>Already have an account? <a href="s">SignIn</a></p>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-6 mb-5">
              <img
                src="https://img.freepik.com/free-vector/my-password-concept-illustration_114360-4294.jpg?w=740&t=st=1699631941~exp=1699632541~hmac=434bd845976156211b65fc04a0210b0828dca53c4afa6904381efaa2f5b2e858"
                alt="Your Alt Text"
                className="img-fluid rounded"
              />
            </div>

          </div>



        </div>
       
      </section>
       <ToastContainehttps://github.com/athulvinayakumar/React_Register_Formr position='top-center' theme='colored' autoClose={2000} />
    </div>
  );
}

export default App;
