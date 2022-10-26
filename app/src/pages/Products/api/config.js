import { api } from "../../../api/config";

export const getPokemons = async (page) => {
  const { data } = await api.get(`/products?page=${page}&limit=18`);
  return data;
};