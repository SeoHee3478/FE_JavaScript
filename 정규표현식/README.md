|장|제목|
|------|---|
|13장|정규표현식|
|14장|promise, async, await|

# 13장 정규표현식
정규 표현식, 또는 정규식은 문자열에서 특정 문자 조합을 찾기 위한 패턴입니다. JavaScript에서는 정규 표현식도 객체로서, RegExp의 exec()와 test() 메서드를 사용할 수 있습니다. String의 match(), matchAll() (en-US), replace(), replaceAll() (en-US), search(), split() 메서드와도 함께 사용할 수 있습니다. 이 장에서는 JavaScript의 정규 표현식을 설명합니다.

# 14장 promise, async, await

## promise
Promise는 프로미스가 생성된 시점에는 알려지지 않았을 수도 있는 값을 위한 대리자로, 비동기 연산이 종료된 이후에 결과 값과 실패 사유를 처리하기 위한 처리기를 연결할 수 있습니다. 프로미스를 사용하면 비동기 메서드에서 마치 동기 메서드처럼 값을 반환할 수 있습니다. 다만 최종 결과를 반환하는 것이 아니고, 미래의 어떤 시점에 결과를 제공하겠다는 '약속'(프로미스)을 반환합니다.

## async
async function 선언은 AsyncFunction객체를 반환하는 하나의 비동기 함수를 정의합니다. 비동기 함수는 이벤트 루프를 통해 비동기적으로 작동하는 함수로, 암시적으로 Promise를 사용하여 결과를 반환합니다. 그러나 비동기 함수를 사용하는 코드의 구문과 구조는, 표준 동기 함수를 사용하는것과 많이 비슷합니다.

## await
await 문은 Promise가 fulfill되거나 reject 될 때까지 async 함수의 실행을 일시 정지하고, Promise가 fulfill되면 async 함수를 일시 정지한 부분부터 실행합니다. 이때  await 문의 반환값은 Promise 에서 fulfill된 값이 됩니다.
