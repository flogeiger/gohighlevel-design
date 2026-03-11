import type { StorybookConfig } from '@storybook-vue/nuxt';

const config: StorybookConfig = {
  stories: [
    "../components/**/*.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-a11y",
    {
      name: "@storybook/addon-docs",
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [],
          },
        },
      },
    },
  ],
  framework: "@storybook-vue/nuxt",
  staticDirs: ["../public"],

  viteFinal: async (config) => {
    config.build = config.build ?? {};
    config.build.rollupOptions = config.build.rollupOptions ?? {};

    const existing = config.build.rollupOptions.external;
    const asArray = Array.isArray(existing)
      ? existing
      : existing
      ? [existing]
      : [];

    config.build.rollupOptions.external = [
      ...asArray,
      '@storybook/blocks',
    ];

    return config;
  },
};

export default config;