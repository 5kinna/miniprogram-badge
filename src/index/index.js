Component({
  externalClasses: ['my-badge'],
  properties: {
    count: {
      type: Number,
      value: 0
    },
    over: {
      type: [Number, String],
      value: 99
    },
    dot: {
      type: Boolean,
      value: false
    }
  }
})
