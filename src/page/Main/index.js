/*
 * @Author: renlei
 * @Date: 2020-05-27 17:32:50
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-30 21:25:25
 * @Description: 主体界面
 */
import React, { Component } from "react";
import { Layout } from "antd";
import HeaderTop from "../../components/Header/index";
import Sidebar from "../../components/Sidebar/Sidebar";
import { MainRoutes } from "../../router";
import "./index.less";
import { observer, inject } from "mobx-react";
const { Header, Sider, Content } = Layout;
@inject("headerStore")
@observer
class Main extends Component {
  state = {
    collapsed: false,
  };

  render() {
    return (
      <div className="main">
        <Layout className="mainContent">
          {/* 侧边导航栏 */}
          <Sider
            trigger={null}
            collapsible
            collapsed={this.props.headerStore.collapsed}
          >
            <Sidebar collapsed={this.state.collapsed} />
          </Sider>
          <Layout>
            {/* 头部 */}
            <Header>
              <HeaderTop />
            </Header>
            {/* 内容部分 */}
            <Content className="mainRight">
              <MainRoutes />
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
export default Main;
