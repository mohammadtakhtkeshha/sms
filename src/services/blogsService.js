import http from "./httpService";
import config from "./config.json";

export const blogsGet = (user) => {
  return http.get(
    `${config.baseUrl}api/report`
  );
};

export const blogsPost = (user) => {
    return http.post(
      `${config.baseUrl}api/send_sms`,user,{headers:{'Content-Type':'application/json'}}
    );
  };

