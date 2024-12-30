import axios from "axios";
const baseUrl = "/api/products";

let token = null;
const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const getAll = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};

const addProduct = async (newProduct) => {
  const config = {
    headers: { Authorization: token },
  };
  const res = await axios.post(baseUrl, newProduct, config);
  return res.data;
};

export default {
  getAll,
  addProduct,
  setToken,
};
