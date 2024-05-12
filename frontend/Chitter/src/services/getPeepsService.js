import axios from "axios";

const getPeeps = async () => {
  const response = await axios.get(`${import.meta.env.VITE_GET_ALL_PEEPS}`, {
    validateStatus: function (status) {
      return true;
    },
  });

  if (response.status !== 200) {
    throw new Error(response.data.message);
  }

  return response.data;
};

export default getPeeps;
