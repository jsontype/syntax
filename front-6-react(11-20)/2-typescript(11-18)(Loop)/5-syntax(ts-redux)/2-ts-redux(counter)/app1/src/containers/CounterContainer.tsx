import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../modules'
import { increase, decrease, increaseBy } from '../modules/counter'
import Counter from '../components/Counter'

// 리덕스의 State 값을 불러와서 사용하고, 액션도 디스패치를 하는 "컨테이너 컴포넌트"를 만들어보자.
// 꽤나 간단하다. 신경 쓸 부분은 useSelector((state: RootState) => state.counter.count)가 전부이다.
// count의 타입은 useSelector가 알아서 유추해주니 굳이 :number라고 타입을 설정 할 필요 없다.
function CounterContainer () {
    // 상태를 조회합니다. 상태를 조회 할 때에는 state 의 타입을 RootState 로 지정해야합니다.
    const count = useSelector((state: RootState) => state.counter.count)
    const dispatch = useDispatch() // 디스패치 함수를 가져옵니다

    // 각 액션들을 디스패치하는 함수들을 만들어줍니다
    const onIncrease = () => {
        dispatch(increase())
    }

    const onDecrease = () => {
        dispatch(decrease())
    }

    const onIncreaseBy = (diff: number) => {
        dispatch(increaseBy(diff))
    }

    return (
        <Counter
            count={count}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onIncreaseBy={onIncreaseBy}
        />
    )
}

export default CounterContainer
