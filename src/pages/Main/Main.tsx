import React from "react";
import { useSelector } from "react-redux";
import { IRootState, useAppDispatch } from "../../store";
import { logoutUser } from "../../store/auth/actionCreators";
import Login from "./components/Login";

const Main = () => {
  const dispatch = useAppDispatch();

  const isLoggedIn = useSelector(
    (state: IRootState) => !!state.auth.authData.accessToken
  );

  const renderProfile = () => (
    <div>
      <div>Вы успушно авторизовались</div>
      <button onClick={() => dispatch(logoutUser())}>Logout</button>
    </div>
  );

  return (
    <div>
      <h1>Main</h1>
      {isLoggedIn ? renderProfile() : <Login />}
    </div>
  );
};

export default Main;
