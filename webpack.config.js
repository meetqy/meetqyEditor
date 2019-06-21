// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const webpack = require("webpack");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

// module.exports = {
//   mode: "development",
//   entry: {
//     main: "./src/index.js"
//   },

//   devServer: {
//     contentBase: path.join(__dirname, "dist"),
//     compress: true,
//     hot: true,
//     hotOnly: true
//   },

//   devtool: "cheap-source-map",

//   output: {
//     filename: "[name]_[hash].js",
//     path: path.resolve(__dirname, "dist")
//   },

//   plugins: [
//     new CleanWebpackPlugin(),
//     new HtmlWebpackPlugin({
//       title: "meetqyEditor",
//       template: "./src/index.html"
//     }),
//     new webpack.HotModuleReplacementPlugin(),
//     new ExtractTextPlugin("styles/main.css")
//   ],

//   module: {
//     rules: [
//       {
//         test: /\.(png|jpe?g|gif)$/,
//         use: {
//           loader: "file-loader",
//           options: {
//             outputPath: "images"
//           }
//         }
//       },
//       {
//         test: /\.(eot|ttf|svg)$/,
//         use: {
//           loader: "file-loader",
//           options: {
//             outputPath: "fonts"
//           }
//         }
//       },
//       {
//         test: /\.scss$/,
//         // development
//         // use: ExtractTextPlugin.extract({
//         //   fallback: "style-loader",
//         //   use: [
//         //     {
//         //       loader: "css-loader",
//         //       options: {
//         //         modules: true,
//         //         importLoaders: 2,
//         //       }
//         //     },
//         //     "postcss-loader",
//         //     "sass-loader"
//         //   ]
//         // })

//         // production
//         use: [
//           'style-loader',
//           {
//             loader: 'css-loader',
//             options: {
//               modules: true,
//               importLoaders: 2
//             },
//           },
//           'postcss-loader',
//           'sass-loader'
//         ]
//       },
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: "babel-loader"
//       }
//     ]
//   }
// };
