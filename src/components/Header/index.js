/*
 * @Author: renlei
 * @Date: 2020-05-28 09:41:43
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-31 20:26:52
 * @Description:侧边路由导航
 */
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Tooltip, Dropdown, Menu, Avatar } from "antd";
import IconFont from "../IconFont";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  DownOutlined,
} from "@ant-design/icons";
import "./index.less";
import { observer, inject } from "mobx-react";
@inject("headerStore")
@observer
class SiderRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: localStorage.getItem("ms_username") || "Admin",
      fullscreen: false,
      collapsed: false,
    };
    this.setFullScreen = this.setFullScreen.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
  }
  // 设置全屏
  setFullScreen() {
    const fullscreen = this.state.fullscreen;
    const element = document.documentElement;
    if (fullscreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    } else {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.msRequestFullscreen) {
        // IE11
        element.msRequestFullscreen();
      }
    }
    this.setState({
      fullscreen: !fullscreen,
    });
  }
  // 用户名下拉菜单操作
  handleDropdown({ key }) {
    switch (key) {
      case "0":
        window.open("https://lin-xin.gitee.io/about/", "_blank");
        break;
      case "1":
        window.open("https://github.com/lin-xin/react-manage-system", "_blank");
        break;
      case "2":
        localStorage.removeItem("ms_username");
        this.props.history.push("/login");
        break;
      default:
        return;
    }
  }
  render() {
    const collapsed = this.props.headerStore.collapsed;
    return (
      <div className="header">
        <div
          className="collapseBtn"
          onClick={() => {
            this.props.headerStore.onCollapse();
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
        <div className="headerRight">
          <div className="headerUserCon">
            <Tooltip
              title={this.state.fullscreen ? `取消全屏` : `全屏`}
              placement="bottom"
            >
              <div className="btnFullscreen" onClick={this.setFullScreen}>
                <IconFont type="anticon-lx-full" />
              </div>
            </Tooltip>
            <Tooltip title={"消息中心"} placement="bottom">
              <Link to="tabs">
                <div className="btnBell">
                  <IconFont type="anticon-lx-notice" />
                  <span className="btnBellBadge" />
                </div>
              </Link>
            </Tooltip>
            {/* 用户头像 */}
            <Avatar
              className="userAvator"
              src={require("../../assets/img/img.jpg")}
            />
            {/* 用户名下拉菜单 */}
            <Dropdown
              className="userName"
              trigger={["click"]}
              overlay={
                <Menu onClick={this.handleDropdown}>
                  {/* Menu.Item必须设置唯一的key */}
                  <Menu.Item key="0" className="dropItemLink">
                    <UploadOutlined className="mgr8" /> 关于作者
                  </Menu.Item>
                  <Menu.Item key="1" className="dropItemLink">
                    <VideoCameraOutlined className="mgr8" /> 项目仓库
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item key="2" className="dropItemLink">
                    <UserOutlined /> 退出登录
                  </Menu.Item>
                </Menu>
              }
            >
              <span className="elDropdownLink">
                {this.state.username} <DownOutlined />
              </span>
            </Dropdown>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(SiderRouter);
