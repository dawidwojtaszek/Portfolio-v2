"use client";

import {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import { loadData } from "../utilities/apiUtilities";

const appContext = createContext();

export const Provider = ({ children }) => {
  const [projects, setProjects] = useState();
  const [currentProjects, setCurrentProjects] = useState();
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentFilters, setCurrentFilter] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // Set projects to state
        const projects = await loadData();
        const shortList = projects.slice(0, 4);
        setProjects(projects);
        setCurrentProjects(shortList);
        // Set Tags to state
        const tagsList = Array.from(
          new Set(
            projects
              .map((e) => {
                return e.tags;
              })
              .flat()
          )
        );
        setTags(tagsList);
        // Toggle isLoading state
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const value = {
    projects,
    setProjects,
    isLoading,
    setIsLoading,
    tags,
    currentFilters,
    setCurrentFilter,
    currentProjects,
    setCurrentProjects,
  };

  return <appContext.Provider value={value}>{children}</appContext.Provider>;
};

export const useAppContext = () => {
  return useContext(appContext);
};
