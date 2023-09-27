import axios from "../axios";

export const apiRatings = (data, id, token) => {
  return axios({
    url: "/products/ratings/" + id,
    method: "patch",
    data,
    headers: token,
  });
};
