import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'Button/index': 'src/Button/index.ts',
  },
  format: ['esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['react'],
  outExtension() {
    return {
      js: '.js',
    }
  },
})
