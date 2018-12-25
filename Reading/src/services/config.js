// 动态设置host
export const host = !/123.206.55.50/.test(window.location.host)
  ? 'http://123.206.55.50:15000'
  : 'http://123.206.55.50:15000';
