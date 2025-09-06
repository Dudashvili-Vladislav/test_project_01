import { FC, useMemo, useState } from 'react';

import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from '#/shared/ui/ThemeSwitcher';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme ||
  Theme.LIGHT;

export type Props = {
  children: React.ReactNode;
};

const ThemeProvider: FC<Props> = (props: Props) => {
  const { children } = props;
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
