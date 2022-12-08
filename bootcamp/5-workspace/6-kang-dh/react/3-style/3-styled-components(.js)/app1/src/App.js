import "./App.css";
import Button from "./common/Button";

function App() {
  return (
    <div className="App">
      <Button>버튼</Button>
      <Button color="red">버튼</Button>
      <Button color="blue">버튼</Button>
      <Button color="orange">버튼</Button>
      <hr />
      <Button huge>버튼</Button>
      <Button huge color="red">
        버튼
      </Button>
      <Button huge color="blue">
        버튼
      </Button>
      <Button huge color="orange">
        버튼
      </Button>
    </div>
  );
}

export default App;
