import { useState, useCallback } from "react";
import { useAsync } from "./useAsync.js";
import { apiProductList } from "../api/apiProducts.js";

const PAGE_SIZE = 8;

function useProducts() {
    const {data: allProducts, loading, error, refetch} = useAsync(apiProductList, []);
    const [visibleProducts, setVisibleProducts] = useState(PAGE_SIZE);

    const loadMore = useCallback(() => {
        setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + PAGE_SIZE);
    }, []);

    const products = (allProducts ?? []).slice(0, visibleProducts);
    const hasMore = visibleProducts < (allProducts ?? []).length;

    return { products, loadMore, hasMore, loading, error, refetch };
}

export default useProducts;