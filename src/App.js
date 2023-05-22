import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Movies from "./components/Movies/Movies";
import Admin from "./components/Admin/Admin";
import Auth from "./components/Auth/Auth";
import Theater from "./components/Theater/Theater";
import Booking from "./components/Booking/Booking";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { adminAction, userAction } from "./Store";
import Ticket from "./components/Booking/Ticket";
import Profile from "./Profile/Profile";

function App() {
  const dispatch = useDispatch();

  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  console.log("admin", isAdminLoggedIn);
  console.log("user", isUserLoggedIn);

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(userAction.login());
    } else if (localStorage.getItem("adminId")) {
      dispatch(adminAction.login());
    }
  }, []);

  return (
    <div>
      <Header />
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />

          {!isUserLoggedIn && !isAdminLoggedIn && (
            <>
              {" "}
              <Route path="/admin" element={<Admin />} />
              <Route path="/auth" element={<Auth />} />
            </>
          )}

          <Route path="/theater" element={<Theater />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/ticket/:id" element={<Ticket />} />
          <Route path="/user" element={<Profile />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
