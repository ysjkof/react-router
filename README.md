# React와 History API 사용하여 SPA Router 기능 구현하기

## 구현 화면

![Oct-07-2022 15-11-16](https://user-images.githubusercontent.com/77876601/194479785-44658a58-f6fa-4bd2-88d4-cc93afff1cd0.gif)

## 구현 명세

1. 해당 주소로 진입했을 때 아래 주소에 맞는 페이지가 렌더링 되어야 한다.

- `/` → `root` 페이지
- `/about` → `about` 페이지

2. 버튼을 클릭하면 해당 페이지로, 뒤로 가기 버튼을 눌렀을 때 이전 페이지로 이동해야 한다.

- `window.onpopstate` [MDN](https://developer.mozilla.org/ko/docs/Web/API/Window/popstate_event)
- `window.location.pathname`
- History API(`pushState`) [MDN](https://developer.mozilla.org/ko/docs/Web/API/History/pushState)

3. Router, Route 컴포넌트를 구현해야 하며, 형태는 아래와 같아야 한다.

```tsx
ReactDOM.createRoot(container).render(
  <Router>
    <Route path="/" component={<Root />} />
    <Route path="/about" component={<About />} />
  </Router>
);
```

4. 최소한의 push 기능을 가진 useRouter Hook을 작성한다.

```tsx
const { push } = useRouter();
```
