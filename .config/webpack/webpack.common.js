const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  stats: "minimal",
  entry: {
    main: path.resolve(__dirname, "../../src/main.js"),
  },
  output: {
    path: path.resolve(__dirname, "../../shopify/assets/"),
    filename: "[name].js",
  },
  resolve: {
    extensions: ["*", ".jsx", ".js", ".json"],
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@shopify-directory": path.resolve(__dirname, "./shopify/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },      
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(css|postcss)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  require("postcss-import"),
                  require("tailwindcss"),
                  require("autoprefixer")
                ],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["main.js", "main.css"],
    }),
    new MiniCssExtractPlugin({
      filename: "./[name].css",
      chunkFilename: "[id].css",
    }),
    new webpack.DefinePlugin({
      // React-specific constants here, if needed
    }),
  ],
};
