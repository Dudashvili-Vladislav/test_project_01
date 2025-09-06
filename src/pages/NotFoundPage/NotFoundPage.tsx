import { FC } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';


import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return (
    <div className={clsx(cls.NotFoundPage, className)}>
      {t('Страница не найдена')}
    </div>
  );
};
