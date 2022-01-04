import React, { useEffect, useRef, useState } from "react";

interface UseVisibleOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number;
  visible?: boolean;
}

export default function useVisible(
  options: UseVisibleOptions = { threshold: 0.25, visible: true }
): [React.Dispatch<React.SetStateAction<Element | null>>, boolean] {
  const [visible, updateVisible] = useState<boolean>(options.visible ?? true);
  const [node, setNode] = useState<Element | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    const minRatio = options.threshold ?? 0.25;
    observer.current = new window.IntersectionObserver(([entry], observer) => {
      updateVisible(entry.intersectionRatio >= minRatio);
    }, options);

    const { current: currentObserver } = observer;
    if (node) {
      currentObserver.observe(node);
    }

    return () => currentObserver.disconnect();
  }, [node, options]);

  return [setNode, visible];
}
