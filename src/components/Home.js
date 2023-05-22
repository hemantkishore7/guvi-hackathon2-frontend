import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MovieCard from "./Movies/MovieCard";
import { Link } from "react-router-dom";
import { getAllMovies } from "../api-help/api-help";

function Home() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    getAllMovies()
      .then((data) => setMovie(data.movie))
      .catch((e) => console.log(e));
  }, []);
  return (
    <Box width={"100%"} height="100%" margin={"auto"} marginTop={2}>
      <Box margin={"auto"} width={"80%"} height={"40vh"} padding={2}>
        <img
          src="https://w0.peakpx.com/wallpaper/720/8/HD-wallpaper-vijay-master-movie-poster.jpg"
          alt="master"
          width={"100%"}
          height={"100%"}
        />
      </Box>
      <Box padding={5} margin="auto">
        <Typography variant="h4" textAlign={"center"}>
          Latest Movies
        </Typography>
      </Box>
      <Box
        display="flex"
        width="80%"
        justifyContent={"center"}
        flexWrap="wrap"
        margin={"auto"}
      >
        {movie &&
          movie.map((movie, index) => (
            <MovieCard
              id={movie._id}
              title={movie.title}
              posterUrl={movie.posterUrl}
              description={movie.description}
              key={index}
            />
          ))}
      </Box>
      <Box display={"flex"} padding={5} margin={"auto"}>
        <Button
          LinkComponent={Link}
          to="/movies"
          variant="outline"
          sx={{ margin: "auto", color: "#2b2d42" }}
        >
          View All Movies
        </Button>
      </Box>
    </Box>
  );
}

export default Home;
