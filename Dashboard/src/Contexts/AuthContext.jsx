import React, { createContext, useContext, useEffect, useState } from "react";
import { handleRequest } from "../Services/handleRequest";
import authService from "../Services/authService";

const AuthApi = createContext();

export const AuthProvider = ({ children }) => {
  const [allData, setAllData] = useState();
  const [loading, setLoading] = useState(true);
  const [cardData, setCardData] = useState(allData);

  const [mode, setMode] = useState(localStorage.getItem("appMode")||"corporate");

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = async () => {
    try {
      setLoading(true);
      const { data } = await authService.getAll();
      setAllData(data);
      setCardData(data)
    } catch (error) {
      setAllData(null);
    } finally {
      setLoading(false);
    }
  };
  return (
    <AuthApi.Provider value={{ loading, allData, setAllData, mode, setMode,cardData, setCardData }}>
      {children}
    </AuthApi.Provider>
  );
};

export const useAuth = () => useContext(AuthApi);
