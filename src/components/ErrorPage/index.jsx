/*
 * @Author: renlei
 * @Date: 2020-05-27 21:00:49
 * @LastEditors: renlei
 * @LastEditTime: 2020-06-26 22:10:26
 * @Description:访问失败界面展示
 */

import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button } from 'antd';
import * as PropTypes from 'prop-types';
import './index.less';

class ErrorPage extends Component {
  render() {
    const { history, code, tips } = this.props;
    // console.log(JSON.stringify(history));
    return (
      <div className="errorPage">
        <div className="errorCode">
          {code.split('').map(item => {
            return <span key={item}>{item}</span>;
          })}
        </div>
        <div className="errorDesc">{tips}</div>
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
  code: '404',
  tips: '啊哦~ 你所访问的页面不存在'
};
ErrorPage.propTypes = {
  history: PropTypes.shape({
    length: PropTypes.number,
    action: PropTypes.string,
    location: PropTypes.object,
    goBack: PropTypes.func.isRequired
  }).isRequired,
  code: PropTypes.string,
  tips: PropTypes.string
};
export default withRouter(ErrorPage);
