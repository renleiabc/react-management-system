/*
 * @Author: renlei
 * @Date: 2020-07-11 17:57:18
 * @LastEditors: renlei
 * @LastEditTime: 2020-07-11 18:45:54
 * @Description:
 */

import React, { Component } from 'react';
import * as PropTypes from 'prop-types';

class Child extends Component {
  constructor(props) {
    super(props);
    this.onShow = this.onShow.bind(this);
  }

  componentDidMount() {
    const { onRef } = this.props;
    onRef(this);
  }

  onShow() {
    this.bar = '子组件的方法被父组件调用';
    console.log(this.bar);
  }

  render() {
    const { onCancle } = this.props;
    console.log(this.props);
    return (
      <div>
        <button
          type="button"
          onClick={() => {
            onCancle();
          }}
        >
          子组件调用父组件的方法
        </button>
        <div>子组件</div>
      </div>
    );
  }
}
Child.propTypes = {
  onRef: PropTypes.func.isRequired,
  onCancle: PropTypes.func.isRequired
};
export default Child;
