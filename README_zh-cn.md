# vite-plugin-hot-export

自动导出文件并且支持热更新

[English](/README.md)|简体中文

[![NPM version](https://badge.fury.io/js/vite-plugin-hot-export.svg)](https://www.npmjs.com/package/vite-plugin-hot-export)


<p align='center'>
<img src='https://git.poker/sudongyuer/image-bed/blob/master/20220714/vite-plugin-auto-export-logo.1aoaypaggq5c.png?raw=true' width='200'/>
</p>


## Why ?

开发的时候，我们通常需要从网络上下载`图片`或`svg`，使用的时候需要`手动`的在`index.ts`导出，这个插件能够帮助你`自动`导出并且支持热更新 🌈

## 🚀 Features

- 👻 支持多目录生成
- 🍁自动导出文件
- 🐥 自定义导出路径
- 🍄 支持自定义`import`语句
- ✨ 支持热更新
- 🌈 支持嵌套目录生成
- 🍣 支持自动添加前缀


## 📺 Preview

<p align='center'>
<img src='https://git.poker/sudongyuer/image-bed/blob/master/20220717/屏幕录制2022-07-17-11.2ia7q69awd00.gif?raw=true' width='100%'/>
</p>



## 🦄  Usage

### Install

```bash
pnpm add -D vite-plugin-hot-export
```

### Config export.config.ts

-  targetDir(必要的)：导出文件的目录
- outputDir (可选的,默认 targetDir) ：指定生成`index.ts`的目录
- customImport (可选的)：自定义`index.ts`中的导出语句
- depth (可选的 , 默认 true) :  遍历所有子目录
- autoPrefix (可选的 , 默认 false) ：自动添加文件前缀名。请注意，如果使用了customImport配置，这个配置将被忽略

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

在vite.config.js / vite.config.ts中添加 `vite-plugin-hot-export`插件并且配置：

```js
// vite.config.js / vite.config.ts
import HotExport from 'vite-plugin-hot-export'

export default {
  plugins: [
    HotExport()
  ]
}
```

在你的项目中使用

```bash
pnpm run dev
```

## Not Work?

如果你使用的是webstorm，请按照下面的步骤检查：

![image-20220717101450402](https://tva1.sinaimg.cn/large/e6c9d24egy1h49pefcb4jj21580u0wi5.jpg)


## Author

sudongyuer email:976499226@qq.com

## 📄 License

[MIT](./LICENSE) License © 2021 [SuDongYu](https://github.com/sudongyuer)
