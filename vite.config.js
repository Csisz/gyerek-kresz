import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig, loadEnv } from "vite";

// Local demo mode is the default. The Base44 Vite plugin is only loaded when
// proxy mode is explicitly enabled and a backend URL is provided.
export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const enableBase44Proxy =
    env.VITE_ENABLE_BASE44_PROXY === "true" && Boolean(env.VITE_BASE44_APP_BASE_URL);

  const plugins = [];

  if (enableBase44Proxy) {
    const { default: base44 } = await import("@base44/vite-plugin");
    plugins.push(
      base44({
        // Support for legacy code that imports the Base44 SDK with
        // @/integrations, @/entities, etc. Keep disabled unless needed.
        legacySDKImports: env.BASE44_LEGACY_SDK_IMPORTS === "true",
        hmrNotifier: true,
        navigationNotifier: true,
        analyticsTracker: true,
        visualEditAgent: true
      })
    );
  }

  plugins.push(react());

  return {
    logLevel: "error",
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(process.cwd(), "src")
      }
    }
  };
});
