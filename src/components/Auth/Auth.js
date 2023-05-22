import React from "react";
import AuthForm from "./AuthForm";
import { sendUserAuthRequest } from "../../api-help/api-help";
import { useDispatch } from "react-redux";
import { userAction } from "../../Store";

function Auth() {
  const dispatch = useDispatch();
  const onResReceived = (data)=>{
    console.log(data);
    dispatch(userAction.login());
    localStorage.setItem("userId",data.data._id)
  }
  function getData(data) {
    console.log("auth", data);
    sendUserAuthRequest(data.input, data.signup)
      .then(onResReceived)
      .catch((e) => console.log(e));
  }
  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={false} />
    </div>
  );
}

export default Auth;
