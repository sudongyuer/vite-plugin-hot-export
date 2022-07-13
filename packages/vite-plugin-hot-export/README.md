# vite-plugin-hot-export



Automatically export files with HMR

[![NPM version](https://img.shields.io/github/package-json/v/sudongyuer/vite-plugin-hot-export)](https://www.npmjs.com/package/vite-plugin-hot-export)


<p align='center'>
<img src='https://git.poker/sudongyuer/image-bed/blob/master/20220713/hot-export.24hns7wq9i2o.png?raw=true' width='200'/>
</p>

## Why ?

When developing, we often need to download some `images` or `svg` from the internet, and when we need to use them, we need export them in `index.ts` file `manually`, this plugin can handle this for you `automatically`.And support HMR 🌈

## 🚀 Features

- Multiple directory generate support
- Auto export files
- custom outputDir
- 🍄 Support custom import statement
- ✨ HMR support 

## 📺 Preview

<p align='center'>
<img src='https://git.poker/sudongyuer/image-bed/blob/master/20220713/vite-hot-export-demo.l9h48i8j2f4.gif?raw=true' width='100%'/>
</p>


## 🦄 Usage

### Install

```bash
pnpm add -D vite-plugin-hot-export
```

### Config `export.config.ts`

- targetDir (require) : the directory to export files

- outputDir (optional): the directory to generate the `index.ts` file to export files

- customImport (optional): custom the import statement to use in the `index.ts` file 

```js
import { defineExportConfig } from 'vite-plugin-export'
export default defineExportConfig({
  configs: [
    {
      targetDir: './src/assets/images',
    },
    {
      targetDir: './src/assets/css',
      outputDir: './src/assets/css',
    },
    {
      targetDir: './src/assets/svgs',
      customImport: (fileName, file) => {
        return `import { ReactComponent as ${fileName} } from '${file}'`
      },
    },
  ],
})

```

Add `vite-plugin-hot-export` plugin to vite.config.js / vite.config.ts and configure it:

```js
// vite.config.js / vite.config.ts
import HotExport from 'vite-plugin-hot-export'

export default {
  plugins: [
    HotExport()
  ]
}
```
Then start your project
```bash
pnpm run dev
```

## Author

sudongyuer email:976499226@qq.com

## 📄 License

[MIT](./LICENSE) License © 2021 [SuDongYu](https://github.com/sudongyuer)
