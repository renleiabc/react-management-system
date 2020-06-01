/*
 * @Author: renlei
 * @Date: 2020-05-27 17:13:09
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-29 21:34:03
 * @Description:登录界面
 */
/*
 * @Author: renlei
 * @Date: 2020-05-27 14:20:28
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-27 15:55:30
 * @Description:
 */

import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { Form, Input, Button, message } from "antd";
import IconFont from "../../components/IconFont";
import "./index.less";

class Login extends Component {
  render() {
    const layout = {
      labelCol: {
        span: 6,
      },
      wrapperCol: {
        span: 18,
      },
    };
    const { location } = this.props;
    var username = localStorage.getItem("ms_username");
    console.log(location);
    /* 等以后就不必重复登录了 */
    if (username) {
      if (location.pathname === "/login" || location.pathname === "/") {
        return <Redirect to="/main/home" />;
      }
    }
    const onFinish = (values) => {
      console.log("Success:", values);
      if (values) {
        localStorage.setItem("ms_username", values.username);
        this.props.history.push("/main/home");
      } else {
        message.error("登录失败!");
        return false;
      }
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
    return (
      <div className="loginWrap">
        <div className="msLogin">
          <div className="msTitle">后台管理系统</div>
          <Form
            {...layout}
            className="msContent"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="用户名"
              name="username"
              rules={[
                {
                  required: true,
                  message: "请输入用户名!",
                },
              ]}
            >
              <Input addonBefore={<IconFont type="anticon-lx-people" />} />
            </Form.Item>
            <Form.Item
              label="密码"
              name="password"
              rules={[
                {
                  required: true,
                  message: "请输入密码!",
                },
              ]}
            >
              <Input
                type="password"
                addonBefore={<IconFont type="anticon-lx-lock" />}
              />
            </Form.Item>
            <div className="loginBtn">
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </div>
            <p className="loginTips">Tips : 用户名和密码随便填。</p>
          </Form>
        </div>
      </div>
    );
  }

  /* onSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        localStorage.setItem("ms_username", values.username);
        this.props.history.push("/main/dashboard");
      } else {
        message.error("登录失败!");
        return false;
      }
    });
  } */
}

export default withRouter(Login);
