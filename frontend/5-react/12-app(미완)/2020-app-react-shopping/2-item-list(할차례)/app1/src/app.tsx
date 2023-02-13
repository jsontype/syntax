import { useRoutes } from 'react-router-dom'
import { routes } from './routes'
import { QueryClientProvider } from 'react-query'
import { getClient } from './queryClient'
import { ReactQueryDevtools } from 'react-query/devtools'

const App = () => {
    const elem = useRoutes(routes)
    const queryClient = getClient()
    return (
        <QueryClientProvider client={queryClient}>
            {elem}
            <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>    
        </QueryClientProvider>    
    )
}

export default App
