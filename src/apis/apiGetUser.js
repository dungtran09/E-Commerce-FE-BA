import axios from "../axios";

export const apiGetUser = (id) => {
  return axios({
    url: "/users/" + id,
    method: "get",
    withCredentials: true,
  });
};
