import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  ShopOutlined,
  TeamOutlined,
  HomeOutlined,
} from "@ant-design/icons";
const { Content, Sider } = Layout;

const Wrapper: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          onClick={({ key }) => {
            navigate(key);
          }}
          theme="dark"
          mode="inline"
          items={[
            { label: "Home", key: "/", icon: <HomeOutlined /> },
            { label: "Projects", key: "/projects", icon: <AppstoreOutlined /> },
            { label: "Tasks", key: "/tasks", icon: <ShopOutlined /> },
            // {label:'Users', key:'/users',icon:<TeamOutlined/>},
          ]}
        />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Wrapper;
