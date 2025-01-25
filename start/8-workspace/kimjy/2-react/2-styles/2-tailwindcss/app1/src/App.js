import MuiButton from "./components/MuiButton"
import TextBox from "./components/TextBox"

export default function App() {
  return (
    <div className="font-[20px]">
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
      <TextBox size="sm" text="TextBox Test 입니다." />
      <TextBox size="md" text="TextBox Test 입니다." />
      <TextBox size="lg" text="TextBox Test 입니다." />
      <TextBox size="xl" text="TextBox Test 입니다." />
    </div>
  )
}
