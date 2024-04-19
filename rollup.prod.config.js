import vue from 'rollup-plugin-vue';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss'; // 引入 rollup-plugin-postcss 插件
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import babel from '@rollup/plugin-babel';
import copy from 'rollup-plugin-copy';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/hundun-ui-library.umd.js',
      format: 'umd',
      name: 'MyComponentLibrary',
      globals: {
        vue: 'Vue' // 外部依赖的全局变量名
      }
    },
    {
      file: 'dist/hundun-ui-library.cjs.js',
      format: 'cjs',
      exports: 'named'
    },
    {
      file: 'dist/hundun-ui-library.esm.js',
      format: 'es'
    }
  ],
  plugins: [
    vue({
      css: true
    }),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**', // 排除 node_modules 目录
      presets: ['@babel/preset-env'], // 使用 Babel 转换 ES6 代码
      // plugins: [['component', { libraryName: 'hundun-ui-library' }]] // 使用 babel-plugin-component 插件按需引入组件
    }),
    postcss({ // 使用 rollup-plugin-postcss 插件，并设置输出路径
      extract: 'hundun-ui-library.css',
      // minimize: true, // 样式压缩
      // extensions: ['.scss'], // 指定需要处理的文件扩展名
      plugins: [
        autoprefixer(), // 添加自动添加浏览器前缀的插件
        cssnano() // 添加 CSS 压缩插件
      ],
      // 这里可以添加其他 postcss 相关配置
    }),
    copy({
      targets: [
        { src: './src/*', dest: 'dist/lib' },
      ]
    })
  ],
  external: ['vue','element-ui']
};
