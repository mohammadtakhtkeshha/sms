import axios from "axios";
// Set Token Headers
axios.defaults.headers.post["Content-Type"] = ["application/ld+json"];
axios.defaults.headers.get["Content-Type"] = ["application/ld+json"];
axios.defaults.headers.put["Content-Type"] = "application/ld+json";
// const token = localStorage.getItem("token")
// axios.defaults.headers.post["Authorization"] = `Bearer ${token}`;
// axios.defaults.headers.put["Authorization"] = `Bearer ${token}`;

// axios.interceptors.response.use(null, (error) => {
//   const expectedErrors =
//     error.response &&
//     error.response.status >= 400 &&
//     error.response.status < 500;
//   if (!expectedErrors) {
//     console.log(error);
//   }
//   return Promise.reject(error);
// });

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
