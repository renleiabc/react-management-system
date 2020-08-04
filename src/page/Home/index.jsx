/*
 * @Author: renlei
 * @Date: 2020-05-27 17:38:45
 * @LastEditors: renlei
 * @LastEditTime: 2020-07-12 18:18:16
 * @Description:
 */
import React, { Component } from 'react';
// import * as PropTypes from 'prop-types';
import Child from './compment/child';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 1
    };
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {}

  clickChild = () => {
    this.child.onShow();
  };

  onRef = ref => {
    this.child = ref;
  };

  handleCancel() {
    this.father12 = '父组件的方法被子组件调用';
    console.log(this.father12);
    let { name } = this.state;
    this.setState({
      name: ++name
    });
    console.log(this.state);
  }

  render() {
    console.log(this.state);
    const { name } = this.state;
    console.log(name);
    return (
      <div className="animate-route">
        <div>首页</div>
        <div>{name}</div>
        <button type="button" onClick={this.clickChild}>
          父组件调用子组件里面的方法
        </button>
        <Child onCancle={this.handleCancel} onRef={this.onRef} />
      </div>
    );
  }
}

export default Home;
