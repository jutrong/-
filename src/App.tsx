import React, { createContext, useEffect } from "react";
import Router from "./Router";
import { RouterProvider, useNavigate } from "react-router-dom";
import axios from "./api/axios";
import { useDispatch } from "react-redux";
import { setToken } from "./redux/config/rootReducer";
import useAxiosPrivate from "./hooks/useAxiosPrivate";
import useSocket from "./hooks/useSocket";
import { Socket } from "socket.io-client";
import Main from "./pages/Main";

export const SocketContext = createContext<Socket | undefined>(undefined);

const App = () => {
  const socket = useSocket();
  const dispatch = useDispatch();
  // const navigation = useNavigate();

  useEffect(() => {
    const pathname = window.location.pathname;

    if (pathname !== "/") {
      axios
        .get("/auth/auto-sign-in")
        .then((response) => {
          // if (response.status === 204) {
          //   if (!pathname.includes("initInfo"))
          //     window.location.href = "initInfo";
          // } else {
          console.log(response.headers, "auto-sign-in");
          dispatch(setToken(response.headers.authorization));
          // }
        })
        .catch((err) => {
          // err.status==401 로그아웃
          dispatch(setToken(""));
          console.log(err, "auto sign-in failed");
        });
    }
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      <RouterProvider router={Router} fallbackElement={<Main />} />
    </SocketContext.Provider>
  );
};

export default App;
