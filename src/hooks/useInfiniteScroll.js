import { useEffect, useRef } from "react";

function useInfiniteScroll(callback, hasMore, loading) {
  const observer = useRef();

  const lastElementRef = useRef();

  useEffect(() => {
    if (loading) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          callback();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (lastElementRef.current) {
      observer.current.observe(lastElementRef.current);
    }
  }, [callback, hasMore, loading]);

  return lastElementRef;
}

export default useInfiniteScroll;