// TODO: figure out why storybook doesn't pick up the root babelrc and delete this one
module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-react': {
          runtime: 'automatic',
          importSource: '@emotion/react',
        },
      },
    ],
  ],
  plugins: [
    '@emotion/babel-plugin',
    'babel-plugin-twin',
    'babel-plugin-macros',
  ],
};
