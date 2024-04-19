import comp from "/Users/wangjunkai/hundun/ui-components/hundun-ui-library/docs/docs/.vuepress/.temp/pages/BBB.html.vue"
const data = JSON.parse("{\"path\":\"/BBB.html\",\"title\":\"bbb\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"BBB.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
