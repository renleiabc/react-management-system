/*
 * @Author: renlei
 * @Date: 2020-05-27 17:32:50
 * @LastEditors: renlei
 * @LastEditTime: 2020-06-26 22:23:16
 * @Description: 主体界面
 */
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Layout } from 'antd';
import * as PropTypes from 'prop-types';
import HeaderTop from '../../components/Header/index';
import Sidebar from '../../components/Sidebar/Sidebar';
import { MainRoutes } from '../../router';
import './index.less';

const { Header, Sider, Content } = Layout;
@inject('headerStore')
@observer
class Main extends Component {
  render() {
    const { headerStore } = this.props;
    const { collapsed } = headerStore;
    return (
      <div className="main">
        <Layout className="mainContent">
          {/* 侧边导航栏 */}
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <Sidebar collapsed={collapsed} />
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
Main.propTypes = {
  headerStore: PropTypes.shape({
    collapsed: PropTypes.bool
  }).isRequired
};
export default Main;
