/* eslint-disable react/jsx-filename-extension */
/*
 * @Author: renlei
 * @Date: 2020-05-25 16:34:18
 * @LastEditors: renlei
 * @LastEditTime: 2020-07-11 18:11:32
 * @Description:
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './assets/less/index.less';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import { AppRoutes } from './router';
import * as serviceWorker from './serviceWorker';
import stores from './store/index';

ReactDOM.render(
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Provider {...stores}>
    <AppRoutes />
  </Provider>,
  document.getElementById('root')
);
// 5.x版本的严格模式开启方式
configure({
  enforceActions: 'observed'
});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
