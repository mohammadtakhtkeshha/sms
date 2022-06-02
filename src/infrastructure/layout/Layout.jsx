import React, { useLayoutEffect } from "react";
import Login from "./login";
import Authorized from "./Authorized";
import LocalStorageService from "../../libraries/storage/localStorageService";
import httpService from "../../core/services/http.service";
import { useAuthstate } from "../../context";
import { useAuthDispatch } from "../../context";
import { actionType } from "../../context/reduser";


export default function App() {
  const dispatch = useAuthDispatch();

  const { token, Logout } = useAuthstate();
  // const [lodingset, setLodingSet] = React.useState();

  useLayoutEffect(() => {
    dispatch({
      type: actionType.LOGIN_REQUEST,
    });
    const token = LocalStorageService.retrieve("token");
    const user = LocalStorageService.retrieve("user");
    const permissionParse = JSON.parse(user);
    const permissionArr = permissionParse?.permissions;
    if (token && user) {
      httpService.setToken();
      dispatch({
        type: actionType.LOGIN_SUCCESS,
        payload: {
          user: user,
          token: token,
          permission: permissionArr,
          Logout: true,
          loding: true,
        },
      });
    }
  }, [dispatch, Logout, token]);

  return (
    <>
      {!Logout ? (
        <Login />
      ) : (
        <Authorized />
      )}
    </>
  );
}
