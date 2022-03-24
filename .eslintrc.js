module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
    'next/core-web-vitals',
  ],
  rules: {
    /**
     * Prevent extra closing tags for components without children.
     * @example <Button color="blue" size="small"></Button> // error
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
     */
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],

    /**
     * Allow explicit usage of the `any` type. This provides an escape hatch, but should be used with caution.
     * @see https://typescript-eslint.io/rules/no-explicit-any
     */
    '@typescript-eslint/no-explicit-any': 0,

    /**
     * Allow `require` statements. Should be used only in js config files eg. `tailwind.config.js`.
     * @see https://typescript-eslint.io/rules/no-var-requires/
     */
    '@typescript-eslint/no-var-requires': 0,

    /**
     * Requires descriptive comment when using `@ts-<directive>`.
     * @see https://typescript-eslint.io/rules/ban-ts-comment
     */
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': true,
        'ts-check': false,
        minimumDescriptionLength: 4,
      },
    ],
  },
};
