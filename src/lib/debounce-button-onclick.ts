import { useState, useEffect } from 'react';

export function simpleDebounce(func: () => void, timeout = 200) {
  let timer: NodeJS.Timeout;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this), timeout);
  };
}

export function debounceLead(func: () => void, timeout = 200) {
  let timer: NodeJS.Timeout | undefined;

  const handler = () => {
    if (!timer) {
      func.apply(this);
    }

    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined;
    }, timeout);
  };

  return handler;
}

export function useDebounce<T>(value: T, delay: number): T {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
