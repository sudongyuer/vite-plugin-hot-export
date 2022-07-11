import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Inspect from 'vite-plugin-inspect'
import VitePluginHotExport from 'vite-plugin-hot-export'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Inspect(), VitePluginHotExport()],
},
)
