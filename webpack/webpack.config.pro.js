var webpack=require('webpack');
var path=require('path');

var HtmlWebpackPlugin=require("html-webpack-plugin");

module.exports={
	mode:"production",
	entry:{
		"vc":path.resolve(__dirname,"../src/js/index.js"),
		"projects":path.resolve(__dirname,"../src/js/projects.js")
	},
	output:{
		path:path.resolve(__dirname,"../dist"),
		publicPath:"",
		filename:"js/[name].min.js"
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				loader:'babel-loader',
				exclude:/node_modules/
			},
			{
				test:/\.css$/,
				use:[
					{loader:'style-loader'},
					{loader:'css-loader'}
				]
			},
			{
				test:/\.(png|jpeg|gif)$/,
				loader:'url-loader',
				options:{
					name:'[hash].[ext]',
					limit:1024
				}
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			filename:'./views/projects.html',
			template:path.resolve(__dirname,'../views/projects.html'),
			inject:true,
			hash:true,
			cache:true,
			chunks:['projects']
		})
	]
};