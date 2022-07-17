# vite-plugin-hot-export



Automatically export files with HMR

[![NPM version](https://badge.fury.io/js/vite-plugin-hot-export.svg)](https://www.npmjs.com/package/vite-plugin-hot-export)


<p align='center'>
<img src='https://git.poker/sudongyuer/image-bed/blob/master/20220714/vite-plugin-auto-export-logo.1aoaypaggq5c.png?raw=true' width='200'/>
</p>

## Why ?

When developing, we often need to download some `images` or `svg` from the internet, and when we need to use them, we need export them in `index.ts` file `manually`, this plugin can handle this for you `automatically`.And support HMR 🌈

## 🚀 Features

- 👻 Multiple directory generate support
- 🍁 Auto export files
- 🐥 custom outputDir
- 🍄 Support custom import statement
- ✨ HMR support 
- 🌈 Nest directory generate support
- 🍣 Auto Prefix support


## 📺 Preview

<p align='center'>
<img src='https://git.poker/sudongyuer/image-bed/blob/master/20220714/hot-export-privew.gif?raw=true' width='100%'/>
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
import { defineExportConfig } from 'vite-plugin-hot-export'
export default defineExportConfig({
  configs: [
    {
      targetDir: './src/assets/images',
    },
    {
      targetDir: './src/assets/img',
      depth: true,
      autoPrefix: true
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
    {
      targetDir: './src/assets/gif',
      customImport: (fileName, file, fileType) => {
        return `import ${fileType}${fileName} from '${file}'`
      },
      depth: true
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
## Not Work?

If you are use webstorm, please check the following:

![image-20220717101450402](https://tva1.sinaimg.cn/large/e6c9d24egy1h49pefcb4jj21580u0wi5.jpg)


## Author

sudongyuer email:976499226@qq.com

## 📄 License

[MIT](./LICENSE) License © 2021 [SuDongYu](https://github.com/sudongyuer)
