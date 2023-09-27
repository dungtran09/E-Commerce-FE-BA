import axios from "../axios";

export const apiLogin = (data) => {
  return axios({
    url: "/users/login",
    method: "post",
    withCredentials: false,
    data,
  });
};
