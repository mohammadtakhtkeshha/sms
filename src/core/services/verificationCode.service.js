import HttpService from "./http.service";

import { apiUrl } from "../../config.json";
const apiEndpoint = `${apiUrl}`;
const apiEndpointConfirmation=`${apiEndpoint}/${"auth"}`
export function get(url, data = {}) {
  return HttpService.get(`${apiEndpoint}/${url}`, data);
}

export function post(url, data) {
  return HttpService.post(`${apiEndpointConfirmation}/${url}`, data);
}
