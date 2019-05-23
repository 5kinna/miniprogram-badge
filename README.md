# miniprogram-badge

## 功能列表

- [x] 右上角显示点
- [x] 显示数字
- [x] 超过一定数值显示 数值+

## 单元测试

### 说明

采用小程序自带的 miniprogram-simulate 测试工具集，因为 badge 只是 ui 组件，所以这里采用快照测试的方式来进行测试。

### 疑问

- simulate.load 加载同一个组件时，只能加载一次，不然返回的 id 就是 undefined，不知道这里是设计如此还是我使用的问题？
