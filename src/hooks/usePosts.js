import { useState, useEffect, useCallback } from "react";
import { apiPostList } from "../api/apiPost.js";

const PAGE_SIZE = 8;

function usePosts() {
    const [allPosts, setAllPosts] = useState([]);
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let mounted = true;

        apiPostList()
            .then((data) => {
                if (!mounted) return;
                setAllPosts(data ?? []);
            })
            .catch((err) => {
                if (!mounted) return;
                setError(err.message || "Error al cargar los posts");
            })
            .finally(() => {
                if (!mounted) return;
                setLoading(false);
            });

        return () => {
            mounted = false;
        };
    }, []);
    
    const loadMore = useCallback(() => {
        setVisibleCount((prev) => prev + PAGE_SIZE);
    }, []);

    const visiblePosts = allPosts.slice(0, visibleCount);
    const hasMore = visibleCount < allPosts.length;

    return { posts: visiblePosts, loadMore, hasMore, loading, error };
}

export default usePosts;