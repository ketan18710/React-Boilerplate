import React,{useState,useEffect} from 'react'
import {TextField, Button , Grid} from '@material-ui/core';
import {LOGIN_FORM_CONSTANTS} from 'utils/constants';
import { ValidationHelpers } from 'helpers';
import './style.scss'
function Login(props) {
  const [validationObj, setValidationObj] = useState({});
  const [form, setForm] = useState({
    username : '',
    password : '',
  })
  const editForm = (key,value) => {
    setForm({
      ...form,
      [key] : value
    })
  }
  const handleSubmit = () => {
    /** Login Validation */
    const validation = ValidationHelpers.handleLoginFormValidation(form)
    setValidationObj(validation);

    if (validation &&
       !validation.username && !validation.password) {
         check
    }
  };
  return (
    <Grid item xs={12} className="LoginComponent">
      <form className="LoginComponentForm">
        <TextField
          error={validationObj && validationObj[LOGIN_FORM_CONSTANTS.USERNAME]}
          label="Username"
          type="text"
          value={form.username}
          onChange={(e)=>editForm('username',e.target.value)}
          helperText={validationObj && validationObj[LOGIN_FORM_CONSTANTS.USERNAME]}
        />
        <TextField
          error={validationObj && validationObj[LOGIN_FORM_CONSTANTS.PASSWORD]}
          label="Password"
          type="password"
          value={form.password}
          onChange={(e)=>editForm('password',e.target.value)}
          helperText={validationObj && validationObj[LOGIN_FORM_CONSTANTS.PASSWORD]}
        />
        <Button className="LoginComponentFormSubmit" onClick={()=>handleSubmit()} variant="contained" color="primary">
          Login
        </Button>
        <p className="links">Create New Account</p>
        <p className="links">Forgot password</p>
      </form>
    </Grid>
  )
}

export default Login
