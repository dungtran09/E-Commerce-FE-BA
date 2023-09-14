import React from "react";

const Button = (props) => {
  const { name, onClickHandler, style, iconsBefore, iconsAfter } = props;

  return (
    <div className="w-full">
      <button
        type="button"
        className={
          style
            ? style
            : "px-4 py-2 rounded-lg text-white bg-main text-semibold w-full mt-4 hover:opacity-95 "
        }
        onClick={() => onClickHandler && onClickHandler()}
      >
        {iconsBefore}
        <span>{name}</span>
        {iconsAfter}
      </button>
    </div>
  );
};

export default Button;
