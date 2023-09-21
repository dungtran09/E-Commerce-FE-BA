import axios from "../axios";

export const apiGetProducts = (params) => {
  return axios({
    url: "/products",
    method: "get",
    params,
  });
};

export const apiGetProductsByCategoryId = (_id, params) => {
  return axios({
    url: "/products?category=" + _id,
    method: "get",
    params,
  });
};

export const apiGetColors = (params) => {
  return axios({
    url: "/products/colors",
    method: "get",
    params,
  });
};

export const apiCountCategory = (params) => {
  return axios({
    url: "/products/count",
    method: "get",
    params,
  });
};
