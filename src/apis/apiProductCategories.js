import axios from "../axios";

export const apiGetProductCategories = (params) => {
  return axios({
    url: "/productCategories",
    method: "get",
    params,
  });
};
