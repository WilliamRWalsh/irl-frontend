import http from "./httpService";
import { apiUrl } from "../config.json";
import { setJWT } from "./jwtService";

const apiEndpoint = apiUrl + "quest/";

export async function getAllUsersQuests() {
  const { data } = await http.get(apiEndpoint, {});
  return data;
}
