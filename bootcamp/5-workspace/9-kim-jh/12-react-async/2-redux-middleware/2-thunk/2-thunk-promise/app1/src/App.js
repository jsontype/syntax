import "./App.css";
import CounterContainer from "./components/Counter/CounterContainer";
import PostListContainer from "./components/PostList/PostListContainer";

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <PostListContainer />
    </div>
  );
}

export default App;
