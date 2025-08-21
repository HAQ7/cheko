import { useEffect, useRef, useCallback } from 'react';

interface UseInfiniteScrollOptions {
    hasNextPage: boolean;
    isLoading: boolean;
    onLoadMore: () => void;
    threshold?: number;
    rootMargin?: string;
}

export default function useInfiniteScroll({
    hasNextPage,
    isLoading,
    onLoadMore,
    threshold = 1.0,
    rootMargin = '10px',
}: UseInfiniteScrollOptions) {
    const observerRef = useRef<IntersectionObserver | null>(null);
    const loadingRef = useRef<HTMLDivElement | null>(null);

    const handleIntersect = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            const [entry] = entries;
            if (entry.isIntersecting && hasNextPage && !isLoading) {
                onLoadMore();
            }
        },
        [hasNextPage, isLoading, onLoadMore]
    );

    useEffect(() => {
        if (!loadingRef.current) return;

        observerRef.current = new IntersectionObserver(handleIntersect, {
            threshold,
            rootMargin,
        });

        observerRef.current.observe(loadingRef.current);

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [handleIntersect, threshold, rootMargin]);

    return { loadingRef };
}
