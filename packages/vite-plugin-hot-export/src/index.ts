import path from 'node:path'
import { cwd } from 'process'
import child_process from 'child_process'
import fs from 'fs'
import type { Plugin } from 'vite'
import { loadConfig } from 'unconfig'
import chokidar from 'chokidar'

function VitePluginHotExport(): Plugin {
  return {
    name: 'vite-plugin-hot-export',
    apply: 'serve',
    config(config, { command }) {
      excuteAutoExport()
      if (command === 'serve') {
        loadConfig<ExportConfig>({
          sources: [
            {
              files: 'export.config',
              extensions: ['ts', 'mts', 'cts', 'js', 'mjs', 'cjs', 'json', ''],
            },
          ],
        }).then(({ config: configArray }) => {
          const configs = configArray.configs
          for (let i = 0; i < configs.length; i++) {
            const config = configs[i]
            const { targetDir } = config
            let filesCount = getCurrentDirFilesCount(targetDir)
            chokidar.watch(path.resolve(cwd(), config.targetDir), {
              ignoreInitial: true,
              atomic: true,
              followSymlinks: true,
            }).on('all', (event, pathDir) => {
              if (pathDir !== path.resolve(cwd(), targetDir, 'index.ts')) {
                const newFilesCount = getCurrentDirFilesCount(targetDir)
                if (newFilesCount !== filesCount) {
                  excuteAutoExport()
                  filesCount = newFilesCount
                }
              }
            })
          }
        })
      }
    },
  }
}

function excuteAutoExport() {
  try {
    child_process.execSync('pnpm autoexport')
  }
  catch (error) {
    child_process.execSync('npx autoexport')
  }
}

type CustomImport = (fileName: string, file: string, fileType: string) => string

interface Config {
  targetDir: string
  outputDir?: string
  customImport?: CustomImport
  depth?: boolean
  autoPrefix?: boolean
}

export interface ExportConfig {
  configs: Array<Config>
}

function defineExportConfig(config: ExportConfig): ExportConfig {
  return config
}

function getCurrentDirFilesCount(targetDir: string) {
  let filesLength = 0
  const DirAndFiles = fs.readdirSync(path.resolve(cwd(), targetDir))
  for (let i = 0; i < DirAndFiles.length; i++) {
    const file = DirAndFiles[i]
    const filePath = path.resolve(cwd(), targetDir, file)
    const stats = fs.statSync(filePath)
    if (stats.isFile())
      filesLength++
    else
      filesLength += getCurrentDirFilesCount(filePath)
  }
  return filesLength
}

export { defineExportConfig }

export default VitePluginHotExport
