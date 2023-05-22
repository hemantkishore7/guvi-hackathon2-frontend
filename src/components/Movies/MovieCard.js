import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ title, releaseDate, posterUrl, id ,description}) {
  return (
    <Card
      sx={{
        margin: 2,
        width: 300,
        height: 480,
        borderRadius: 5,
        ":hover": {
          boxShadow: "10px 10px 20px #ccc",
        },
      }}
    >
      <img src={posterUrl} alt={title} height={"70%"} width="100%" />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" textAlign={"ceneter"}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/* {new Date(releaseDate).toDateString()} */}
            {description}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          LinkComponent={Link}
          // to={`/ticket/${id}`}
          to={"/theater"}
          sx={{ margin: "auto" }}
          size="small"
          variant="contained"
          color="error"
        >
          Book
        </Button>
      </CardActions>
    </Card>
  );
}

export default MovieCard;
