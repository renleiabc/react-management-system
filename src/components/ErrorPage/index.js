/*
 * @Author: renlei
 * @Date: 2020-05-27 21:00:49
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-30 09:39:06
 * @Description:访问失败界面展示
 */

import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button } from "antd";
import * as PropTypes from "prop-types";
import "./index.less";

class ErrorPage extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="errorPage">
        <div className="errorCode">
          {this.props.code.split("").map((item, index) => {
            return <span key={index}>{item}</span>;
          })}
        </div>
        <div className="errorDesc">{this.props.tips}</div>
        <div className="errorHandle">
          <Link to="/main/home" replace>
            <Button type="primary" size="large">
              返回首页
            </Button>
          </Link>
          <Button
            className="errorBtn"
            type="primary"
            size="large"
            onClick={() => {
              history.goBack();
            }}
          >
            返回上一页
          </Button>
        </div>
      </div>
    );
  }
}
ErrorPage.defaultProps = {
  code: "404",
  tips: "啊哦~ 你所访问的页面不存在",
};
ErrorPage.propTypes = {
  code: PropTypes.string,
  tips: PropTypes.string,
};
export default withRouter(ErrorPage);
