import path from 'node:path'
import { cwd } from 'node:process'
import fs from 'fs'
import { describe, expect, it } from 'vitest'
describe('should', () => {
  it('exported', () => {
    expect(1).toEqual(1)
  })
})

it('getCurrentDirFilesCount', () => {
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

  const length = getCurrentDirFilesCount(path.resolve(cwd(), './'))
  expect(length).toBe(4)
})
