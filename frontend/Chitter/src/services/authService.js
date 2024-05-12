import axios from "axios";

export const login = async (credentials) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_LOGIN_ROUTE}`,
      credentials,
      {
        validateStatus: function (status) {
          return true;
        },
      }
    );
    if (response.status !== 200) {
      throw new Error("Invalid username/email or password");
    }
    const token = response.data.accessToken;
    const authorID = response.data.id;
    return { token, authorID };
  } catch (error) {
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};
