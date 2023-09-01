import axios from "axios";

export default axios.create({
  // baseURL: `${process.env.REACT_APP_URL}`,
  baseURL: `http://146.56.143.108/api/v1`,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
