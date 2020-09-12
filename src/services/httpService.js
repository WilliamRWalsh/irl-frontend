import axios from "axios";
import { getJWT, setJWT } from "./jwtService";

axios.defaults.headers.common["Authorization"] = getJWT();

const responseSuccess = data => {
  const jwt = data.headers["authorization"];
  if (jwt) setJWT(jwt);
  return Promise.resolve(data);
};

const responseError = error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log("Logging the error", error);
    alert("An unexpected error occurred.");
  }

  return Promise.reject(error);
};

axios.interceptors.response.use(responseSuccess, responseError);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};
