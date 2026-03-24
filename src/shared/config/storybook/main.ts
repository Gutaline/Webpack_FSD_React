import type { StorybookConfig } from "@storybook/react-webpack5";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import webpack from "webpack";

const config: StorybookConfig = {
  stories: ["../../../../src/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: ["@storybook/addon-webpack5-compiler-swc"],

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.plugins = [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
          configFile: "./tsconfig.json",
        }),
      ];
    }

    config.module?.rules?.push(
      {
        test: /\.module\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    );

    config.plugins = [
      ...(config.plugins || []),
      new webpack.DefinePlugin({
        __MODE__: JSON.stringify("development"),
      }),
    ];

    return config;
  },

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};

export default config;
