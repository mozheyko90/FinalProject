import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import authSlice from "../pages/SignIn/reducers";
import pokemonsSlice from "../pages/Products/reducers";
import pokemonDetailsSlice from "../pages/ProductDetails/reducers";
import cartSlice from "../pages/ShoppingCart/reducers";



const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["userInfo", "isAuth"],
};

export const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authSlice),
  pokemons: pokemonsSlice,
  pokemonDetails: pokemonDetailsSlice,
  cart: cartSlice,

});
