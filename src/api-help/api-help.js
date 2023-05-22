import axios from "axios";

export const getAllMovies = async () => {
  const res = await axios.get("/movie/all").catch((e) => console.log(e));

  if (res.status !== 200) {
    return console.log("No movie");
  }

  const data = await res.data;
  return data;
};

export const getAllTheater = async () => {
  const res = await axios.get("/theater/all").catch((e) => console.log(e));

  if (res.status !== 200) {
    return console.log("No Theater");
  }

  const data = await res.data;
  return data;
};

export const sendUserAuthRequest = async (data, signup) => {
  const res = await axios
    .post(`/user/${signup ? "signup" : "login"}`, {
      name: signup ? data.name : "",
      email: data.email,
      password: data.password,
    })
    .catch((e) => console.log(e));

  if (res.status !== 200 && res.status !== 201) {
    console.log("Error occur");
  }

  const response = await res.data;
  return response;
};

export const sendAdminAuthRequest = async (data) => {
  const res = await axios
    .post("/admin/login", {
      email: data.email,
      password: data.password,
    })
    .catch((e) => console.log(e));

  if (res.status !== 200) {
    console.log("Error Occur");
  }
  const response = await res.data;
  return response;
};

export const getMovieDetails = async (id) => {
  const res = await axios.get(`/movie/${id}`).catch((e) => console.log(e));

  if (res.status !== 200) {
    return console.log("error");
  }
  const resData = await res.data;
  return resData;
};

export const newBooking = async (data) => {
  const res = await axios
    .post("/booking/ticket", {
      movie: data.movie,
      seatNumber: data.seatNumber,
      date: data.date,
      user: localStorage.getItem("userId"),
    })
    .catch((e) => console.log(e));

  if (res.status !== 200) {
    return console.log("error");
  }
  const response = await res.data;
  return response;
};

export const getUserBooking = async () => {
  const id = localStorage.getItem("userId");
  const res = await axios.get(`/booking/${id}`).catch((e) => {
    console.log(e);
  });

  if (res.status !== 200) {
    return console.log("UnExpected Error");
  }

  const response = await res.data;
  return response;
};

export const getUser = async() =>{
  const id = localStorage.getItem("userId")

  const res = await axios.get(`/user/${id}`).catch((e) => {
    console.log(e);
  });

  if (res.status !== 200) {
    return console.log("UnExpected Error");
  }

  const response = await res.data;
  return response;
}