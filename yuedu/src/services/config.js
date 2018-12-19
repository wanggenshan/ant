// 动态设置host
export const host = !/123.206.55.50/.test(window.location.host) ?'http://169.254.10.8:8888': 'httP://123.206.55.50:8888';
