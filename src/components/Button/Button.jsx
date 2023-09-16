import React from "react";

const Button = (props) => {
  const { name, onClickHandler, style, iconsBefore, iconsAfter, icon } = props;

  return (
    <div className="w-full">
      <button
        type="button"
        className={
          style
            ? style
            : "flex gap-2 justify-center items-center px-4 py-2 rounded-lg text-white bg-main text-semibold w-full mt-4 hover:opacity-80"
        }
        onClick={() => onClickHandler && onClickHandler()}
      >
        {iconsBefore}
        {icon}
        <span>{name}</span>
        {iconsAfter}
      </button>
    </div>
  );
};

export default Button;
