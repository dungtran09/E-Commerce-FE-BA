import axios from "../axios";

export const apiGetProducts = (params) => {
  return axios({
    url: "/products",
    method: "get",
    params: params,
  });
};
