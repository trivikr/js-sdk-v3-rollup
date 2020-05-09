import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';


export default {
  output: {
    dir: 'dist',
    format: 'cjs',
    preferConst: true,
  },
  input: './src/index.js',
  plugins: [
    json(),
    resolve(),
  ]
}
