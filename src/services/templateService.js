import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "template/";

export async function createTemplate(template) {
  const { data } = await http.post(apiEndpoint, template);
  return data;
}
