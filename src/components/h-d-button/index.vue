<!-- src/components/Button.vue -->
<template>
  <div>
    <button @click="$emit('click')" class="hd-button">
      <slot></slot>
    </button>
    <el-button type="primary">8888</el-button>
  </div>

  </template>
  
  <script>
  import { Button } from "element-ui";
  import './style.scss'
  export default {
    name: 'HDButton',
    components:{
     'el-button':Button
    }
  }
  </script>
  

  