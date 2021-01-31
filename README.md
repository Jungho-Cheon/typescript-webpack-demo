# 5-WRAP-UP

-   webpack은 개발 환경과 프로덕션 환경에 대해 독립적인 설정이 가능합니다.
-   각 환경마다 독립적인 config파일을 만들고 package.json의 scripts를 환경별로 설정하여 유연한 개발이 가능해집니다.
-   demo 프로젝트에서는 공통설정(common), 개발(dev), 배포(prod) 총 3개의 config파일을 만들어 설정을 적용해 보도록 하겠습니다.

<br />

---

우선 공통 설정을 위해 필요한 패키지를 설치합니다.

```bash
yarn add -D webpack-merge
```

HTML 파일 또한 Template설정을 통해 환경 별로 알맞은 js파일을 주입하도록 하겠습니다.

-   html-webpack-plugin을 설치하고 설정해주도록 하겠습니다.
    ```bash
    yarn add -D html-webpack-plugin
    ```
    ```javascript
    // webpack.common.js
    module.exports = {
        ...
        plugins: [
            new HTMLWebpackPlugin({
                template: "./src/template.html",
            }),
        ],
        ...
    }
    ```
-   해당 plugin은 html 템플릿을 설정하여 webpack 실행 시 body 태그 끝에 script 태그를 추가해줍니다.

> `prod`환경에서는 bundle파일의 이름을 `[contenthash]`로 지정하고 있습니다. 이렇게 지정하게되면 원본 파일들의 내용이 변경되는 경우 hash값이 변경되어 파일이름이 바뀌게 됩니다. 브라우져에서 파일을 캐시할 경우 이름을 기준으로 캐시하게 되는데 이는 변경사항이 적용되지 못하는 경우가 생기므로 빌드 파일을 위와 같이 설정하였습니다.

<br />

변경 사항이 적용된 후 빌드하게 되면 당연히 새로운 hash값을 가진 파일이 생성됩니다. 이전에 빌드한 파일을 매번 지우기는 귀찮기 때문에 자동으로 해결해주는 plugin을 설치하여 적용합니다.
![스크린샷 2021-01-31 오후 7 16 02](https://user-images.githubusercontent.com/61958795/106380930-d4503e80-63f8-11eb-956f-e6168db34806.png)

```bash
yarn add -D clean-webpack-plugin
```

```javascript
// webpack.prod.js
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
{
    ...
    plugins: [
        new CleanWebpackPlugin()
    ],
    ...
}
```

다시 빌드하게되면 현재 content로 생성된 hash와 다른 js파일이 자동으로 지워지는 것을 확인할 수 있다.

![스크린샷 2021-01-31 오후 7 19 22](https://user-images.githubusercontent.com/61958795/106380994-3ad55c80-63f9-11eb-96f5-9fd96866d81d.png)
