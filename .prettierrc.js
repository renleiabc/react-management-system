/*
 * @Author: renlei
 * @Date: 2020-06-26 11:34:42
 * @LastEditors: abc
 * @LastEditTime: 2020-11-10 09:58:53
 * @Description:
 */

module.exports = {
  printWidth: 120,
  trailingComma: 'none',
  jsxBracketSameLine: true,
  /*  prettier的配置 */
  printWidth: 100, // 超过最大值换行
  tabWidth: 2, // 缩进字节数
  useTabs: false, // 缩进不使用tab，使用空格
  semi: true, // 句尾添加分号
  singleQuote: true, // 使用单引号代替双引号
  proseWrap: 'preserve', // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
  arrowParens: 'avoid', //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  //'prettier.disableLanguages': ['vue'], // 不格式化vue文件，vue文件的格式化单独设置
  endOfLine: 'auto' // 结尾是 \n \r \n\r auto
};
