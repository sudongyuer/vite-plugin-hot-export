[English](https://github.com/sudongyuer/vite-plugin-hot-export#readme) | 简体中文

# vite-plugin-hot-export

自动导出

[![NPM version](https://badge.fury.io/js/vite-plugin-hot-export.svg)](https://www.npmjs.com/package/vite-plugin-hot-export)


<p align='center'>
<img src='https://git.poker/sudongyuer/image-bed/blob/master/20220714/vite-plugin-auto-export-logo.1aoaypaggq5c.png?raw=true' width='200'/>
</p>

## 为什么 ?

开发时用的image，svg等资源，我们需要手动通过`index.ts`导出, 这款插件就可以解放双手，并且支持`HMR` 🌈

## 🚀 特点

- 👻 支持文件夹批量生成
- 🍁 自动导出文件
- 🐥 自定义输出文件
- 🍄 自定义导入声明
- ✨ 支持`HMR`
- 🌈 支持多级目录
- 🍣 自动添加前缀


## 📺 预览

<p align='center'>
<img src='https://git.poker/sudongyuer/image-bed/blob/master/20220717/屏幕录制2022-07-17-11.2ia7q69awd00.gif?raw=true' width='100%'/>
</p>


## 🦄 用法

### 安装

```bash
pnpm add -D vite-plugin-hot-export
```

### 配置 `export.config.ts`

- `targetDir` (必须) : 目标文件夹

- `outputDir` (可选,默认：目标文件夹) : 通过 `index.ts` 文件导出

- `customImport` (可选) : 通过`index.ts`自定义导入 

- `depth` (可选 , 默认： true) : 递归子目录

- `autoPrefix` (可选 , 默认： false) : 自动给文件加前缀. 注意：如果`customImport`没有配置，则忽略该配置

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

增加 `vite-plugin-hot-export` 插件到 vite.config.js / vite.config.ts 然后配置它:

```js
// vite.config.js / vite.config.ts
import HotExport from 'vite-plugin-hot-export'

export default {
  plugins: [
    HotExport()
  ]
}
```
然后起服务
```bash
pnpm run dev
```
## 没有生效?

如果你用的是`webstorm`，请参考:

![image-20220717101450402](https://tva1.sinaimg.cn/large/e6c9d24egy1h49pefcb4jj21580u0wi5.jpg)


## 作者

sudongyuer email:976499226@qq.com

## 📄 License

[MIT](./LICENSE) License © 2021 [SuDongYu](https://github.com/sudongyuer)
