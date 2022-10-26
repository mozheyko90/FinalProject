import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadPokemonDetails } from "../reducers";
import ProductLayout from "../components/ProductLayout";

const ProductContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();


  const pokemonDetails = useSelector((state) => state.pokemonDetails);

  useEffect(() => {
    dispatch(loadPokemonDetails(id));
  }, [id, dispatch]);

  return (
    <ProductLayout
      product={pokemonDetails.data}
      isLoading={pokemonDetails.isLoading}
      error={pokemonDetails.error}
    />
  );
};

export default ProductContainer;
