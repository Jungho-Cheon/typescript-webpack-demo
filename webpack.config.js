const path = require("path");

function resolve(dir) {
    return path.resolve(__dirname, dir);
}

module.exports = {
    entry: "./src/index.ts",
    mode: "development",
    module: {
        rules: [
            // src폴더의 *.ts 에 대해 ts-loader를 적용
            {
                test: /\.ts$/,
                use: ["ts-loader"],
                include: [resolve("src")],
            },
        ],
    },
    devServer: {
        contentBase: resolve("public"),
        compress: true,
        port: 9000,
    },
    output: {
        filename: "bundle.js",
        path: resolve("public"),
    },
};
