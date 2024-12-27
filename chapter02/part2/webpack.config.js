//引入一个包
const path = require('path')
//引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin')
//引入clean插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin')


//webpack中的所有配置信息都应该写在module.exports中
module.exports = {
  optimization:{
    minimize: false // 关闭代码压缩，可选
  },

  //指定了使用内联source map的方式，用于调试
  devtool: "inline-source-map",
  
  //指定了WebPack开发服务器运行时的基础目录
  // devServer: {
  //     contentBase: './dist'
  // },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // 替换 contentBase
    },
    compress: true,
    port: 9000,
    open: true
  },
  //指定入口文件
  entry: "./src/index.ts",

  mode: 'development', // 设置为开发模式

  //指定打包文件所在的目录
  output: {
    //指定打包文件的目录
    path: path.resolve(__dirname,'dist'),
    //打包后文件的名称
    filename: 'bundle.js',
    environment: {
      arrowFunction: false // 关闭webpack的箭头函数，可选
    }
  },

  //指定webpack打包是要使用的模块
  module: {
    //指定要加载的规则
    rules: [
      {
        //test 指定的是规则生效的文件
        test: /\.ts$/,
        //要使用的 loader
        use: [
          //配置babel
          {
            //指定加载器
            loader: 'babel-loader',
            //设置babel
            options: {
              //设置预定义的环境
              presets:[
                [
                  //指定环境的插件
                  "@babel/preset-env",
                  //配置信息
                  {
                    //要兼容的目标浏览器
                    targets:{
                      "chrome":"131"
                    },
                    //指定corejs的版本
                    "corejs":"3",
                    //使用corejs的方式，"usage"表示按需加载
                    "useBuiltIns":"usage"
                  }
                ]
              ]
            }
          },
          'ts-loader',
        ],
        //要排除的文件
        exclude: /node-moudules/
      },
      //设置less文件的处理
      {
        test: /\.less$/,
        use:[
          "style-loader",
          "css-loader",
          //引入postcss
          {
            loader:'postcss-loader',
            options: {
              postcssOptions: {
                plugins:[
                  [
                    "postcss-preset-env",
                    {
                      browsers:'last 2 versions'
                    }
                  ]
                ]
              }
            }
          },
          "less-loader"
        ]
      }
    ]
  },

  //配置webpack插件
  plugins: [
    //清除dist目录
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      // title: "这是一个自定义的title",
      template: "./src/index.html" //网页生成模板
    }),
  ],

  //用来设置引用模块
  resolve: {
    extensions: ['.ts','.js']
  }
}