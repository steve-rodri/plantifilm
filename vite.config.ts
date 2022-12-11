import react from "@vitejs/plugin-react"
import { defineConfig, configDefaults } from "vitest/config"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    exclude: [...configDefaults.exclude],
    globals: true
  }
})
