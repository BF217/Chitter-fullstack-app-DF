import { useContext, useState, createContext, useEffect } from "react";
import { login, logout } from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [authorID, setAuthorID] = useState(null);

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
  }, [token]);

  const handleLogin = async (credentials) => {
    try {
      const { token, authorID } = await login(credentials);
      setAuthorID(authorID);
      setToken(token);
      localStorage.setItem("token", token);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const handleLogout = () => {
    logout();
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        login: handleLogin,
        logout: handleLogout,
        setIsLoggedIn,
        error,
        success,
        setSuccess,
        isLoggedIn,
        setError,
        authorID,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
