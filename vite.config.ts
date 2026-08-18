import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  plugins: [
    TanStackRouterVite({ routesDirectory: "./src/routes", generatedRouteTree: "./src/routeTree.gen.ts" }),
    react(),
    tailwindcss(),
    imagetools({
      defaultDirectives: (url) => {
        const ext = url.pathname.split(".").pop()?.toLowerCase();
        if (ext === "jpg" || ext === "jpeg" || ext === "png") {
          return new URLSearchParams({ format: "webp", quality: "85" });
        }
        return new URLSearchParams();
      },
    }),
  ],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
