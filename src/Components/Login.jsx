import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useFormInputValidation } from 'react-form-input-validation';

const Login = () => {
    // var[sname,setsname] =useState();
    // const cap_value  =(event) =>{
    //     setsname(sname=(event.target.value))
    //     console.log(sname)
    // }
    const[fields,error,form]=useFormInputValidation({
        Email_Address:"",
        password:""},{
                      Email_Address:"required|email",
                      password:"required"
    })
  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
      <br/><br/>
      <h1>Welcome to login page</h1>
      <TextField
      value={fields.Email_Address}
      onBlur={form.handleBlurEvent}
      onChange={form.handleChangeEvent}
    //   value={sname}
    //   onChange={cap_value}
        name='Email_Address'
        id="outlined-error"
        label="Email"
        helperText={error.Email_Address?error.Email_Address:""}
        // defaultValue="Hello World"
      />
      <br/>
      <TextField
        value={fields.password}
        onBlur={form.handleBlurEvent}
        onChange={form.handleChangeEvent}
        name='password'
  
        id="outlined-error-helper-text"
        label="password"
        helperText={error.password?error.password:""}
        // defaultValue="Hello World"
        // helperText="Incorrect entry."
      />
    </div>                                                                                       
  </Box>
  )
}

export default Login
