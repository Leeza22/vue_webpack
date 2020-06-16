const path = require("path")
const VueLoaderPlugin = require("vue-loader/lib/plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "develop",
  entry: path.join(__dirname, "src/h5/pages/demo.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /.vue$/,
        loader: "vue-loader",
      },
      {
        test: /.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".vue", ".js"],
    modules: ["node_modules"],
    alias: {
      vue: "vue/dist/vue.min.js",
      components: path.resolve(__dirname + "/src/components"),
      "@": path.resolve("src"),
    },
  },
  plugins: [new VueLoaderPlugin(), new HtmlWebpackPlugin()],
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true,
  },
}
