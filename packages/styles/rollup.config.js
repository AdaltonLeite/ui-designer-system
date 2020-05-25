import autoprefixer from 'autoprefixer'
import postcss from 'rollup-plugin-postcss'

export default {
  input: 'global/index.scss',
  output: [
    {
      file: '../../build/variables/style.css',
      format: 'es',
    },
  ],
  plugins: [
    postcss({
      extract: true,
      modules: false,
      use: ['sass'],
      plugins: [autoprefixer()],
    }),
  ],
}