import axios from "axios";

const instance = axios.create({
  baseURL: "//https://autonomizebackend.onrender.com",
});

export default instance;



