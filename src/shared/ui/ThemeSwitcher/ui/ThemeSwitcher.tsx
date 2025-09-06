import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import clsx from 'clsx';

import { Theme, useTheme } from '../index';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={clsx(className)}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <MoonOutlined /> : <SunOutlined />}
    </Button>
  );
};
