import React from "react";

const Button = (props) => {
  const { name, onClickHandler, style, iconsBefore, iconsAfter, icon } = props;

  return (
    <>
      <button
        type="button"
        className={
          style
            ? style
            : `
              flex w-full gap-2 justify-center items-center px-4 py-2 rounded-lg text-white bg-main text-semibold mt-4 hover:opacity-80`
        }
        onClick={() => onClickHandler && onClickHandler()}
      >
        {iconsBefore}
        {icon}
        <span>{name}</span>
        {iconsAfter}
      </button>
    </>
  );
};

export default Button;
