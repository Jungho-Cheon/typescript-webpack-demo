# 4-SOURCE-MAP

> `source map`은 `webpack`을 통해 번들링되고 압출된 배포용 파일에서 원본 파일을 매핑하는 역할을 합니다.
> 예를 들어, `bundle.js`에서 에러가 발생한 경우 압축된 파일인 `bundle.js`에서 디버깅하기는 쉽지 않습니다.
> 이때, `source map`을 이용하면 원본에서 에러의 위치를 쉽게 찾아낼 수 있습니다.

-   `source map`을 사용하기 위해 `tsconfig.json`에서 `sourcemap` 프로퍼티의 주석을 해제하고 `webpack.config.js` 에서도 `source map` 설정을 해줍니다.

```javascript
// tsconfig.json
{
    ...
    "sourceMap": true,
    ...
}
```

```javascript
// webpack.config.js
module.exports = {
    devtool: "eval-source-map",
    ...
}
```

> `devtool`에 설정할 수 있는 `source map`의 종류는 다양하다. 공식문서를 참고해 적용해야할 듯 합니다.

<br/>

---
> 우선 `source map`을 적용하기 전 콘솔에 찍힌 에러 메세지는 다음과 같습니다.
<img width="356" alt="스크린샷 2021-01-31 오후 6 30 08" src="https://user-images.githubusercontent.com/61958795/106379887-59842500-63f2-11eb-8646-ba56539e3c35.png">

* `minimize`되어있는 `bundle.js`에서 해당 에러를 찾기는 쉽지 않습니다.

> 다음은 `source map`을 생성한 뒤 에러 메세지 입니다.
<img width="415" alt="스크린샷 2021-01-31 오후 6 33 18" src="https://user-images.githubusercontent.com/61958795/106379993-cac3d800-63f2-11eb-973a-c69651b0490b.png">
* 에러가 발생한 index.ts 파일의 위치를 알려주는 것을 확인할 수 있습니다.
* 로그에 찍힌 index.js를 클릭하면 다음과 같이 원본 소스를 확인할 수 있습니다.
<img width="361" alt="스크린샷 2021-01-31 오후 6 33 26" src="https://user-images.githubusercontent.com/61958795/106379996-cf888c00-63f2-11eb-8a20-73f2de9e6179.png">
