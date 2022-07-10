fetch('https://fakestoreapi.com/products')
    .then(res=>res.json)
    .then(json=>console.log(json))

// URL에서 복붙
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from 'react-query'

// import { getTodos, postTodo } from '../my-api'

// Create a client
export const getClient = (() => {
    let client: QueryClient | null = null
    return () => {
        if(!client) client = new QueryClient({})
        return client
    }
})()

type AnyObj = { [key: string]: any }
const BASE_URL = 'https://fakestoreapi.com'

export const fetcher = async ({
    method,
    path,
    body,
    params
}: {
    method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE'
    path: string
    body?: AnyObj
    params?: AnyObj
}) => {
    try {
        const url = `${BASE_URL}${path}`
        const fetchOptions: RequestInit = {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': BASE_URL
            }
        }
        const res = await fetch(url, fetchOptions)
        const json = await res.json()
        return json
    } catch (err) {
        console.error(err)
    }
}

export const QueryKeys = {
    PRODUCTS: 'PRODUCTS',
}