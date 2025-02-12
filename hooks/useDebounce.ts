import { useEffect, useState } from "react";

/**
 * Custom React hook that debounces a given value.
 * 
 * This hook delays updating the debounced value until after a specified delay 
 * has passed since the last time the input value was changed.
 *
 * @param {string} value - The input value to debounce.
 * @param {number} delay - The delay in milliseconds to wait before updating 
 * the debounced value.
 * @returns {string} - The debounced value.
 */

export const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
