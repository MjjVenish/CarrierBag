import axios from "axios";

const server = axios.create({ baseURL: "http://localhost:3018" });

export default server;
