Component({
  properties: {
    count: {
      type: Number,
      value: 199,
    },
    over: {
      type: Number,
      value: 99,
    },
    color: {
      type: String,
      value: '#fff'
    },
    bg: {
      type: String,
      value: 'red'
    },
    type: {
      type: String,
      value: 'text'
    },
    // 是否会呼吸
    isBreath: {
      type: Boolean,
      value: false
    }
  },
  data: {
    value: ''
  },
  lifetimes: {
    attached() {
      const newVal = this.properties.count > this.properties.over ? `${this.properties.over}+` : `${this.properties.count}`
      // 在组件实例进入页面节点树时执行
      this.setData({
        value: newVal
      })
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
})
