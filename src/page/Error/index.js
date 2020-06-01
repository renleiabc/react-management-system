/*
 * @Author: renlei
 * @Date: 2020-05-27 18:09:01
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-31 20:38:44
 * @Description:不存在界面展示
 */

import React, { Component } from "react";
import ErrorPage from "../../components/ErrorPage/index";

class ErrorRoute extends Component {
  render() {
    const { match } = this.props;
    const code = match.params.code;
    console.log(code);
    return !code || code === "404" ? (
      <ErrorPage />
    ) : (
      <ErrorPage code="403" tips="啊哦~ 你没有权限访问该页面哦" />
    );
  }
}

export default ErrorRoute;
