import axios from "axios";
import { getJWT } from "./jwtService";

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log("Logging the error", error);
    alert("An unexpected error occurred.");
  }

  return Promise.reject(error);
});

axios.interceptors.request.use(config => {
  const jwt = getJWT();
  config.headers.Authorization = jwt ? jwt : "";

  return config;
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
