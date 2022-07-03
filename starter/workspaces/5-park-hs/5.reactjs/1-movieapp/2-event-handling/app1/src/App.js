function App() {
  const onKeyUp = (event) => {
    console.log('event.keyCode: ', event.keyCode);
    // 엔터키를 쳤을 때, onSubmit을 실행
  }

  const onSubmit = () => {
    alert('제출됐음')
  }

  return (
    <div className="App">
      {/* <button onClick={() => alert('hello react')}>Submit</button> */}
      <input onKeyUp={onKeyUp} />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default App;
