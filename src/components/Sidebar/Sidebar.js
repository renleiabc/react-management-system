/*
 * @Author: renlei
 * @Date: 2020-05-30 10:13:57
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-31 17:08:48
 * @Description:左侧导航栏路由链接渲染组件
 */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import routerList from "./routerList";
import IconFont from "../IconFont";
import { Menu } from "antd";
import { handleRouterFilter } from "../../utils/check";
import "./sidebar.less";
const { SubMenu } = Menu;
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.onMenuSelect = this.onMenuSelect.bind(this);
  }
  onMenuSelect(e) {
    this.props.history.push(e.key);
  }

  render() {
    const role = localStorage.getItem("ms_username");
    // console.log(JSON.stringify(routerList));
    //console.log(role);
    const showList = handleRouterFilter(routerList, role);
    // console.log(JSON.stringify(showList));
    const { history, collapsed } = this.props;
    return (
      <div className="sidebar">
        <div className="sidebar-header">
          <img
            className="logo"
            src={require("../../assets/img/logo.svg")}
            alt=""
          />
          {!collapsed && <span>管理系统</span>}
        </div>
        <Menu
          defaultSelectedKeys={[history.location.pathname]}
          theme="dark"
          mode="inline"
          onClick={this.onMenuSelect.bind(this)}
        >
          {
            // 遍历一级菜单
            showList.map((items) => {
              // 如果有子菜单，则再对子菜单进行遍历渲染
              if (items.subs) {
                return (
                  <SubMenu
                    key={items.index}
                    title={
                      <span>
                        <IconFont className="sidebar-icon" type={items.icon} />
                        <span>{items.title}</span>
                      </span>
                    }
                  >
                    {
                      // 遍历二级菜单
                      items.subs.map((item) => {
                        // 如果有子菜单，则再对子菜单进行遍历渲染
                        if (item.subs) {
                          return (
                            <SubMenu
                              key={item.index}
                              title={<span>{item.title}</span>}
                            >
                              {
                                // 遍历三级菜单，最多支持三级
                                item.subs.map((sub) => {
                                  return (
                                    <Menu.Item key={sub.index}>
                                      {sub.title}
                                    </Menu.Item>
                                  );
                                })
                              }
                            </SubMenu>
                          );
                        } else {
                          return (
                            <Menu.Item key={item.index}>{item.title}</Menu.Item>
                          );
                        }
                      })
                    }
                  </SubMenu>
                );
              } else {
                return (
                  <Menu.Item key={items.index}>
                    <IconFont className="sidebar-icon" type={items.icon} />
                    <span>{items.title}</span>
                  </Menu.Item>
                );
              }
            })
          }
        </Menu>
      </div>
    );
  }
}
/* withRouter作用：把不是通过路由切换过来的组件中，将react-router 的 history、location、match 三个对象传入props对象上,如app.js这个组件，一般是首页，不是通过路由跳转过来的，而是直接从浏览器中输入地址打开的，如果不使用withRouter此组件的this.props为空，没法执行props中的history、location、match等方法 */
export default withRouter(Sidebar);
