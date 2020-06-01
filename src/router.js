/* eslint-disable no-unused-vars */
/*
 * @Author: renlei
 * @Date: 2020-05-25 16:34:18
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-31 23:19:40
 * @Description:所有路由文件
 */

import React, { lazy, Suspense } from "react";
import { Spin } from "antd";
import {
  BrowserRouter as Router, //本项目使用浏览器路由
  HashRouter, //哈西路由有#号as是定 义一个新名
  Link, //普通跳转
  NavLink, //跳转，可以添加跳转之后的样式
  Route, //路由
  Switch, //开关，匹配唯一跳转
  Redirect, //重定向
} from "react-router-dom";
import { allUser, partUser, halfUser, oneUser, checkAuth } from "./utils/check";
/* //当用户访问一个页面时， 该页面应该只
加载自己使用到的代码。 解决这个问题的方案就是代码分片， 将JS代码
分片打包到多个文件中， 然后在访问页面时按需加载。通过import导入组件， 创建代码分片点 */
const Login = lazy(() => import("./page/Login/index")); //登录界面
const Main = lazy(() => import("./page/Main/index")); //主体界面
const Home = lazy(() => import("./page/Home/index")); // 首页
const Icons = lazy(() => import("./page/Main/icons"));
const Tables = lazy(() => import("./page/Main/tables"));
const Editor = lazy(() => import("./page/Main/editor"));
const Forms = lazy(() => import("./page/Main/forms"));
const Charts = lazy(() => import("./page/Main/chart"));
const Tabs = lazy(() => import("./page/Main/tabs"));
const Upload = lazy(() => import("./page/Main/upload"));
const Locale = lazy(() => import("./page/Main/locale"));
const Markdown = lazy(() => import("./page/Main/markDown"));
/*
const Permission = lazy(() => import("./pages/Permission/index"));
  */
const ErrorRoute = lazy(() => import("./page/Error/index")); // 非法路由提示界面404
/* 一级路由 */
export const AppRoutes = (props) => {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="example">
            <Spin size="large" tip="Loading..." />
          </div>
        }
      >
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <AuthRoute path="/main" component={Main} />
          <Route component={ErrorRoute} />
        </Switch>
      </Suspense>
    </Router>
  );
};
/* 二级路由 */
export const MainRoutes = () => {
  return (
    <Suspense
      fallback={
        <div className="example">
          <Spin size="large" tip="Loading..." />
        </div>
      }
    >
      <Switch>
        <Redirect exact from="/main" to="/main/home" />
        <LimitRoute exact path="/main/home" component={Home} fn={allUser} />
        <LimitRoute exact path="/main/icons" component={Icons} fn={partUser} />
        <LimitRoute
          exact
          path="/main/tables"
          component={Tables}
          fn={partUser}
        />
        <LimitRoute exact path="/main/forms" component={Forms} fn={halfUser} />
        <LimitRoute
          exact
          path="/main/editor"
          component={Editor}
          fn={halfUser}
        />
        <LimitRoute exact path="/main/tabs" component={Tabs} fn={halfUser} />
        <LimitRoute exact path="/main/upload" component={Upload} fn={oneUser} />
        <LimitRoute
          exact
          path="/main/charts"
          component={Charts}
          fn={halfUser}
        />
        <LimitRoute exact path="/main/i18n" component={Locale} fn={partUser} />
        <LimitRoute
          exact
          path="/main/markdown"
          component={Markdown}
          fn={oneUser}
        />
        <Route path="/main/error/:code" component={ErrorRoute} />
        {/*  
        <AdminRoute exact path="/main/permission" component={Permission} />
        */}
        <Route component={ErrorRoute} />
      </Switch>
    </Suspense>
  );
};
// 用户权限鉴定函数
const LimitRoute = ({ component: Component, fn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        fn() ? <Component {...props} /> : <Redirect to="/main/error/403" />
      }
    />
  );
};

// 路由登录鉴权
const AuthRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
