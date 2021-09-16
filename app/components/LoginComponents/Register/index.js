import React,{useState,useEffect} from 'react'
import {TextField, Button , Grid} from '@material-ui/core';
import {REGISTER_FORM_CONSTANTS} from 'utils/constants';
import { ValidationHelpers } from 'helpers';
import './style.scss'
function Register(props) {
  const [validationObj, setValidationObj] = useState({});
  const [form, setForm] = useState({
    firstname : '',
    lastname : '',
    email : '',
    phone : '',
    password : '',
    confirmPass : '',
  })
  const editForm = (key,value) => {
    setForm({
      ...form,
      [key] : value
    })
  }
  const handleSubmit = () => {
    /** Register Validation */
    const validation = ValidationHelpers.handleRegisterFormValidation(form)
    setValidationObj(validation);

    if (validation &&
       !validation.firstname && !validation.lastname && !validation.email && !validation.phone && !validation.password && !validation.confirmPass) {
        //  check
    }
  }; 
  return (
    <Grid item xs={12} className="RegisterComponent">
      <form className="RegisterComponentForm">
        <TextField
          error={validationObj && validationObj[REGISTER_FORM_CONSTANTS.FIRSTNAME]}
          label="First Name"
          type="text"InputLabelProps={{
          shrink: true,
          }}
          value={form.firstname}
          onChange={(e)=>editForm('firstname',e.target.value)}
          helperText={validationObj && validationObj[REGISTER_FORM_CONSTANTS.FIRSTNAME]}
        />
        <TextField
          error={validationObj && validationObj[REGISTER_FORM_CONSTANTS.LASTNAME]}
          label="Last Name"
          type="text"InputLabelProps={{
          shrink: true,
          }}
          value={form.lastname}
          onChange={(e)=>editForm('lastname',e.target.value)}
          helperText={validationObj && validationObj[REGISTER_FORM_CONSTANTS.LASTNAME]}
        />
        <TextField
          error={validationObj && validationObj[REGISTER_FORM_CONSTANTS.EMAIL]}
          label="Email"
          type="email"InputLabelProps={{
          shrink: true,
          }}
          value={form.email}
          onChange={(e)=>editForm('email',e.target.value)}
          helperText={validationObj && validationObj[REGISTER_FORM_CONSTANTS.EMAIL]}
        />
        <TextField
          error={validationObj && validationObj[REGISTER_FORM_CONSTANTS.PHONE]}
          label="Phone Number"
          type="phone"InputLabelProps={{
          shrink: true,
          }}
          value={form.phone}
          onChange={(e)=>editForm('phone',e.target.value)}
          helperText={validationObj && validationObj[REGISTER_FORM_CONSTANTS.PHONE]}
        />
        <TextField
          error={validationObj && validationObj[REGISTER_FORM_CONSTANTS.PASSWORD]}
          label="Password"
          type="password"InputLabelProps={{
          shrink: true,
          }}
          value={form.password}
          onChange={(e)=>editForm('password',e.target.value)}
          helperText={validationObj && validationObj[REGISTER_FORM_CONSTANTS.PASSWORD]}
        />
        <TextField
          error={validationObj && validationObj[REGISTER_FORM_CONSTANTS.CONFIRM_PASS]}
          label="Confirm Password"
          type="password"InputLabelProps={{
          shrink: true,
          }}
          value={form.confirmPass}
          onChange={(e)=>editForm('confirmPass',e.target.value)}
          helperText={validationObj && validationObj[REGISTER_FORM_CONSTANTS.CONFIRM_PASS]}
        />
        <Button className="RegisterComponentFormSubmit" onClick={()=>handleSubmit()} variant="contained" color="primary">
          Register
        </Button>
        <p className="links">Already have an account, Login</p>
      </form>
    </Grid>
  )
}

export default Register
