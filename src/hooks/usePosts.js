import { useState, useCallback } from "react";
import { useAsync } from "./useAsync.js";
import { apiPostList } from "../api/apiPost.js";

const PAGE_SIZE = 8;

function usePosts() {
    const {data: allPosts, loading, error, refetch} = useAsync(apiPostList, []);
    const [visiblePosts, setVisiblePosts] = useState(PAGE_SIZE);

    const loadMore = useCallback(() => {
        setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + PAGE_SIZE);
    }, []);

    const posts = (allPosts ?? []).slice(0, visiblePosts);
    const hasMore = visiblePosts < (allPosts ?? []).length;

    return { posts, loadMore, hasMore, loading, error, refetch };
}

export default usePosts;