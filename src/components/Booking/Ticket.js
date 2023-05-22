import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, newBooking } from "../../api-help/api-help";
import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";

function Ticket() {
  const [movie, setMovie] = useState();
  const [input,setInput] = useState({seatNumber:"",date:""})
  const id = useParams().id;
  console.log(id);

  useEffect(() => {
    getMovieDetails(id)
      .then((res) => setMovie(res.data))
      .catch((e) => console.log(e));
  }, [id]);

  const handleChange =(e)=>{
 setInput((prevState)=>({
  ...prevState,
  [e.target.name]:e.target.value,
 }));
  }

  function handleSubmit(e){
  e.preventDefault();
  console.log(input);
  newBooking({...input,movie: movie._id})
  .then((res)=>console.log(res))
  .catch((e)=>console.log(e))
  }

  console.log(movie);
  return (
    <div>
      {movie && (
        <Fragment>
          <Typography
            padding={3}
            fontFamily="fantasy"
            variant="h4"
            textAlign={"center"}
          >
            Book Ticket Of Movie: {movie.title}
          </Typography>
          <Box display={"flex"} justifyContent={"center"}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"column"}
              padding={3}
              width={"50%"}
              marginRight={"auto"}
            >
              <img
                width="60%"
                src={movie.posterUrl}
                alt={movie.title}
                height={"400px"}
              ></img>
              <Box width={"80%"} marginTop={3} padding={2}>
                <Typography paddingTop={2}>{movie.description}</Typography>
                <Typography fontWeight={"bold"} marginTop={1}>
                  Starrer: {movie.actors.map((a) => " " + a + ", ")}
                </Typography>
                <Typography fontWeight={"bold"} marginTop={1}>
                  Released Date: {new Date(movie.releaseDate).toDateString()}
                </Typography>
              </Box>
            </Box>
            <Box width={"50%"} padding={3}>
              <form onSubmit={handleSubmit}>
                <Box
                  padding={5}
                  margin={"auto"}
                  display={"flex"}
                  flexDirection={"column"}
                >
                  <FormLabel>Seat Number</FormLabel>
                  <TextField
                  value={input.seatNumber}
                  onChange={handleChange}
                    name="seatNumber"
                    type="number"
                    margin="normal"
                    variant="standard"
                  ></TextField>

                  <FormLabel>Date</FormLabel>
                  <TextField
                  value={input.date}
                  onChange={handleChange}
                    name="date"
                    type="date"
                    margin="normal"
                    variant="standard"
                  ></TextField>
                  <Button type="submit" sx={{mt:3}}>
                    Book
                  </Button>
                </Box>
              </form>
            </Box>
          </Box>
        </Fragment>
      )}
    </div>
  );
}

export default Ticket;
