import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "skill/";

export async function createSkill(skill) {
  const { data } = await http.post(apiEndpoint, skill);
  return data;
}

export async function getAllUsersSkills() {
  const { data } = await http.get(apiEndpoint);
  return data;
}
