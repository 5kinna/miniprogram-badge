const path = require('path')
const simulate = require('miniprogram-simulate')

const config = require('../tools/config')

const srcPath = config.srcPath
const oldLoad = simulate.load
// 重写simulate.load方法
simulate.load = function (componentPath, ...args) {
  componentPath = path.join(srcPath, componentPath)
  return oldLoad(componentPath, ...args)
}

module.exports = simulate
