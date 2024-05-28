import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  ...tseslint.configs.recommended,
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    files: ['**/*.ts'],
    rules: {
      'no-empty-function': 'off',
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/no-empty-interface': 'error',
      '@typescript-eslint/ban-ts-comment': 'error',
      '@typescript-eslint/prefer-readonly': 'error',
      'lines-between-class-members': 'off',
      '@typescript-eslint/lines-between-class-members': 'error',
      'space-before-blocks': 'off',
      '@typescript-eslint/space-before-blocks': 'error',
      '@typescript-eslint/type-annotation-spacing': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
)
