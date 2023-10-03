import React, { createContext, useContext, useState } from "react";
const StateContext = createContext();

const initialState = {
  chat: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [currentColor, setCurrentColor] = useState("#888888");

  const handlerClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true });
  const [screenSize, setScreenSize] = useState(undefined);

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handlerClick,
        screenSize,
        setScreenSize,
        currentColor,
        setCurrentColor,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
