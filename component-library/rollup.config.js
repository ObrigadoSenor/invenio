import external from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
import postCss from 'rollup-plugin-postcss';
import {terser} from "rollup-plugin-terser";
import dts from "rollup-plugin-dts";

export default [
  {
    input: './index.ts',
    output: [
      {
        dir: 'dist',
        format: 'cjs',
      },
    ],
    plugins: [
      postCss({
        extract: false,
        minimize: false,
      }),
      external({
        includeDependencies: true,
      }),
      typescript({
        // eslint-disable-next-line no-undef
        typescript: require('typescript'),
      }),
      terser()
    ]
  },
  {
    input: './index.ts',
    output: [
      {
        dir: 'dist',
        format: 'es',
      },
    ],
    plugins: [
      postCss({
        extract: false,
        inject: false
      }),
      external({
        includeDependencies: true,
      }),
      dts(),
    ]
  }
]