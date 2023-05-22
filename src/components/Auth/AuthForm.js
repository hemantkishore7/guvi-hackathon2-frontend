import {
  Box,
  Button,
  Dialog,
  FormLabel,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
 
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";
const labelStyle = { mt: 1, mb: 1 };


function AuthForm({onSubmit, isAdmin}) {
  
  const [isSignup, setIsSignup] = useState(false);
  const [input,setInput] = useState({
    name:"",
    email:"",
    password:""
  })


  function handleChange(e){
    setInput((prevState)=>({
        ...prevState,
        [e.target.name]: e.target.value
    }));
  }

  function handleSubmit(e){
   e.preventDefault()
   onSubmit({input,signup : isAdmin? false : isSignup});
  }



  return (
    <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={true}>
      <Box sx={{ ml: "auto", padding: 1 }}>
        <IconButton LinkComponent={Link} to="/">
          <CloseIcon />
        </IconButton>
      </Box>
      <Typography variant="h4" textAlign={"center"}>
        {isSignup?"Sign Up":"Login"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          padding={3}
          display={"flex"}
          justifyContent={"center"}
          flexDirection="column"
          width={400}
          margin="auto"
          alignContent={"center"}
        >
          {!isAdmin && isSignup && (
            <>
              {" "}
              <FormLabel sx={labelStyle}>Name</FormLabel>
              <TextField value={input.name} onChange={handleChange} margin="normal" type="text" name="name" />
            </>
          )}
          <FormLabel sx={labelStyle}>Email</FormLabel>
          <TextField  value={input.email} onChange={handleChange}  margin="normal" type="email" name="email" />
          <FormLabel sx={labelStyle}>Password</FormLabel>
          <TextField value={input.password} onChange={handleChange}  margin="normal" type="password" name="password" />
          <Button
            sx={{ mt: 2, borderRadius: 10, bgcolor: "#2b2d42" }}
            type="submit"
            fullWidth
            variant="contained"
          >
            {isSignup ? "Sign up" : "Login"}
          </Button>
          {!isAdmin && (<Button
            onClick={() => setIsSignup(!isSignup)}
            sx={{ mt: 2, borderRadius: 10 }}
            fullWidth
          >
            Switch to {isSignup ? "Login" : "Sign up"}
          </Button>)}
        </Box>
      </form>
    </Dialog>
  );
}

export default AuthForm;
