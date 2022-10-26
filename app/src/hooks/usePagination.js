import {useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const usePagination = (initialPage = 1) => {
  const [searchParams, setSearchParams] = useSearchParams({
    page: initialPage,
  });

  const handlePageChange = useCallback((_, page) => {
    setSearchParams({page});
  }, []);

  useEffect(() => {
  handlePageChange(null, initialPage);
  }, []);

  return [Number(searchParams.get("page")), handlePageChange];
};