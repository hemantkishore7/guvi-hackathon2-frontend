import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function TheaterCard({ name, address, shows }) {
  //console.log(name,address);
  return (
    <Card
      sx={{
        margin: 2,
        width: "50%",
        height: 200,
        borderRadius: 3,
        ":hover": {
          boxShadow: "10px 10px 20px #ccc",
        },
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {address}
        </Typography>
      </CardContent>
      <CardActions>
        {shows &&
          shows.map((d, i) => (
            <Button LinkComponent={Link} to={`/booking`} size="small" sx={{margin:"auto"}} key={i} variant="outlined" color="success">
              {d}
            </Button>
          ))}
      </CardActions>
    </Card>
  );
}

export default TheaterCard;
