/*
 * @Author: renlei
 * @Date: 2020-05-30 14:57:40
 * @LastEditors: renlei
 * @LastEditTime: 2020-06-26 21:49:22
 * @Description:mobx主文件
 */
import HeaderStore from './headerStore';

const headerStore = new HeaderStore();
const stores = {
  headerStore
};
// 默认导出接口
export default stores;
