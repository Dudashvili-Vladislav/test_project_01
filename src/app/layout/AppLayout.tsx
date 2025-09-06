import { FC, useState } from "react";

import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Layout, { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

import { SiderNavItem } from "#/shared/ui/SiderNavItem/SiderNavItem";
import cls from "./AppLayout.module.scss";
import { SidebarItems } from "#/shared/config/sidebarItems/sidebarItems";

interface IAppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: FC<IAppLayoutProps> = (props) => {
  const { children } = props;

  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Layout className={cls.layout}>
      <Sider collapsed={isCollapsed} className={cls.sider}>
        <Button onClick={toggleCollapsed}>
          {isCollapsed ? <DoubleRightOutlined /> : <DoubleLeftOutlined />}
        </Button>
        {SidebarItems.map(({ icon, title }, i) => (
          <SiderNavItem key={i} icon={icon} title={title} collapsed={isCollapsed} />
        ))}
      </Sider>
      <Layout>
        <Header className={cls.header}>Header</Header>
        <Content className={cls.content}>{children}</Content>
      </Layout>
    </Layout>
  );
};
