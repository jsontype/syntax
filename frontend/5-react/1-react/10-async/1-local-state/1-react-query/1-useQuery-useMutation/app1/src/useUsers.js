// react-query로부터 useQuery를 임포트
import { useQuery } from "react-query"
import axios from "axios"

const fetchUsers = async () => {
    const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
    )
    return data
}

export default () => {
    // useQuery를 사용하면 단순 API 데이터 외에도 fetch에 대한 다양한 정보를 가져와서 사용할 수 있다.
    // 받아올 수 있는 값에는 status, data, error 외에도 isLoading 등 다양한 값이 있다. (많은 useQuery를 사용한다면 status, data와 같은 다양한 값에 별칭을 줄 수 있다.)
    const { status, data, error } = useQuery("users", fetchUsers) // useQuery 가능한 인자 3가지 : key("users"), fetch함수(fetchUsers), 옵션객체({ refetchInterval: 5000 } 같은 느낌)
    return { status, data, error }
}
