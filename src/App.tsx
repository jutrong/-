import React, { createContext, useEffect } from "react";
import Router from "./Router";
import { RouterProvider } from "react-router-dom";
import axios from "./api/axios";
import { useDispatch } from "react-redux";
import { setToken } from "./redux/config/rootReducer";
import useAxiosPrivate from "./hooks/useAxiosPrivate";
import useSocket from "./hooks/useSocket";
import { Socket } from "socket.io-client"; 

export const SocketContext = createContext<Socket | undefined>(undefined);

const App = () => {
    const socket = useSocket();
    const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/auth/auto-sign-in")
      .then(({ headers }) => {
        console.log(headers, "auto-sign-in");
        dispatch(setToken(headers.authorization));
      })
      .catch((err) => {
        // err.status==401 로그아웃
        dispatch(setToken(""));
        console.log(err, "auto sign-in failed");
      });
  }, []);

    return (
      <SocketContext.Provider value={socket}>
        <RouterProvider router={Router} />
      </SocketContext.Provider>
    )
};

export default App;