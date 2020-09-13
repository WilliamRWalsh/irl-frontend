import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "template/";

export async function createTemplate(template) {
  const { data } = await http.post(apiEndpoint, template);
  return data;
}

export async function getAllUserTemplates() {
  const { data } = await http.get(apiEndpoint);
  return data;
}

export async function updateTemplate(template) {
  const { data } = await http.patch(apiEndpoint + template._id, template);
  return data;
}
