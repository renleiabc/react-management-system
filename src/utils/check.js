/*
 * @Author: renlei
 * @Date: 2020-05-27 17:27:53
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-31 17:07:32
 * @Description:权限及登录检查
 */
export const request = (url, init) => {
  return fetch(url, init).then((res) => res.json());
};

// 用户校验函数，这里判断用户名是否有权限进入该页面，使用时根据实际情况进行修改
// 所有用户都能进入的界面
export const allUser = () => {
  const role = localStorage.getItem("ms_username");
  const boo = ["1", "2", "3"].includes(role);
  console.log(role, boo);
  return boo;
};
// 只允许1,2用户进入
export const partUser = () => {
  const role = localStorage.getItem("ms_username");
  const boo = ["1", "2"].includes(role);
  console.log(role, boo);
  return boo;
};
// 只允许1用户进入
export const oneUser = () => {
  const role = localStorage.getItem("ms_username");
  const boo = ["1"].includes(role);
  console.log(role, boo);
  return boo;
};
// 只允许1,3用户进入
export const halfUser = () => {
  const role = localStorage.getItem("ms_username");
  const boo = ["1", "3"].includes(role);
  console.log(role, boo);
  return boo;
};
// 根据不同的用户角色，去过滤不同的路由链接

export const handleRouterFilter = (arr, role) => {
  const showList = arr.filter((items) => {
    if (items.limit.includes(role)) {
      if (items.subs) {
        const firstItems = items.subs.filter((item) => {
          if (item.limit.includes(role)) {
            if (item.subs) {
              const secondItem = item.subs.filter((sub) => {
                return sub.limit.includes(role);
              });
              item.subs = secondItem;
              return secondItem;
            }
          }
          return item.limit.includes(role);
        });
        items.subs = firstItems;
        return items;
      }
    }
    return items.limit.includes(role);
  });
  return showList;
};
// 登录校验，这里简单判断是否有localstorage则表示是否已登录
export const checkAuth = () => {
  return !!localStorage.getItem("ms_username");
};
