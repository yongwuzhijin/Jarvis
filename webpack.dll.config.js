const path = require("path");
const webpack = require("webpack");
const config = require('./package.json');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const moment   = require('moment');

let vendorStr = "react,qs,axios,react-router,react-dom".replace('react,','');//模版生成占位
let vendor = ['react'].concat(vendorStr.split(','));
//let vendordev =['react/dist/react.esm.js'].concat(vendorStr.split(','));//集成开发版本react
console.log(vendorStr)
console.log(vendor)
module.exports = {
	//你想要打包的模块数组
	entry:{
		vendor:vendor,
		//vendordev:vendordev
	},
	output:{
		path:path.join(__dirname,'/static/'),
		filename:'[name].dll.js',
		library:'[name]_library'
		//vendor.dll.js 中暴露出的全局变量
		//主要是给DllPlugin中的name 使用
		//故这里需要和webpack.DllPlugin 中的 'name :[name]_libray 保持一致
	},
	plugins:[
		new CleanWebpackPlugin('static'),
		new webpack.DllPlugin({
			path:path.join(__dirname,'/static/','[name]-manifest.json'),
			name:'[name]_library',
			context:__dirname
		}),
		new webpack.BannerPlugin({
			banner:`${config.name} ${config.version} ${moment().format()}` 
		})
	]
}