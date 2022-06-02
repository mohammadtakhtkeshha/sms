import HttpService from "./http.service";
import { apiUrl } from "../../config.json";

const apiEndpoint = `${apiUrl}`;

export function get(url, data = {}) {
  return HttpService.get(`${apiEndpoint}/${url}`, data);
}

export function post(url, data) {
  return HttpService.post(`${apiEndpoint}/${url}`, data);
}

export function postToken(url, data) {
  return HttpService.post(`${apiEndpoint}/${url}`, data);
}