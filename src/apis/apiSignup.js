import axios from "../axios";

export const apiSignup = (data) => {
  return axios({
    url: "/users/signup",
    method: "post",
    data,
  });
};
