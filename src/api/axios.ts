import axios from "axios";

export default axios.create({
  baseURL: `${process.env.REACT_APP_URL}`,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export const axiosPrivate = axios.create({
  baseURL: `${process.env.REACT_APP_URL}/users`,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
