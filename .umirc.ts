import { defineConfig } from 'umi';

export default defineConfig({
  publicPath : './',
  // base: '/1802A/chenmanjie/market/',
  nodeModulesTransform: {
    type: 'none',
  },
  title: '八维严选，关注您的品质生活',
  history: {type: 'hash'},
  analytics: {
    baidu: '9f9fd730557c9f615b60a2133fb7616f',
  },
});


