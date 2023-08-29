import { axiosPrivate } from "../api/axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const useAxiosPrivate = () => {
    const auth = useSelector((state: any) => {
        return state.auth.accessToken;
    });

    useEffect(() => {
        axiosPrivate.interceptors.request.use((config) => {
            config.headers["authorization"] = auth;
            // console.log(config, "config");
            // console.log(auth, "auth");

            return config;
        });
    }, [auth]);

    return axiosPrivate;
};
export default useAxiosPrivate;
