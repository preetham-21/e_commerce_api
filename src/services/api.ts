import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products";

export const getProducts = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

export const addProduct = async (product: any) => {
  const res = await axios.post(BASE_URL, product);
  return res.data;
};

export const deleteProduct = async (id: number) => {
  await axios.delete(`${BASE_URL}/${id}`);
};