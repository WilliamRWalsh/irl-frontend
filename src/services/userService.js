import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "user/";

export async function register(email, password) {
  /*
   *  Register User and store JWT
   */
  const { data } = await http.post(apiEndpoint, { email, password });
  return data;
}
