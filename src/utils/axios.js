import axios from "axios";
// import Swal from "sweetalert2";

let instance = axios.create({
  baseURL: "http://localhost:8080/",
  // baseURL: "https://pickerschoice-backend.herokuapp.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

instance.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log(error);
  }

  return Promise.reject(error);
});

export default instance;
