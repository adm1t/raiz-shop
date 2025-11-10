// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

// @ts-ignore
import anyEslintParser from 'any-eslint-parser'

export default withNuxt(
  {
    rules: {
      'linebreak-style': ['error', 'unix'],
      'vue/no-v-html': 'off',
    },
  },
  {
    files: ['**/*.scss'],
    languageOptions: { parser: anyEslintParser },
  },
)
