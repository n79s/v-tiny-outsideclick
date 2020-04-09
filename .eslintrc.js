module.exports = {
    root: true,
    env: {
      node: true,
    },
    parserOptions: {
      parser: 'babel-eslint',
      ecmaVersion: '2018',
      sourceType: 'module',
    },
    extends: [
      'google',
      'eslint:recommended',
      'plugin:prettier/recommended',
      'plugin:vue/recommended',
      'prettier',
      'prettier/vue',
    ],
    plugins: ['vue', 'prettier'],
    rules: {
      'require-jsdoc': 'off',
  
      /** Don't touch this. */
      // prettierとeslintがimgタグを閉じる閉じないでコンフリクトが発生したので以下を追加
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
          },
        },
      ],
  
      // overwrite eslint-config-google (https://github.com/google/eslint-config-google/blob/master/index.js)
      // フォーマットする度にsingle <-> doubleを交互に繰り返すので、quotes設定を上書きする
      quotes: [
        'error',
        'single',
        { avoidEscape: true, allowTemplateLiterals: true },
      ],
  
      // 末尾カンマが二重でつくため、offにする (prettierのtrailingCommaのみ使う)
      'comma-dangle': 'off',
  
      'max-len': [
        2,
        {
          code: 130,
          tabWidth: 2,
          ignoreUrls: true,
          ignorePattern: 'goog.(module|require)',
        },
      ],
  
      // eslint@6.3.0へのバージョンアップ後、三項演算子の行の先頭の'?'および':'が'error'。
      // operator-linebreaを再定義して回避しておく。
      'operator-linebreak': [
        'error',
        'after',
        { overrides: { '?': 'before', ':': 'before' } },
      ],
    },
  }
  