import ProductsLayout from "../components/ProductsLayout";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loadPokemons } from "../reducers";
import { usePagination } from "../../../hooks/usePagination";
import { ROUTE_NAMES } from "../../../router/routeNames";


const ProductsContainer = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {data, isLoading, error} = useSelector((state) => state.pokemons);

  const [page, handlePageChange] = usePagination(1);

  useEffect(() => {
    dispatch(loadPokemons(page));
  }, [dispatch, page]);

  const handleNavigateToPokemonDetail = (pokemonId) => {
    navigate(`${ROUTE_NAMES.PRODUCTS}/${pokemonId}`);
  };

  return (
    <ProductsLayout
      products={data}
      isLoading={isLoading}
      error={error}
      handleNavigateToPokemonDetail={handleNavigateToPokemonDetail}
      page={page}
      handlePageChange={handlePageChange}
    />
  );
};

export default ProductsContainer;
