/*
 * @Author: renlei
 * @Date: 2020-05-30 14:58:14
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-30 18:43:57
 * @Description:头部公共部分文件
 */
import { observable, action } from "mobx";
class HeaderStore {
  @observable collapsed = false;
  @action onCollapse(state) {
    if (this.collapsed) {
      this.collapsed = false;
    } else {
      this.collapsed = true;
    }
  }
}
export default HeaderStore;
