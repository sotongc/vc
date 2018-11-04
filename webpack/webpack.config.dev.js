var webpack=require('webpack');
var path=require('path');

module.exports={
	mode:"development",
	entry:{
		"vc":path.resolve(__dirname,"../src/js/index.js")
	},
	output:{
		path:path.resolve(__dirname,"../dist"),
		publicPath:"/dist/",
		filename:"js/[name].min.js"
	},
	devtool:'cheap-module-eval-source-map',
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
					{loader:'css-loader',options:{sourceMap:true}}
				]
			}
		]
	},
	devServer:{
		contentBase:path.resolve(__dirname,"../"),
		port:3030,
		compress:true,
		inline:true
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin()
	]
};