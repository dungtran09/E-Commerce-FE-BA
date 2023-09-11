import axios from "../axios";

export const apiGetProductCategories = () => {
  return axios({
    url: "/productCategories",
    method: "get",
  });
};
