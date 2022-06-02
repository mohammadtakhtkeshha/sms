import axios from "axios";
import { retrieveItem } from "../helpers/index";
import { tokenKey } from "../../config";
// showError
const headers = new Headers();
headers.set("Accept", "application/ld+json");

function setToken() {
  const token = retrieveItem(tokenKey);

  // if (token) headers.set("Authorization", `Bearer ${token}`);

  if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

async function handleResponse(res) {
  // <<<<<<< HEAD
  // const { enqueueSnackbar } = useSnackbar()

 

  // =======
  //   const { status } = res;
  //   if ([400, 401, 403, 422].includes(status)) {
  //     const result = await res.json();
  //     alert(result);
  //     // const { message, ["hydra:description"]: error, violations = [], errors } = result;
  //     // if (error) showError({ variant: "error", message: error });
  //     // if (message) showError({ variant: "error", message });
  //     // if (violations.length > 0) showError({ variant: "error", message: violations[0].message });
  //     // if (!!errors) showError({ variant: "error", message: errors[Object.keys(errors)[0]][0] });

  //     return null;
  //   }

  // >>>>>>> 835ce27f360d81af0a7e580b58c1955f3317d1de
  return Promise.reject(res);
}

export function get(url) {
  return axios
    .get(url, {
      headers: {
        "Content-Type": "application/json",
        //   //the token is a variable which holds the token
        //   //  "Access-Control-Allow-Origin": "*",
      },
    })
    .catch((data) => handleResponse(data));
}

export function post(url, data) {
  return axios
    .post(url, data, {
      headers: {
        "Content-Type": "application/json",
        //the token is a variable which holds the token
        //  "Access-Control-Allow-Origin": "*",
      },
      // withCredentials: true
    })
    .then((response) => response.data)
    .catch((err) => {
      const {
        response: { data },
      } = err;
      handleResponse(err);
      return Promise.reject(data);
    });
}

export function put(url, data) {
  // const { enqueueSnackbar } = useSnackbar()
  return axios
    .put(url, data, {
      headers: {
        "Content-Type": "application/json",
        //the token is a variable which holds the token
        //  "Access-Control-Allow-Origin": "*",
      },
      // withCredentials: true
    })
    .then((response) => response.data)
    .catch((err) => {
      const {
        response: { data },
      } = err;
      handleResponse(err);
      return Promise.reject(data);
    });
}

export function remove(url) {
  return axios
    .delete(url, {
      headers: {
        "Content-Type": "application/json",
        //the token is a variable which holds the token
        //  "Access-Control-Allow-Origin": "*",
      },
      // withCredentials: true
    })
    .catch((err) => {
      const {
        response: { data },
      } = err;
      handleResponse(err);
      return Promise.reject(data);
    });
}

const HttpService = {
  get: get,
  post: post,
  put: put,
  delete: remove,
  setToken: setToken,
};

export default HttpService;
