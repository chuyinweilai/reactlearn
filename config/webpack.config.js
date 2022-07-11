
// 指定html模板文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 清楚文件夹/文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path');

const resolve = function (dir) {
  return path.resolve(__dirname, '../', dir);
}
// node 模块
module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: "./src/index.ts",
  output: {
    path: resolve('dist'),
    filename: "[name].[contenthash:8].js",
    // 清空打包文件目录
    clean: true,
  },
  // 加载器
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        // 排除一些文件
        exclude: /node_modules/
        // include: [resolve('src')]
      }
    ]
  },
  // 插件配置
  plugins: [
    new CleanWebpackPlugin({
      // 编译前清理指定文件夹
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, './dist'),]
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  // 控制台需要打印的信息
  stats: 'errors-only',
  resolve: {
    // 可解析的文件后缀，比如import './index.js', 可以直接写import './index';
    extensions: ['.ts', '.tsx', '.js']
  },
  // 开发服务配置
  devServer: {
    open: true,
    hot: true,
    // 不启动压缩
    compress: false,
    host: 'localhost',
    port: 8089
  }
}