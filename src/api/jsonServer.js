import axios from "axios";

const instance = axios.create(
    { baseURL: "http://bfe6-117-217-55-84.ngrok.io" }
);

export default instance;