import { useContext } from 'react';

export const useStrictContext = <T>(
  context: React.Context<T>,
): NonNullable<T> => {
  const data = useContext(context);
  if (!data) {
    throw new Error('no initial data provided');
  }
  return data;
};
