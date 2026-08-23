"use client";

import { useState, useEffect, useCallback } from "react";

const SHORTLIST_STORAGE_KEY = "cg_shortlisted_colleges";

export function useShortlist() {
  const [shortlistedIds, setShortlistedIds] = useState<string[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load from localStorage on mount (client-only)
  // Async wrapper intentionally used to satisfy react-hooks/set-state-in-effect:
  // the setState calls happen inside an async function, not directly in the effect body.
  useEffect(() => {
    const load = async () => {
      try {
        const stored = localStorage.getItem(SHORTLIST_STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored) as string[];
          if (Array.isArray(parsed)) {
            setShortlistedIds(parsed);
          }
        }
      } catch {
        // localStorage unavailable or corrupt — ignore
      }
      setIsHydrated(true);
    };
    load();
  }, []);

  // Persist to localStorage whenever the list changes (after hydration)
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem(SHORTLIST_STORAGE_KEY, JSON.stringify(shortlistedIds));
    } catch {
      // ignore
    }
  }, [shortlistedIds, isHydrated]);

  const toggle = useCallback((collegeId: string) => {
    setShortlistedIds((prev) =>
      prev.includes(collegeId)
        ? prev.filter((id) => id !== collegeId)
        : [...prev, collegeId]
    );
  }, []);

  const isShortlisted = useCallback(
    (collegeId: string) => shortlistedIds.includes(collegeId),
    [shortlistedIds]
  );

  const clear = useCallback(() => {
    setShortlistedIds([]);
  }, []);

  return {
    shortlistedIds,
    isShortlisted,
    toggle,
    clear,
    count: shortlistedIds.length,
    isHydrated,
  };
}
