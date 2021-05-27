const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, '../src/index.js'),
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'fonts/'
						}
					}
				]
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							esModule: false,
							outputPath: 'imgs/'
						}
					}
				]
			},
			{
				test: /\.(css|scss)$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.html$/,
				use: 'html-loader'
			},
			{
				test: /\.(ogg|mp3|wav|mpe?g)$/i,
				loader: 'file-loader',
				options: {
					outputPath: 'sounds/'
				}
			}
		]
	},
	resolve: {
		extensions: ['.js']
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: path.resolve(__dirname, '../src/index.html'),
			filename: 'index.html',
			favicon: path.resolve(__dirname, '../src/assets/favicon.ico')
		}),
		new MiniCssExtractPlugin()
	]
};
