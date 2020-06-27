/*
 * @Author: renlei
 * @Date: 2020-05-27 17:13:09
 * @LastEditors: renlei
 * @LastEditTime: 2020-06-26 22:27:31
 * @Description:登录界面
 */

import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
import * as PropTypes from 'prop-types';
import IconFont from '../../components/IconFont';
import './index.less';

class Login extends Component {
  render() {
    const layout = {
      labelCol: {
        span: 6
      },
      wrapperCol: {
        span: 18
      }
    };
    const { location, history } = this.props;
    const { pathname } = location;
    const username = localStorage.getItem('ms_username');
    console.log(location);
    /* 等以后就不必重复登录了 */
    if (username) {
      if (pathname === '/login' || pathname === '/') {
        return <Redirect to="/main/home" />;
      }
    }
    const onFinish = values => {
      console.log('Success:', values);
      if (values) {
        localStorage.setItem('ms_username', values.username);
        history.push('/main/home');
      } else {
        message.error('登录失败!');
        return false;
      }
    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
    return (
      <div className="loginWrap">
        <div className="msLogin">
          <div className="msTitle">后台管理系统</div>
          <Form
            // eslint-disable-next-line react/jsx-props-no-spreading
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
                  message: '请输入用户名!'
                }
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
                  message: '请输入密码!'
                }
              ]}
            >
              <Input type="password" addonBefore={<IconFont type="anticon-lx-lock" />} />
            </Form.Item>
            <div className="loginBtn">
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </div>
            <p className="loginTips">提示 : 用户名填写1：超级管理员；2或者3：一般管理员。</p>
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
Login.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired
};
export default withRouter(Login);
