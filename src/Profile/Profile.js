import React, { Fragment, useEffect, useState } from "react";
import { getUser, getUserBooking } from "../api-help/api-help";
import { Box, IconButton, List, ListItem, ListItemText, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";


function Profile() {
  const [user, setUser] = useState();

  useEffect(() => {
    getUser()
      .then((res) => setUser(res.data))
      .catch((e) => console.log(e));
  }, []);
  console.log(user);
  return (
    <Box width={"100%"} display={"flex"}>
      {user && user.length > 0 && (
        <Fragment>
          <Box
            flexDirection={"column"}
            justifyContent="center"
            alignItems={"center"}
            width={"30%"}
            padding={3}
          >
            <AccountCircleIcon
              sx={{ fontSize: "10rem", textAlign: "center", ml: 3 }}
            />
            <Typography
              padding={1}
              width={"auto"}
              textAlign={"center"}
              border={"1px solid #ccc"}
              borderRadius={6}
            >
              {" "}
              Name : 
            </Typography>
            <Typography
              marginTop={1}
              padding={1}
              width={"auto"}
              textAlign={"center"}
              border={"1px solid #ccc"}
              borderRadius={6}
            >
              {" "}
              Email : 
            </Typography>
          </Box>
          <Box width={"70%"} display={"flex"} flexDirection={"column"}>
            <Typography
              variant="h4"
              fontFamily={"verdana"}
              textAlign={"center"}
              padding={2}
            >
              {" "}
              Booking
            </Typography>
            <Box
              margin={"auto"}
              display={"flex"}
              flexDirection={"column"}
              width={"80%"}
            >
              {/* <List>
                {booking.map((booking, index) => (
                  <ListItem
                    sx={{
                      bgcolor: "#00d386",
                      color: "white",
                      textAlign: "center",
                      margin: 1,
                    }}
                  >
    <ListItemText sx={{margin:1,width:"auto",textAlign:"left"}}>
        Movie : {booking.movie.title}
    </ListItemText>
    <ListItemText sx={{margin:1,width:"auto",textAlign:"left"}}>
        Seat : {booking.seatNumber}
    </ListItemText>
    <ListItemText sx={{margin:1,width:"auto",textAlign:"left"}}>
        Date : {new Date(booking.date).toDateString()}
    </ListItemText>
    <IconButton>
        
    </IconButton>
                  </ListItem>
                ))}
              </List> */}
            </Box>
          </Box>
        </Fragment>
      )}
    </Box>
  );
}

export default Profile;
