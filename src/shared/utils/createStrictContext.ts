import { createContext } from 'react';

export const createStrictContext = <T>() => {
  return createContext<T | null>(null);
};
