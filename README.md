# 3-USING-ES6-MODULES

-   `es6`부터 지원하는 `export`, `import`문을 사용하여 ts파일간 dependency를 설정할 수 있습니다.
-   `webpack`에서 모듈을 찾을 수 있도록 설정을 추가합니다.

```javascript
{
    ...
    "resolve": {
        "extension" : [".ts", ".js"]
    }
    ...
}
```

-   다양한 설정방법이 있지만 `확장자`를 이용한 resolve를 통해 참조할 수 있는 파일을 찾도록 합니다.
-   `index.ts`는 `forms.ts`의 함수 `formData`를 `import`하여 사용합니다.

```typescript
import { formData } from "./forms";

const form = document.querySelector("form");

form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = formData(form);
    console.log(data);
});
```

새롭게 추가한 설정을 적용하기 위해 dev-server를 재시작하여 변경사항을 확인합니다.
<img width="568" alt="스크린샷 2021-01-31 오후 5 46 11" src="https://user-images.githubusercontent.com/61958795/106378997-36ef0d80-63ec-11eb-88ac-4cf4283a0ddd.png">
