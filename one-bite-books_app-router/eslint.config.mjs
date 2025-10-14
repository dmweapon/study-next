import js from '@eslint/js'
import nextPlugin from '@next/eslint-plugin-next'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettier from 'eslint-plugin-prettier'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    ignores: ['node_modules', '.next', 'dist', 'out'],
  },
  {
    //files: ['**/*.{ts,tsx,js,jsx}'],
    files: ['**/*.{ts,tsx}'],
    ignores: ['.next', 'dist', 'node_modules'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      prettier,
      // ✅ Next.js 플러그인을 명시적으로 등록해야 함
      '@next/next': nextPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...prettier.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      'prettier/prettier': 'warn',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': 'warn', // 사용하지 않는 변수는 '경고'로 표시
      '@typescript-eslint/no-explicit-any': 'off', // any 타입을 명시적으로 사용 허용
      'no-undef': 'warn'
    },
  },
])