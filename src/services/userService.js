import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "user/";

export async function register(email, password) {
  const { headers } = await http.post(apiEndpoint, { email, password });
  console.log(headers);
}
