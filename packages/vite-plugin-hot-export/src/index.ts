import path from 'node:path'
import { cwd } from 'process'
import child_process from 'child_process'
import type { Plugin } from 'vite'
import { loadConfig } from 'unconfig'
import type { ExportConfig } from 'auto-export'
import { defineExportConfig } from 'auto-export'

interface config {
  targetDir: string
  outputDir?: string
  customImport?: (fileName: string, file: string) => string
}

function VitePluginHotExport(): Plugin {
  let configs: Array<config>
  return {
    name: 'vite-plugin-hot-export',
    enforce: 'pre',
    apply: 'serve',
    async configResolved() {
      const { config: configArray } = await loadConfig<ExportConfig>({
        sources: [
          {
            files: 'export.config',
            extensions: ['ts', 'mts', 'cts', 'js', 'mjs', 'cjs', 'json', ''],
          },
        ],
      })
      configs = configArray.configs
      if (configs) {
        console.log('=========', 'config!!!')
        child_process.execSync('pnpm autoexport')
      }
    },
    async handleHotUpdate(ctx) {
      console.log(ctx.file, '==============')
      // 判断是否为index文件
      const isIndex = configs.some((config) => {
        return ctx.file === (path.join(cwd(), config.targetDir, 'index.ts'))
      })
      if (isIndex) return
      // 判断需要监听的文件夹是否变换
      const hasChanged = configs.some((config) => {
        console.log('-------------------', path.join(cwd(), config.targetDir))
        return ctx.file.includes(path.join(cwd(), config.targetDir))
      })
      console.log(hasChanged, '===============')
      // 变换了则重新执行脚本命令
      if (hasChanged)
        child_process.execSync('pnpm autoexport')
      // 否则就return
    },
  } as Plugin
}

VitePluginHotExport.defineExportConfig = defineExportConfig

export default VitePluginHotExport
