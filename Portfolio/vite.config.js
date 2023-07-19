import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 5000, // 加大限制的大小将500kb改成1500kb或者更大
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // 分解块，将大块分解成更小的块,在vite.config.js当中的build下面进行配置
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
            // 但是生成的文件都在dist下面的assets文件下，里面既有js、css等等。
          }
        },
        // 可以将不同的文件放在不同的文件下
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
            ? chunkInfo.facadeModuleId.split("/")
            : [];
          const fileName =
            facadeModuleId[facadeModuleId.length - 2] || "[name]";
          return `js/${fileName}/[name].[hash].js`;
        },
      },
    },
  },
});
