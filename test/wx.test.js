test('wx.getSystemInfoSync', async () => {
  const info = wx.getSystemInfoSync()
  expect(info.SDKVersion).toBe('2.4.1')
  expect(info.version).toBe('6.6.3')
})
