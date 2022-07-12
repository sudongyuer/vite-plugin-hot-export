import { defineExportConfig } from 'vite-plugin-hot-export'

export default defineExportConfig({
  configs: [
    {
      targetDir: './src/images/',
    },
    {
      targetDir: './src/svgs/',
      customImport: (fileName, file) => {
        return `import { ReactComponent as ${fileName} } from './${file}'`
      },
    },
  ],
})
