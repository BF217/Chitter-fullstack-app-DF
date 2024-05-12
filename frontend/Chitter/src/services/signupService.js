import axios from "axios";

const signup = async (formData) => {
  const response = await axios.post(
    `${import.meta.env.VITE_SIGNUP_ROUTE}`,
    formData,
    {
      validateStatus: function (status) {
        return true;
      },
    }
  );

  if (response.status !== 200) {
    throw new Error(response.data.message);
  }
  return response.data;
};

export default signup;
