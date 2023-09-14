import React, { useState } from "react";

const InputField = (props) => {
  const { value, setValue, keyName, fieldName, type, errMsg, isErr } = props;
  const [isDisplay, setIsDisplay] = useState(false);

  const handleInputBlur = () => {
    setIsDisplay(true);
  };
  const handleInputFocus = () => {
    setIsDisplay(false);
  };

  return (
    <>
      <div className="w-full relative py-2">
        <label
          className="absolute top-0 text-[13px] text-white"
          htmlFor={fieldName}
        >
          {fieldName}
        </label>
        <input
          type={type || "text"}
          className="px-4 py-3 w-full my-4 mb-1 outline-none bg-white boder rounded-lg text-sm text-gray-900"
          placeholder={fieldName}
          value={value}
          onChange={(e) =>
            setValue((prev) => ({ ...prev, [keyName]: e.target.value }))
          }
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
        />
        {isDisplay && isErr && (
          <p className="text-[11px] text-main font-medium">{errMsg}</p>
        )}
      </div>
    </>
  );
};

export default InputField;
