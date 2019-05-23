# miniprogram-badge

## 使用效果

![badge](./docs/badge.jpg)

> PS：此组件默认只携带最简单样式。

## 功能列表

- [x] 右上角显示点
- [x] 显示数字
- [x] 超过一定数值显示 数值+

## 使用方法

1. 安装 miniprogram-badge

```
npm i miniprogram-badge
```

2. 在需要使用 miniprogram-badge 的页面 page.json 中添加 miniprogram-badge 自定义组件配置

```json
{
  "usingComponents": {
    "badge": "miniprogram-badge"
  }
}
```

3. WXML 文件中引用 miniprogram-badge

miniprogram-badge 提供一个`<slot>`节点，用于承载组件引用时提供的子节点。

```xml
<badge count="{{11}}">
  <text>落枕</text>
</badge>
```

**miniprogram-badge 的属性介绍如下：**

| 属性名 | 类型             | 单位 | 默认值 | 是否必须 | 说明       |
| ------ | ---------------- | ---- | ------ | -------- | ---------- |
| dot    | Boolean          | 空   | false  | 否       | 是否显示点 |
| count  | Number           | 空   | 0      | 否       | 显示数字   |
| over   | [Number, String] | 空   | 99     | 否       | 最大临界值 |

## 单元测试

### 说明

采用小程序自带的 miniprogram-simulate 测试工具集，因为 badge 只是 ui 组件，所以这里采用快照测试的方式来进行测试。

### 疑问

- simulate.load 加载同一个组件时，只能加载一次，不然返回的 id 就是 undefined，不知道这里是设计如此还是我使用的问题？
