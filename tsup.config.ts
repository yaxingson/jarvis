import { rename } from 'node:fs/promises'
import { defineConfig } from 'tsup'

export default defineConfig({
  entry:['./cli/index.ts'],
  clean:true,
  outDir:'bin',
  watch:true,
  async onSuccess() {
    await rename('./bin/index.cjs', './bin/jarvis.cjs')
  }
})
