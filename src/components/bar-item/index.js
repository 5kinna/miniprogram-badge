Component({
  properties: {
    item: {
      type: Object,
      value: {},
    },
    badge: {
      type: Boolean,
      value: false,
    },
    count: {
      type: Number,
    },
    over: {
      type: Number,
    },
    flag: {
      type: String,
    },
    color: {
      type: String,
      value: '#f6f7f8',
    },
    selectedColor: {
      type: String,
      value: '#3984d0',
    },
  },
  data: {},
  lifetimes: {
    attached() {},
  },
})
