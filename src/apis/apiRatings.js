import axios from "../axios";

export const apiRatings = (data, id) => {
  return axios({
    url: "/products/ratings/" + id,
    method: "patch",
    data,
  });
};
