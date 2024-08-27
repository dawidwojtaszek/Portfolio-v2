"use client";

import { createContext, useContext, useState, useEffect } from "react";
const appContext = createContext();

export const Provider = ({ children }) => {
  const [projects, setProjects] = useState();

  const value = { projects, setProjects };

  return <appContext.Provider value={value}>{children}</appContext.Provider>;
};

export const useAppContext = () => {
  return useContext(appContext);
};
