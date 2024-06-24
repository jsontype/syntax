import "./App.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Movies from "./Movies"

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Movies />
      </div>
    </QueryClientProvider>
  )
}
