
import { defineClientConfig } from 'vuepress/client'
// import HDButton from '../../../src/components/h-d-button/index.vue'


export default defineClientConfig({
  async enhance({ app, router, siteData }) {
    // app.component('h-d-button', HDButton)
  },
  setup() {},
  rootComponents: [],
})