import comp from "/Users/wangjunkai/hundun/ui-components/hundun-ui-library/docs/docs/.vuepress/.temp/pages/home.html.vue"
const data = JSON.parse("{\"path\":\"/home.html\",\"title\":\"主页\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"S11\",\"slug\":\"s11\",\"link\":\"#s11\",\"children\":[]},{\"level\":2,\"title\":\"S22\",\"slug\":\"s22\",\"link\":\"#s22\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"home.md\"}")
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
