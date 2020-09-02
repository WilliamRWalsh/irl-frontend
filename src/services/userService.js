import http from "./httpService";
import { apiUrl } from "../config.json";
import { setJWT } from "./jwtService";

const apiEndpoint = apiUrl + "user/";

export async function register(email, password) {
  /*
   *  Register User and store JWT
   */
  const { headers } = await http.post(apiEndpoint, { email, password });

  const jwt = headers["x-auth-token"];
  setJWT(jwt);
}
