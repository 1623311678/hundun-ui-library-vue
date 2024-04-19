export const themeData = JSON.parse("{\"logo\":\"https://vuejs.press/images/hero.png\",\"colorMode\":{\"defaultMode\":\"light\",\"dark\":{},\"light\":{}},\"sidebar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"BBB\",\"link\":\"/BBB\"},{\"text\":\"主页\",\"link\":\"/home\"},{\"text\":\"快速\",\"link\":\"/get-started\"},{\"text\":\"Group\",\"children\":[\"/group/foo.md\",\"/group/bar.md\"]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorModeSwitch\":true,\"navbar\":[],\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
