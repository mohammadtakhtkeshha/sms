import http from "./httpService";
import config from "./config.json";

export const loginPost = (user) => {
  return http.post(
    `${config.baseUrl}/authentication-token`,
    JSON.stringify(user),
    // { 
    //   // headers: { 'Access-Control-Allow-Origin': '*' },
    // }
  );
};

