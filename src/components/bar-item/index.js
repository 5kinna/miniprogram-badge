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
  },
  data: {},
  lifetimes: {
    attached() {},
  },
})
