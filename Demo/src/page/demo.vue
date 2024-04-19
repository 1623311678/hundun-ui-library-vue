<template>
    <div>
      <textarea v-model="markdownContent" rows="10" cols="50"></textarea>
      <div v-html="renderedMarkdown"></div>
    </div>
  </template>
  
  <script>
  import MarkdownIt from 'markdown-it';
  
  export default {
    data() {
      return {
        markdownContent: '# Hello, Markdown!',
        md: new MarkdownIt()
      };
    },
    computed: {
      renderedMarkdown() {
        return this.md.render(this.markdownContent);
      }
    }
  };
  </script>
  