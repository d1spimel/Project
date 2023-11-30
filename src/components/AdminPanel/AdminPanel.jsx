import React from "react";
import {
  Layout,
  Menu,
  Breadcrumb,
  Card,
  List,
  Typography,
  Statistic,
  Flex,
} from "antd";
import {
  HeartOutlined,
  AreaChartOutlined,
  FileDoneOutlined,
  TeamOutlined,
  UsergroupAddOutlined,
  MessageOutlined,
  LikeOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import styles from "./adminPanel.module.css"

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class AdminPanel extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={this.onCollapse}
          style={{ backgroundColor: "#ffffff" }}
          trigger={<div style={{position: "relative", backgroundColor:"rgb(37, 37, 37)"}}>☰</div>}
        >
          <div className="logo" />
          <Menu defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<AreaChartOutlined />}>
              Overview
            </Menu.Item>
            <Menu.Item key="2" icon={<FileDoneOutlined />}>
              Completed Tasks
            </Menu.Item>
            <SubMenu key="sub1" icon={<UsergroupAddOutlined />} title="Members">
              <Menu.Item key="3">John</Menu.Item>
              <Menu.Item key="4">Emma</Menu.Item>
              <Menu.Item key="5">Michael</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Teams">
              <Menu.Item key="6">Team Alpha</Menu.Item>
              <Menu.Item key="8">Team Beta</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileDoneOutlined />}>
              Completed Projects
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <div style={{ padding: "0 24px", minHeight: 64, color: "white" }}>
              Custom Admin Dashboard
            </div>
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Member</Breadcrumb.Item>
              <Breadcrumb.Item>John</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Flex wrap="wrap" gap={10}>
                {/* Custom Cards */}
                <Card
                  title="Team Card 1"
                  extra={<a href="#">Explore</a>}
                  style={{ width: 300 }}
                >
                  <p>Team card content</p>
                </Card>
                <Card
                  title="Team Card 2"
                  extra={<a href="#">Explore</a>}
                  style={{ width: 300 }}
                >
                  <p>Team card content</p>
                </Card>
                {/* Additional Cards */}
                <Card
                  title="Extra Card 1"
                  extra={<a href="#">Discover</a>}
                  style={{ width: 300 }}
                >
                  <p>Additional content for Card 1</p>
                </Card>
                <Card
                  title="Extra Card 2"
                  extra={<a href="#">Discover</a>}
                  style={{ width: 300 }}
                >
                  <p>Additional content for Card 2</p>
                </Card>
              </Flex>

              {/* Notification List */}
              <List
                style={{
                  marginTop: 16,
                  marginBottom: 16,
                }}
                header={<div>Notification List</div>}
                bordered
                dataSource={[
                  "Welcome to the team!",
                  "Project completed successfully!",
                  "New member joined your team.",
                  "Your task is overdue.",
                ]}
                renderItem={(item) => (
                  <List.Item>
                    <Typography.Text mark>[Alert]</Typography.Text>
                    {item}
                  </List.Item>
                )}
              />

              {/* Additional Metrics */}
              <Flex wrap="wrap" justify="space-between">
                {/* Custom Metrics */}
                <Statistic
                  title="Server Uptime"
                  value={99.5}
                  prefix={<ClockCircleOutlined />}
                />
                <Statistic
                  title="Favorited"
                  value={215}
                  prefix={<HeartOutlined />}
                />
                <Statistic
                  title="Messages"
                  value={78}
                  prefix={<MessageOutlined />}
                />
                {/* Additional Metrics */}
                <Statistic
                  title="New Projects"
                  value={10}
                  prefix={<FileDoneOutlined />}
                />
                <Statistic
                  title="Active Teams"
                  value={35}
                  prefix={<TeamOutlined />}
                />
                <Statistic
                  title="Pending Tasks"
                  value={8}
                  prefix={<FileDoneOutlined />}
                />
              </Flex>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default AdminPanel;
