import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import { resolve } from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // 设置 `@` 指向 `src` 目录
      'vue': 'vue/dist/vue.esm-bundler.js'
    },
  },
  base: "./", // 设置打包路径
  server: {
    port: 8888, // 设置服务启动端口号
    // open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    // 设置代理，根据我们项目实际情况配置
    // proxy: {
    //   '/api': {
    //     target: 'http://xxx.xxx.xxx.xxx:8000',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace('/api/', '/')
    //   }
    // }
  },
});
