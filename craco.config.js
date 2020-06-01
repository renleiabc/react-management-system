/*
 * @Author: renlei
 * @Date: 2020-05-18 12:00:59
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-30 16:01:30
 * @Description:项目配置文件
 */
const CracoLessPlugin = require("craco-less");
const path = require("path");
const variableStyle = require("./variableStyle");
// const TerserPlugin = require("terser-webpack-plugin");
// const CracoAntDesignPlugin = require("craco-antd");
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
module.exports = {
  babel: {
    plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]],
  },
  style: {
    css: {
      loaderOptions: (cssLoaderOptions, { env, paths }) => {
        cssLoaderOptions.sourceMap = env === "development";
        // console.log("key:", cssLoaderOptions);
        return cssLoaderOptions;
      },
    },
  },
  webpack: {
    // 别名
    alias: {
      "@": path.resolve("src"),
    },
    plugins: [
      /* new TerserPlugin({
        sourceMap: true, // Must be set to true if using source-maps in production
        terserOptions: {
          ecma: undefined,
          warnings: false,
          parse: {},
          compress: {
            drop_console: process.env.NODE_ENV === "production", // 生产环境下移除控制台所有的内容
            drop_debugger: false, // 移除断点
            pure_funcs:
              process.env.NODE_ENV === "production" ? ["console.log"] : "", // 生产环境下移除console
          },
        },
      }), */
    ],
    configure: (webpackConfig, { env, paths }) => {
      console.log(process.env.NODE_ENV);
      webpackConfig.devtool =
        env === "development" ? "cheap-module-source-map" : "none";
      // console.log("webpackConfig:", webpackConfig.plugins);
      return webpackConfig;
    },
  },
  /*  */
  devServer: {
    port: 9099, // 端口配置
    proxy: {
      "/api": {
        target: "http://rap2.taobao.org:38080/app/mock/254896/",
        ws: false, // websocket
        changeOrigin: true, //是否跨域
        secure: false, // 如果是https接口，需要配置这个参数
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  /* devServer: (devServerConfig, { env, paths, proxy, allowedHost }) => {
    console.log("devServerConfig:", devServerConfig);
    //devServerConfig.compress = false;
    //devServerConfig.publicPath = "";

    return devServerConfig;
  }, */
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          modifyVars: variableStyle,
          javascriptEnabled: true,
        },
      },
    },
  ],
};
