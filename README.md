# 1-INIT-WEBPACK

-   `Typescript`는 `Javascript`에 Type을 강제하여 미연에 에러를 잡아낼 수 있도록 합니다.
-   `npm`, `yarn`과 같은 패키지 매니저를 통해 `typescript` 컴파일러인 `tsc`를 설치할 수 있습니다.
-   설치할 때, 글로벌 설정을 주면 프로젝트 외부에서도 사용 가능하며 프로젝트에서만 사용하기를 원한다면 --save-dev 옵션을 사용하여 `devDependencies`에 추가할 수 있도록 합니다.

```bash
yarn add -D typescript webpack webpack-cli
```

-   `webpack`은 다수의 js파일을 하나의 js파일로 번들링하는 역할을 합니다. (물론 js이외에 css나 html에 minimize를 적용하는 등 다양한 기능을 제공합니다.)

<br/>

---

## Webpack 기본 Configuration

-   프로젝트의 root 디렉토리에 `webpack`을 위한 설정파일을 생성합니다.

```sh
vim webpack.config.js
```

-   `webpack`의 config파일은 node.js의 모듈 시스템을 사용하기 때문에 es6의 import문으로 설정하면 에러가 발생합니다.
-   `webpack`은 기본적으로 entry 파일을 설정하면 해당 파일로 부터 참조되는 다른 파일을 찾아 나갑니다.
-   `webpack`을 통해 번들링된 output 경로를 지정해줄 수 있습니다.
-   설정 파일의 기본적인 틀은 다음과 같습니다.

```javascript
const path = require("path");

// 절대 경로를 구하기 위한 함수 (편의성를 위해..)
function resolve(dir) {
    return path.resolve(__dirname, dir);
}

module.exports = {
    entry: "./src/index.ts", // 엔트리 파일로 src폴더의 index.ts 파일을 지정
    output: {
        // 번들링된 파일의 이름은 bundle.js이며 파일의 경로는 프로젝트 폴더 아래 public 폴더로 지정
        filename: "bundle.js",
        path: resolve("public"),
    },
};
```

## Typescript를 위한 Configuration

-   `Typescript`를 bundling하기 위해 우선 `Javascript`로 컴파일 되어야합니다.
-   `webpack`은 `ts-loader`를 통해 위의 작업을 수행하게 되고 추가된 내용은 다음과 같습니다.
-   `ts-loader`를 프로젝트에서 사용할 수 있도록 패키지 매니저를 통해 설치합니다.

```bash
yarn add -D ts-loader
```

```javascript
{
    ...
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
    ...
}
```
