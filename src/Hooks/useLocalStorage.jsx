import { useState, useEffect } from 'react';

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const json = window.localStorage.getItem(key);
      return json ? JSON.parse(json) : initialValue;
    } catch (err) {
      console.error('useLocalStorage read error:', err);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error('useLocalStorage write error:', err);
    }
  }, [key, value]);

  return [value, setValue];
}