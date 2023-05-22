import {
  AppBar,
  Toolbar,
  Autocomplete,
  TextField,
  Tabs,
  Tab,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import MovieIcon from "@mui/icons-material/Movie";
import { Box } from "@mui/material";
import { getAllMovies } from "../api-help/api-help";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminAction, userAction } from "../Store";

//const dummyArr = ["Leo", "Jawan", "Indian-2"];

function Header() {
 const dispatch = useDispatch()
 const navigate = useNavigate();
  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const [value, setValue] = useState(0);
  const [movie, setMovie] = useState([]);
  
  useEffect(() => {
    getAllMovies()
      .then((data) => setMovie(data.movie))
      .catch((e) => console.log(e));
  }, []);

  console.log(movie);

  const logout = (isAdmin) =>{
  dispatch(isAdmin?adminAction.logout():userAction.logout())
  }

  function handleChange(e,val){
   
   const res = movie.find((m)=>m.title===val)
   if(isUserLoggedIn){
    navigate(`/booking/${res._id}`)
   }
  }
  return (
    <AppBar position="sticky" sx={{ bgcolor: "#2b2d42" }}>
      <Toolbar>
        <Box width={"20%"} display={"flex"} >
          <MovieIcon />
          <Typography  variant="h5" marginLeft={1}>BookMyShow</Typography>
        </Box>
        <Box width={"30%"} margin={"auto"}>
          <Autocomplete
          onChange={handleChange}
            freeSolo
            options={movie && movie.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                sx={{ input: { color: "white" } }}
                variant="standard"
                {...params}
                placeholder="Search"
              />
            )}
          />
        </Box>
        <Box display={"flex"}>
          <Tabs
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={Link} to="/movies" label="Movies" />
            {!isAdminLoggedIn && !isUserLoggedIn && (
              <>
                <Tab LinkComponent={Link} to="/admin" label="Admin" />
                <Tab LinkComponent={Link} to="/auth" label="Auth" />
              </>
            )}
            {
              isUserLoggedIn && (
                <>
                <Tab LinkComponent={Link} to="/user" label="Profile" />
                <Tab onClick={()=>logout(false)} LinkComponent={Link} to="/" label="Logout" />
                </>
              )
            }
            {
              isAdminLoggedIn && (
                <>
                <Tab LinkComponent={Link} to="/add" label="Add Movie" />
                <Tab LinkComponent={Link} to="/admin" label="Profile" />
                <Tab onClick={()=>logout(true)}  LinkComponent={Link} to="/" label="Logout" />
                </>
              )
            }
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
