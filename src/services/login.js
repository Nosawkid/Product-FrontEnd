import axios from "axios";
const baseUrl = "/api/login";

const userLogin = async (credentials) => {
  const res = await axios.post(baseUrl, credentials);
  return res.data;
};

export default { userLogin };
