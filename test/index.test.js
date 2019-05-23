const _ = require('./utils')

describe('badge render', () => {
  // 加载自定义组件，返回 componentId
  // Q:同一个组件只能加载一次，否则会返回undefined
  const componentId = _.load('/index', 'comp')
  // 默认样式
  it('default', () => {
    const component = _.render(componentId, {})
    const parent = document.createElement('parent-wrapper')
    component.attach(parent)
    expect(component).toMatchSnapshot()
  })
  // 展示点的样式
  it('dot', () => {
    const component = _.render(componentId, {dot: true})
    const parent = document.createElement('parent-wrapper-dot')
    component.attach(parent)
    expect(component).toMatchSnapshot()
  })
  // 数字小于最大值的样式
  it('count lt over', () => {
    const component = _.render(componentId, {dot: false, count: 8})
    const parent = document.createElement('parent-wrapper-count')
    component.attach(parent)
    expect(component).toMatchSnapshot()
  })
  // 数字大于最大值的样式
  it('count gt over', () => {
    const component = _.render(componentId, {dot: false, count: 999})
    const parent = document.createElement('parent-wrapper-over')
    component.attach(parent)
    expect(component).toMatchSnapshot()
  })
})
