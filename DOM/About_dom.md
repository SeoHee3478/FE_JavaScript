# DOM (Document Object Model)
: 문서, 객체, 모델
![](https://velog.velcdn.com/images/jeon0768/post/cf28e333-a376-435f-95c6-ffc436d554b8/image.png)

## DOM 이란?
- HTML 문서 내용을 트리형태로 구조화하여 웹페이지와 프로그래밍 언어를 연결시켜줌
- 각각의 요소와 속성, 콘텐츠를 표현하는 단위를 `노드(node)`
[](https://velog.velcdn.com/images/jeon0768/post/6b31c802-b36b-48b4-8341-4fe28567124e/image.png)

## DOM 기능
1. console
2. window.navigator
    - 사용히는 브라우저에 대한 정보
3. window.devicePixelRatio
    - 픽셀 ratio 값에 대한 정보!


### 오늘의 용어정리
- Parse: 어떤 데이터 형태를 다른 데이터로 바꿔주는 것
- DOM API: 브라우저가 우리에게 제공해주는 인터페이스, DOM API에 접근해서 변수에 넣어주며는 필요할 때마다 쓸 수 있음
- Window: window 객체는 웹 브라우저의 창(window)을 나타내는 객체, 자바스크립트의 모든 객체, 전역함수, 전역 변수들은 자동으로 window 객체의 프로퍼티가 된다. 브라우저 공간을 통해 문법적인 공간을 작성할 수 있음

## DOM 트리에 접근하기
- Document에 다이빙 하려면 Document 부터 시작해야 함
- 변수에 담을 수 있음
- DOM API를 이용해서 node에 접근

```js
//1. 해당하는 Id를 가진 요소에 접근하기
document.getElementById()

//2. 해당하는 모든 요소에 접근하기
//- 배열처럼 생겼지만, 배열은 아님 Arraylike Object인 HTML Collection 반환
document.getElementsByTagName(); 

//3. 해당하는 클래스를 가진 모든 요소에 접근하기
document.getElementsByClassName(); 

 //4. CSS선택자로 단일 요소에 접근하기
//- 해당하는 가장 처음에 나타나는 것을 선택해줌(하나만)
// Html 전체 문서 내에서 찾기 때문에 비용이 많이 든다 -> 변수로 빼놓을 것
document.querySelector("selector");

//4. CSS선택자로 여러 요소에 접근하기
// - 여러가지
document.querySelectorAll("selector"); 
```
- 1,2,3은 여러개를 한 번에 잡고, 4,5는 하나씩만 찝어서 잡을 수 있음
- CSS 선택자를 사용할 수 있어서 더 편하고 우리에게 익숙한 형태이기 때문에 실전에서는 4,5번을 주로 사용함

### 문제 ) 배운 문법을 바탕으로 첫번째 item-second와 첫번째 li를 콘솔로 출력해보자.
```js
<body>
    점심 식단
    <article id="container">
        <ul>
            <li>탕수육</li>
            <li class="item-second">유산슬</li>
            <li>짜장면</li>
        </ul>
    </article>
    저녁 식단
    <article>
        <ul>
            <li>된장국</li>
            <li class="item-second">김치찌게</li>
            <li>해장국</li>
        </ul>
    </article>
</body>
```

첫번째 item-second를 출력하기 위해서는 어떤 것을 사용해야할까?
item-second는 `클래스이름`이기 때문에 `getElementsByClassName`을 사용해주면 된다!
답: 

```js 
document.getElementsByClassName('item-second')[0]
````
0을 해주는 이유는 안해주면 아래 결과처럼 HTML Collection이 나온다. 우리는 첫번째 있는 요소를 가져오고 싶은 것이기 때문에 인덱스 0번째를 가져오라고 [0]를 추가해주면 된다.
![](https://velog.velcdn.com/images/jeon0768/post/2bb75a95-bc8a-4a6b-bd1e-e9cbad0b810c/image.png)

두번째, li의 첫번째 요소를 가져오려면 li는 `태그`이기 떄문에 `getElementsByTagName('li')`를 사용해주면 된다.

답: 
```js
document.getElementsByTagName('li')[0]
```

마찬가지로 6개의 HTMLCollection이 나오기 때문에 인덱싱을 해서 원하는 값만 추출해주면 된다.

## HTML Collection 과 NodeList

### HTML Collection

- document.getElementByClassName 을 하면 HTML Collection 반환
- HTML Collection 도 배열은 아니지만, 배열처럼 length와 인덱싱이 가능하다. 또한 for...in 문으로 순회가 가능하다. 

### NodeList
- document.querySelectorAll을 하면 NodeList 반환
- NodeList는 배열은 아니지만, 배열처럼 ForEach()를 사용할 수 있도록 해줌(IE 작동 안함)

![](https://velog.velcdn.com/images/jeon0768/post/4ba6fcd6-5024-4b52-a578-2966c1b97e79/image.png)


