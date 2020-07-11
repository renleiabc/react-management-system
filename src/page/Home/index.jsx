/*
 * @Author: renlei
 * @Date: 2020-05-27 17:38:45
 * @LastEditors: renlei
 * @LastEditTime: 2020-07-11 18:06:52
 * @Description:
 */
import React, { Component } from 'react';
import Child from './compment/child';

class Home extends Component {
  componentDidMount() {}

  handleCancel = () => {
    console.log('父组件的方法被子组件调用');
  };

  render() {
    return (
      <div className="animate-route">
        <div>首页</div>
        <Child onCancle={this.handleCancel} />
      </div>
    );
  }
}
export default Home;
