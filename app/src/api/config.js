import axios from "axios";

import { LOCAL_STORAGE_KEYS } from "../constants";

const api = axios.create({
  baseURL: "https://poke-store-api.herokuapp.com/",
});

api.interceptors.request.use((axiosConfig) => {
  const accessToken = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);

  if (accessToken) {
    axiosConfig.headers.Authorization = `Bearer ${accessToken}`;
  }

  return axiosConfig;
});

export { api };
