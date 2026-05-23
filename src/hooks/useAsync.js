import { useState, useEffect, useCallback, useRef } from "react";

export function useAsync(asyncFunction, dependencies = []) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const abortRef = useRef(null);

    const run = useCallback(async () => {
        setLoading(true);
        setError(null);

        if (abortRef.current) {
            abortRef.current.abort();
        }

        const controller = new AbortController();
        abortRef.current = controller;

        try {
            const result = await asyncFunction(controller.signal);
            setData(result);
        } catch (err) {
            if (err.name !== "AbortError") {
                setError(err);
            }
        } finally {
            setLoading(false);
        }
        
        // dependencies is provided by the caller and spread into the dependency
        // array intentionally. ESLint can't statically verify spread elements
        // in hook dependency arrays, so we disable the rule for this line.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);

    useEffect(() => {
        run();

        return () => {
            abortRef.current?.abort();
        };
    }, [run]);

    return { data, loading, error, refetch: run };
}