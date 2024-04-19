import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { webpackBundler } from '@vuepress/bundler-webpack'


export default defineUserConfig({
  lang: 'zh-CN',
  
  title: 'VuePress',
  description: 'My first VuePress Site',
  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',
    colorMode: {
      defaultMode: 'light', // 默认模式为浅色
      // 深色模式的配置
      dark: {
        // dark 模式下的颜色配置
      },
      // 浅色模式的配置
      light: {
        // light 模式下的颜色配置
      }
    },

    sidebar: [
      {
        text: '首页',
        link: '/',
      }, 
      {
        text: 'BBB',
        link: '/BBB',
      },
      {
        text: '主页',
        link: '/home',
      }, { text: '快速', link: '/get-started' }, {
        text: 'Group',
        children: ['/group/foo.md', '/group/bar.md'],
      },],
  }),

  bundler: webpackBundler(),
})
