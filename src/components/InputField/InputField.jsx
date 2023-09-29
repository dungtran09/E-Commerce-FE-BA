import React, { useEffect, useRef, useState } from "react";

const InputField = (props) => {
  const {
    value,
    setValue,
    keyName,
    fieldName,
    type,
    errMsg,
    isErr,
    style,
    icons,
    showPassword,
    onShowPasswordHandler,
  } = props;
  const [isDisplay, setIsDisplay] = useState(false);

  const handleInputBlur = () => {
    setIsDisplay(true);
  };
  const handleInputFocus = () => {
    setIsDisplay(false);
  };

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current.classList.contains("invalid")) {
    } else {
    }
  }, []);

  const onHandlerInputChange = (e) => {
    setValue((prev) => ({ ...prev, [keyName]: e.target?.value }));
  };

  return (
    <>
      <div className="w-full flex flex-col relative py-2">
        <label
          className="absolute top-0 text-[13px] font-semibold text-gray-800"
          htmlFor={fieldName}
        >
          {fieldName}
        </label>
        <div className="flex justify-between items-center">
          <input
            ref={ref}
            type={showPassword ? "text" : type}
            className={
              style
                ? style
                : `px-4 py-3 w-full my-4 mb-1 pe-10 outline-none bg-white boder border-gray-200 rounded-lg text-sm text-gray-900`
            }
            placeholder={fieldName}
            value={value}
            onChange={(e) => onHandlerInputChange(e)}
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
          />
          <span
            className="ml-[-30px] mt-[10px] mr-[10px] cursor-pointer"
            onClick={() => onShowPasswordHandler && onShowPasswordHandler()}
          >
            {showPassword ? icons?.showEye : icons?.hideEye}
          </span>
        </div>
        {isDisplay && isErr && (
          <p className="text-[11px] text-main">{errMsg}</p>
        )}
      </div>
    </>
  );
};

export default InputField;
