import axios from "../axios";

export const apiGetProduct = (id) => {
  return axios({
    url: "/products/" + id,
    method: "get",
  });
};
