module.exports = {
  stories: ['../src/components/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  core: {
    builder: 'webpack5',
  },
  addons: [
    'storybook-dark-mode',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-addon-next',
  ],
  features: {
    interactionsDebugger: true,
  },
  framework: '@storybook/react',
};
