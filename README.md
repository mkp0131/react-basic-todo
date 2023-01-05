# react-todo

## 개발 리스트

- [ ] todo 리스트
- [ ] todo 생성
- [ ] todo 완료
- [ ] todo 삭제
- [ ] todo 필터링
- [ ] 다크모드
- [ ] 로컬스토리지 저장
- [ ] UI

## [react] onSubmit 을 useCallback 으로 생성할시 주의사항!

- useCallback 사용시 dependency 에 주의해야한다.
- text 라는 state를 가져와서 사용할 경우 dependency 에 text 를 꼭 넣어준다.

```js
const onSubmit = useCallback(
  (e) => {
    e.preventDefault();
    const _text = text.trim();

    console.log(text);

    if (_text.length === 0) {
      setText("");
      return;
    }

    const todo = {
      id: shortid.generate(),
      text: _text,
      status: "wait",
    };

    setText("");
    setTodos((prev) => [...prev, todo]);
  },
  [text]
);
```

## [react] useState 에 함수로 전달을 할 경우

- 리랜더링 될때마다 useState 의 기본값을 init 하고, 이전에 변경된 값이 있는지 확인후, 변경된 값이 있다면 변경된 값을 사용한다.

- 즉 함수에서 return 된 값을 넣을 경우 함수가 지속적으로 실행되어 성능에 안좋다!

### BAD! 리랜더링시 initTodos() 가 실행됨.

```js
const [todos, setTodos] = useState(initTodos());
```

### GOOD! 리랜더링시 이전 변경된 state 가 있다면 실행되지 않음.

```js
const [todos, setTodos] = useState(initTodos);
```
