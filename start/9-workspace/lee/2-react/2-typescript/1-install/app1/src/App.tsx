import Hello from "./components/Hello";

export default function App() {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };

  return <Hello name="Kim" onClick={onClick} />;
}
