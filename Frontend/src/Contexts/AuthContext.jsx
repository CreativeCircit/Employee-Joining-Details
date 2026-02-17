import React, { createContext, useContext, useEffect, useState } from "react";
import { handleRequest } from "../Services/handleRequest";
import authService from "../Services/authService";

const AuthApi = createContext();

export const AuthProvider = ({ children }) => {
  const [profileData, setProfileData] = useState();
  const [loading, setLoading] = useState(true);

  const RegisterUser = async (e) => {
    await handleRequest(
      () => authService.register(e),
      "Account created successfully",
      (data) => setProfileData(data),
    );
  };

  // 1. Fetch Profile on Mount
  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      // Assuming getProfile returns the user object directly or inside data
      const response = await authService.getProfile(); 
      console.log(response.data);
      
      setProfileData(response.data); 
    } catch (error) {
      // If error (e.g., 401 Unauthorized), we just set profile to null
      setProfileData(null);
    } finally {
      setLoading(false);
    }
  };
  return (
    <AuthApi.Provider value={{ RegisterUser, profileData,loading,setProfileData }}>
      {children}
    </AuthApi.Provider>
  );
};

export const useAuth = () => useContext(AuthApi);
