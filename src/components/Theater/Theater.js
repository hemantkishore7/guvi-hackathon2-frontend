import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAllTheater } from "../../api-help/api-help";
import TheaterCard from "./TheaterCard";

function Theater() {
  const [cinema, setCinema] = useState([]);

  useEffect(() => {
    getAllTheater()
      .then((data) => setCinema(data.data))
      .catch((e) => console.log(e));
    //filterUpcomingMovie()
  }, []);
  //console.log(cinema);
  return (
    <Box margin={"auto"} marginTop={4}>
      <Typography
        margin={"auto"}
        variant="h4"
        bgcolor={"#900c3f"}
        color={"white"}
        width={"30%"}
        textAlign={"center"}
        borderRadius={5}
      >
        Cinemas
      </Typography>
      <Box
        width={"100%"}
        margin={"auto"}
        display={"flex"}
        flexWrap={"wrap"}
        padding={5}
        marginTop={5}
        justifyContent={"center"}
      >
        {cinema &&
          cinema.map((_d,i) => (
            <TheaterCard name={_d.name} address={_d.address} shows={_d.shows} key={i}/>
          ))}
      </Box>
    </Box>
  );
}

export default Theater;
