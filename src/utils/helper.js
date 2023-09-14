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

export const isRequired = (value) => {
  value = value?.trim();
  return value === "" ? false : true;
};

export const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

export const isEmailValid = (email) => {
  email = email?.trim();
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const isPasswordSecure = (password) => {
  const re = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})",
  );
  return re.test(password);
};

export const checkConfirmPassword = (password, passwordConfirm) => {
  passwordConfirm = passwordConfirm?.trim();
  password = password?.trim();
  return passwordConfirm === password;
};
