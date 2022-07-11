import Hotexport from 'vite-plugin-hot-export'
export default Hotexport.defineExportConfig({
  configs: [{
    targetDir: './src/images/',
  }],

})
