/*
 * @Author: renlei
 * @Date: 2020-05-25 16:34:18
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-30 21:22:31
 * @Description:
 */

import React from "react";
import ReactDOM from "react-dom";
import "./assets/less/index.less";
import { AppRoutes } from "./router";
import * as serviceWorker from "./serviceWorker";
import { configure } from "mobx";
import { Provider } from "mobx-react";
import stores from "./store/index";
ReactDOM.render(
  <Provider {...stores}>
    <AppRoutes />
  </Provider>,
  document.getElementById("root")
);
// 5.x版本的严格模式开启方式
configure({
  enforceActions: "observed",
});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
