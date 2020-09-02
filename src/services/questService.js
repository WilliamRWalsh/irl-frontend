import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "quest/";

export async function getAllUsersQuests() {
  const { data } = await http.get(apiEndpoint);
  return data;
}

export async function completeQuest(quest) {
  const { data } = await http.patch(apiEndpoint + quest._id);
  return data;
}
