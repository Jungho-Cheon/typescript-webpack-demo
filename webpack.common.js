const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devtool: "eval-source-map",
    entry: "./src/index.ts",
    module: {
        rules: [
            // src폴더의 *.ts 에 대해 ts-loader를 적용
            {
                test: /\.ts$/,
                use: ["ts-loader"],
                include: [path.resolve("src")],
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/template.html",
        }),
    ],
};
