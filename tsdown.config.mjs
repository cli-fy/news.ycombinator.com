import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/index.ts'],
  format: ['esm'],
  clean: true,
  dts: true,
  external: [],
  noExternal: [/^@hono\/zod-openapi(?:\/.*)?$/, /^hono(?:\/.*)?$/, /^incur(?:\/.*)?$/, /^zod(?:\/.*)?$/],
  fixedExtension: false,
})
