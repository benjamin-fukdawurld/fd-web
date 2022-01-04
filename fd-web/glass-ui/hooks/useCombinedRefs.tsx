import { ForwardedRef, MutableRefObject, useEffect, useRef } from "react";

export default function useCombinedRefs<T = any>(
  ...refs: (MutableRefObject<T> | ForwardedRef<T>)[]
) {
  const targetRef = useRef<T | null>(null);

  useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === "function") {
        ref(targetRef.current);
      } else {
        ref.current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
}
