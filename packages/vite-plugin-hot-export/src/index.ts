import path from 'node:path'
import { cwd } from 'process'
import child_process from 'child_process'
import type { Plugin } from 'vite'
import { loadConfig } from 'unconfig'
import chokidar from 'chokidar'

function VitePluginHotExport(): Plugin {
  loadConfig<ExportConfig>({
    sources: [
      {
        files: 'export.config',
        extensions: ['ts', 'mts', 'cts', 'js', 'mjs', 'cjs', 'json', ''],
      },
    ],
  }).then(({ config: configArray }) => {
    const configs = configArray.configs
    configs.forEach((config) => {
      const { targetDir } = config
      chokidar.watch(path.resolve(cwd(), config.targetDir)).on('all', (event, pathDir) => {
        if (pathDir !== path.resolve(cwd(), targetDir, 'index.ts')) {
          try {
            child_process.execSync('pnpm autoexport')
          }
          catch (error) {
            child_process.execSync('npx autoexport')
          }
        }
      })
    })
  })

  return {
    name: 'vite-plugin-hot-export',
  }
}

interface config {
  targetDir: string
  outputDir?: string
  customImport?: (fileName: string, file: string) => string
}

export interface ExportConfig {
  configs: Array<config>
}

function defineExportConfig(config: ExportConfig): ExportConfig {
  return config
}

export { defineExportConfig }

export default VitePluginHotExport
