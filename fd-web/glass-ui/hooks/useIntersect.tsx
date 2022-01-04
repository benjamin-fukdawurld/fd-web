import React, { useEffect, useRef, useState } from "react";

export default function useIntersect(
  options?: IntersectionObserverInit
): [
  React.Dispatch<React.SetStateAction<Element[]>>,
  Map<Element | null, IntersectionObserverEntry>
] {
  const [entries, updateEntries] = useState<Map<Element | null, IntersectionObserverEntry>>(
    new Map<Element | null, IntersectionObserverEntry>()
  );
  const [nodes, setNodes] = useState<Element[]>([]);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new window.IntersectionObserver((entries, observer) => {
      const entryMap = new Map<Element | null, IntersectionObserverEntry>(
        entries.map((entry) => [entry.target, entry])
      );
      updateEntries(entryMap);
    }, options);

    const { current: currentObserver } = observer;
    for (let node of nodes) {
      currentObserver.observe(node);
    }

    return () => currentObserver.disconnect();
  }, [nodes, options]);

  return [setNodes, entries];
}
