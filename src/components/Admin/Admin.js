import React from "react";
import AuthForm from "../Auth/AuthForm";
import { sendAdminAuthRequest } from "../../api-help/api-help";
import { useDispatch } from "react-redux";
import { adminAction } from "../../Store";
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const onResReceived =(data)=>{
    console.log(data);
    dispatch(adminAction.login());
    localStorage.setItem("adminId",data.id)
    localStorage.setItem("token",data.token)
    navigate("/")
  }
  function getData(data) {
    console.log("admin", data);
    sendAdminAuthRequest(data.input)
      .then(onResReceived)
     
      .catch((e) => console.log(e));
  }
  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={true} />
    </div>
  );
}

export default Admin;
