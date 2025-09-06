import { createStrictContext } from '#/shared/utils/createStrictContext';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createStrictContext<ThemeContextProps>();

export const LOCAL_STORAGE_THEME_KEY = 'theme';
