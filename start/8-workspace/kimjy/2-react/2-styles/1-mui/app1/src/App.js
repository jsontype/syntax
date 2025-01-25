import "./App.css"
import MuiButton from "./components/MuiButton"

export default function App() {
  return (
    <div className="App">
      <div>Hello React!</div>
      <MuiButton variant="contained" type="primary" text="Primary"/>
      <MuiButton variant="contained" type="secondary" text="Secondary"/>
      <MuiButton variant="contained" type="tertiary" text="Tertiary"/>
      <MuiButton variant="outlined" type="primary" text="Primary"/>
      <MuiButton variant="outlined" type="secondary" text="Secondary"/>
      <MuiButton variant="outlined" type="tertiary" text="Tertiary"/>
      <MuiButton variant="text" type="primary" text="Primary"/>
      <MuiButton variant="text" type="secondary" text="Secondary"/>
      <MuiButton variant="text" type="tertiary" text="Tertiary"/>      
    </div>
  )
}
