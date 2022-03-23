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
    [
      '@babel/plugin-transform-react-jsx',
      {
        // this config enables using the fragment shorthand: `<> </>`
        // without having to `import React from 'react'`
        runtime: 'automatic',
        importSource: '@emotion/react',
      },
    ],
    '@emotion/babel-plugin',
    'babel-plugin-twin',
    'babel-plugin-macros',
  ],
};
