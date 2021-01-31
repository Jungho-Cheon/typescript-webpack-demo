# 2-SET-DEV-SERVER

-   `webpack-dev-server`는 라이브 코딩을 위한 패키지입니다. `yarn`을 통해 `devdependency`로 설치합니다.

```bash
yarn add -D webpack-dev-server
```

-   현재 `webpack` 버전에서는 `webpack serve` 명령어를 통해 `webpack-dev-server`를 실행할 수 있습니다.
-   `package.json`에 `scripts`를 추가합니다.

```javascript
{
    ...
    "scripts": [
        "serve": "webpack serve --config webpack.config.js --open"
        ...
    ]
    ...
}
```

-   `yarn serve`를 터미널에서 실행하면 `localhost`를 통해 `webpack-dev-server`에 접속할 수 있습니다.
    ![스크린샷 2021-01-31 오후 4 40 23](https://user-images.githubusercontent.com/61958795/106377817-0656a600-63e3-11eb-9d41-1c37e6da6af3.png)

-   브라우져를 통해 html파일이 있는 경로를 열어주면 번들링된 js가 적용된 페이지를 확인할 수 있습니다.

---

## Bundling 자동 적용

-   위에서 사용한 dev-server는 단순히 프로젝트의 파일들을 호스팅하는 역할만 합니다. 만약 src폴더의 ts파일들을 수정한다면 변경사항은 적용되지 않습니다.
-   변경사항을 자동으로 적용하기 위해서는 자동으로 번들링이 가능하도록 설정해야합니다.
-   webpack.config.js를 다음과 같이 수정합니다.

```javascript
module.exports = {
    ...
    devServer: {
        contentBase: resolve("public"), // public 경로 지정
        compress: true, // gzip compress 설정
        port: 9000, // 포트 설정
    },
    ...
}
```

-   간단하게 log를 추가해보면 실시간으로 recompile된 ts가 적용되고 있음을 확인할 수 있습니다.
-   하지만 public 폴더의 bundle.js는 수정되지 않습니다. 이는 webpack-dev-server가 변경 사항을 메모리에서 처리하기 때문입니다.
