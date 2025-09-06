import { FC } from 'react';

import { Flex, Typography } from 'antd';
import clsx from 'clsx';

import cls from './SiderNavItem.module.scss';

const { Text } = Typography;

interface ISiderNavItemProps {
  icon?: React.ReactNode
  title?: string
  collapsed?: boolean
}

export const SiderNavItem: FC<ISiderNavItemProps> = (props) => {
  const { icon, title, collapsed } = props;

  return <Flex className={cls.item}>
    {icon}
    <Text className={clsx(cls.title, { [cls.title_collapsed]: collapsed })}>
      {title}
    </Text>
  </Flex>;
};