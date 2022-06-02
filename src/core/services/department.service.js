import HttpService from "./http.service";
import { apiUrl } from "../../config.json";

const apiEndpoint = `${apiUrl}`;
const apiEndpoint2 = `${apiUrl}/departments`;
const apiEndpoint3 = `${apiUrl}/departments?status=1`;
HttpService.setToken();

// export async function list() {
//   let url = `${apiEndpoint}`;
//   return await HttpService.get(url);
// }
export function list(url, data = {}) {
  return HttpService.get(`${apiEndpoint}/${url}`, data);
}
export function get(url, data = {}) {
  return HttpService.get(`${apiEndpoint2}`, data);
}
export function getActiveDepartment(url, data = {}) {
  return HttpService.get(`${apiEndpoint3}`, data);
}
export function save(url, data) {
  return HttpService.put(`${apiEndpoint}/${url}`, data);
}
export function post(url, data) {
  return HttpService.post(`${apiEndpoint}/${url}`, data);
}
export function remove(url, data = {}) {
  return HttpService.delete(`${apiEndpoint}/${url}`, data);
}
const logger = {
  get,
  getActiveDepartment,
  list,
  post,
  save,
  remove,
};
export default logger;
