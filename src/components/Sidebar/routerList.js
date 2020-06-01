/*
 * @Author: renlei
 * @Date: 2020-05-30 10:14:16
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-31 23:21:21
 * @Description:左侧导航栏路由列表文件
 */
/* icon:图标
*title：标题
*index：路由或者唯一标志，不能重复
*limit：{权限1，可以访问所有界面
  2或者3只能访问部分界面
}
*
 */
import { lazy } from "react";
const Home = lazy(() => import("../../page/Main/index")); // 首页
const Icons = lazy(() => import("../../page/Main/icons"));
const Tables = lazy(() => import("../../page/Main/tables"));
const Editor = lazy(() => import("../../page/Main/editor"));
const Forms = lazy(() => import("../../page/Main/forms"));
const Charts = lazy(() => import("../../page/Main/chart"));
const Tabs = lazy(() => import("../../page/Main/tabs"));
const Upload = lazy(() => import("../../page/Main/upload"));
const Locale = lazy(() => import("../../page/Main/locale"));
const MarkDown = lazy(() => import("../../page/Main/markDown"));
const ErrorRoute = lazy(() => import("../../page/Error/index")); // 非法路由提示界面404
const routerList = [
  {
    icon: "anticon-lx-home",
    index: "/main/home",
    title: "首页",
    limit: ["1", "2", "3"],
    component: Home,
  },
  {
    icon: "anticon-lx-cascades",
    index: "/main/tables",
    title: "基础表格",
    limit: ["1", "2"],
    component: Tables,
  },
  {
    icon: "anticon-lx-emoji",
    index: "/main/icons",
    title: "自定义图标",
    limit: ["1", "2"],
    component: Icons,
  },
  {
    icon: "anticon-lx-copy",
    index: "/main/tabs",
    title: "tab选项卡",
    limit: ["1", "3"],
    component: Tabs,
  },
  {
    icon: "anticon-lx-calendar",
    index: "5",
    title: "三级菜单示例",
    limit: ["1", "3"],
    subs: [
      {
        index: "/main/forms",
        title: "基础表单",
        limit: ["1", "3"],
        component: Forms,
      },
      {
        index: "/main/upload",
        title: "上传组件",
        limit: ["1"],
        component: Upload,
      },
      {
        index: "5-3",
        title: "编辑器",
        limit: ["1", "3"],
        subs: [
          {
            index: "/main/editor",
            title: "富文本编辑器",
            limit: ["1", "3"],
            component: Editor,
          },
          {
            index: "/main/markdown",
            title: "markdown编辑器",
            limit: ["1"],
            component: MarkDown,
          },
        ],
      },
    ],
  },
  {
    icon: "anticon-lx-rank",
    index: "/main/charts",
    title: "schart图表",
    limit: ["1", "3"],
    component: Charts,
  },
  {
    icon: "anticon-lx-global",
    index: "/main/i18n",
    title: "国际化",
    limit: ["1", "2"],
    component: Locale,
  },
  {
    icon: "anticon-lx-warn",
    index: "7",
    title: "错误处理",
    limit: ["1", "2", "3"],
    subs: [
      {
        index: "/error/404",
        title: "404页面",
        limit: ["1", "2", "3"],
        component: ErrorRoute,
      },
    ],
  },
];
export default routerList;
