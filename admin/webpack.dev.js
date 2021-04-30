const path = require('path');
const buildPath = path.resolve(__dirname, 'dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

	entry: {
		main: './src/js/main.js',
		index: './src/js/index.js',
		dashboard: './src/js/dashboard.js'
	},

	devServer: {
		port: 5500,
		contentBase: buildPath
	},

	module: {
		rules: [
			// load JS
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			},
			// load CSS
			{
				test: /\.css$/,
				use: [
				"style-loader",
				"css-loader"
				]
			},
		// load images (base64 < 8192B)
		{
			test: /\.(gif|png|jpe?g|jpg)$/,
			use: [
				{
					loader: "file-loader",
					options: {
						name: "[name].[ext]",
						outputPath: "src/img",
					},
				},
			],
		},
			// load icons
			{
				test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
				type: 'asset/resource'
			}
		]
	},

	plugins: [
		/* LOGIN*/
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: true,
			chunks: ['main', 'index'],
			filename: 'index.html'
		}),
		/* DASHBOARD - INDEX*/
		new HtmlWebpackPlugin({
			template: './src/dashboard.html',
			inject: true,
			chunks: ['main', 'dashboard'],
			filename: 'dashboard.html'
		}),
	]
};