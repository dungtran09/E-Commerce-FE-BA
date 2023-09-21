import axios from "../axios";

export const apiGetBrands = () => {
  return axios({
    url: "/brands",
    method: "get",
  });
};
