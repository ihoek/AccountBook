/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};

export const MenuProvider = ({ children }) => {
  const [activeMenuId, setActiveMenuId] = useState("home");
  const [activeMenuName, setActiveMenuName] = useState("메인화면");

  const setActiveMenu = (id, name) => {
    setActiveMenuId(id);
    setActiveMenuName(name);
  };

  return (
    <MenuContext.Provider
      value={{ activeMenuId, activeMenuName, setActiveMenu }}
    >
      {children}
    </MenuContext.Provider>
  );
};
