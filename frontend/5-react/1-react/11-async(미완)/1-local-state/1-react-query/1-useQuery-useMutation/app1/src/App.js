import { QueryClient, QueryClientProvider } from "react-query"
import UserList from "./UserList"

const queryClient = new QueryClient()

function App () {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <UserList />
      </QueryClientProvider>
    </div>
  )
}

export default App
