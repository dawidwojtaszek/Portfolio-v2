"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { loadData } from "../utilities/apiUtilities";

const appContext = createContext();

export const Provider = ({ children }) => {
  const [projects, setProjects] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await loadData();
        setProjects(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const value = { projects, setProjects, isLoading, setIsLoading };

  return <appContext.Provider value={value}>{children}</appContext.Provider>;
};

export const useAppContext = () => {
  return useContext(appContext);
};
