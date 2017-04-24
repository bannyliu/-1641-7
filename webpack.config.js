var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')
// var OpenBrowserPlugin = require('open-browser-webpack-plugin')
module.exports ={
  //入口
  // entry:'./src/script/app.js',
  entry:{
    // app:'./src/script/app.js'//js文件和scss文件改变了也会自动生成带有哈希值的js
    'scripts/app': './src/script/app.js'
  },
  //出口
  output:{
    path:__dirname+'/build/',
    filename:'[name]_[hash].js'//哈希值
    // filename:'app.js'
  },
  //服务器
  devServer:{
    contentBase:'./build',
    host:'localhost',
    port:9000,
    proxy:{
      '/api': {
        target: 'http://m.ujipin.com/api',
        changeOrigin: true,
        pathRewrite: {'^/api': ''}
      },
      '/json':{
        target:'http://localhost:7001',
        pathRewrite:{'^/json':''}
      }
    }
  },
  module:{
    loaders:[
      //babel-loader 解析es6
      {
        test:/\.js$/,
        exclude:/node_modules/,//排除node_modules
        loader:'react-hot-loader!babel-loader'
      },
      //babel-loader 解析es6 jsx
      {
        test:/\.jsx$/,
        exclude:/node_modules/,//排除node_modules
        loader:'react-hot-loader!babel-loader'
      },
      // {
      //   test:/\.css$/,
      //   loader:'style-loader!css-loader'//从后往前执行 ！作为分隔符
      // },
      {
        test:/\.css$/,
        loader:ExtractTextPlugin.extract({
          fallback:'style-loader',//最后一步
          use:'css-loader'
        })
      },
      // {
      //   test:/\.scss$/,
      //   loader:'style-loader!css-loader!sass-loader'
      // }
      {
        test:/\.scss$/,
        loader:ExtractTextPlugin.extract({
          fallback:'style-loader',
          use:'css-loader!sass-loader'
        })
      }




    ]
  },
  //插件  npm i extract-text-webpack-plugin抽离文本
  plugins:[
    //抽离css文件
    new ExtractTextPlugin({
      // filename:'[name]_[hash].css',
      filename:'app.css',
      allChunks:true,//多入口
      disable:false//是不是打开抽离
    }),
    //根据模版自动生成html
    new HtmlWebpackPlugin({
      template:'./src/list.ejs',
      // filename:'list.html',
      filename:'list.html',
      title:'ujipin',
      name:'ujipin'
    }),
    //压缩代码
    // new webpack.optimize.UglifyJsPlugin({
    //   compress:{//压缩时的配置
    //      warnings:false//不显示错误 warnings
    //   },
    //   output:{//输出时的配置
    //     comments:false//不要注释
    //   }
    // })
    // new OpenBrowserPlugin({//自动打开浏览器
    //   url:'http://localhost:7000'
    // })

    //5.更改环境变量（修改node环境）
     new webpack.DefinePlugin({
       'process.env':{
         NODE_ENV:JSON.stringify('production')//在webpack里有这个变量
       }
     })
  ],
  // 组件抽离
    externals: {
      'react': 'window.React',
      'react-dom': 'window.ReactDOM',
      'react-router': 'window.ReactRouter'
    }

}
