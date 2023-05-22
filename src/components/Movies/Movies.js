import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAllMovies } from "../../api-help/api-help";
import MovieCard from "./MovieCard";

function Movies() {
  const [movie, setMovie] = useState([]);
 // const [filteredMovie, setFilteredMovie] = useState([])
  useEffect(() => {
    getAllMovies()
      .then((data) => setMovie(data.movie))
      .catch((e) => console.log(e));
      //filterUpcomingMovie()
  }, []);
 // console.log(movie);
  
  // function filterUpcomingMovie(movie){
  //   var filter = "description";
  //   var keyword = "Upcoming movie"

  //   let res = movie.filter(function(obj) {
  //      return obj[filter] ===keyword;
  //   })
  //   setFilteredMovie(res)
  // }

  return (
    <Box margin={"auto"} marginTop={4}>
      <Typography
        margin={"auto"}
        variant="h4"
        padding={2}
        width={"25%"}
        color={"white"}
        bgcolor={"#900c3f"}
        textAlign={"center"}
      >
        All Movies
      </Typography>
      <Box
      width={"100%"}
      margin={"auto"}
      marginTop={5}
      display={"flex"}
      justifyContent={"center"}
      flexWrap={"wrap"}
      >
       {movie && 
          movie.map((movie, index) => (
            <MovieCard
              id={movie._id}
              title={movie.title}
              posterUrl={movie.posterUrl}
              releaseDate={movie.releaseDate}
              description ={movie.description}
              key={index}
            />
          ))}
      </Box>
    </Box>
  );
}

export default Movies;
