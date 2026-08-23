"use client";

import { useState, useCallback } from "react";
import { DetailedCollege } from "@/lib/mockData";

const MAX_COMPARE = 3;

export function useCompare() {
  const [compareList, setCompareList] = useState<DetailedCollege[]>([]);

  const isInCompare = useCallback(
    (collegeId: string) => compareList.some((c) => c.id === collegeId),
    [compareList]
  );

  const addToCompare = useCallback((college: DetailedCollege) => {
    setCompareList((prev) => {
      if (prev.some((c) => c.id === college.id)) return prev;
      if (prev.length >= MAX_COMPARE) return prev; // silently cap at 3
      return [...prev, college];
    });
  }, []);

  const removeFromCompare = useCallback((collegeId: string) => {
    setCompareList((prev) => prev.filter((c) => c.id !== collegeId));
  }, []);

  const toggleCompare = useCallback((college: DetailedCollege) => {
    setCompareList((prev) => {
      if (prev.some((c) => c.id === college.id)) {
        return prev.filter((c) => c.id !== college.id);
      }
      if (prev.length >= MAX_COMPARE) return prev;
      return [...prev, college];
    });
  }, []);

  const clear = useCallback(() => setCompareList([]), []);

  return {
    compareList,
    isInCompare,
    addToCompare,
    removeFromCompare,
    toggleCompare,
    clear,
    count: compareList.length,
    canAdd: compareList.length < MAX_COMPARE,
  };
}
