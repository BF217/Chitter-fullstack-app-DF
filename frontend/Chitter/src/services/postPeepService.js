import { useAuth } from "../contexts/AuthContext";
import axios from "axios";

const postPeep = async (peep, token) => {
  const response = await axios.post(`${import.meta.env.VITE_POST_PEEP}`, peep, {
    headers: {
      "x-access-token": `${token}`,
    },
    validateStatus: function (status) {
      return true;
    },
  });

  if (response.status !== 200) {
    throw new Error(response.data.message);
  }
  return response.data;
};

export default postPeep;
