import React, { useState, useContext } from "react";
import useFetch from "./useFetch";
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const appContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("batman");
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`);

  return (
    <appContext.Provider value={{ isLoading, error, movies, query, setQuery }}>
      {children}
    </appContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(appContext);
};

export { appContext, AppProvider };
