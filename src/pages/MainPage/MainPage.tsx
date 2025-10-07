import React from 'react';

import { useTranslation } from 'react-i18next';

import cls from './MainPage.module.scss';

export const MainPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('Главная страница')}
      <h1 className={cls.title}>NEWWWWWWW</h1>
    </div>
  );
};
