import axios from "axios";

const server = axios.create({ baseURL: "https://cbs-fmz9.onrender.com" });

export default server;
