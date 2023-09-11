import icons from "./icons";

const { AiOutlineStar, AiFillStar } = icons;

export const createSlug = (str) => {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(" ")
    .join("-");
};

export const formatNumber = (number) => {
  if (!number) return;
  return Number(number.toFixed(1)).toLocaleString();
};

export const calcRating = (number) => {
  if (!number) return;

  const stars = [];

  for (let i = 0; i < Math.floor(number); i++) {
    stars.push(<AiFillStar color="orange" key={i} />);
  }

  while (stars.length < 5) {
    stars.push(<AiOutlineStar color="orange" key={stars.length} />);
  }
  return stars;
};
