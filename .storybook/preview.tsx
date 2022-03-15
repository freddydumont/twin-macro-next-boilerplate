import createCache from '@emotion/cache';
import { CacheProvider, Global } from '@emotion/react';
import { GlobalStyles as BaseStyles } from 'twin.macro';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const cache = createCache({
  prepend: true,
  key: 'sb',
  // This disables vendor prefixing in storybook and storyshots snapshots
  ...((process.env.NODE_ENV === 'development' || 'test') && {
    stylisPlugins: [],
  }),
});

export const decorators = [
  (Story, context) => (
    <CacheProvider value={cache}>
      <BaseStyles />
      <Global styles={{ html: { scrollBehavior: 'smooth' } }} />
      {Story(context)}
    </CacheProvider>
  ),
];
