import type { Preview } from '@storybook-vue/nuxt'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['SalonQueen', ['Einführung'], 'Calendar'],
      },
    },
  },
};

export default preview;
