import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../modules'
import { increase, decrease, increaseBy } from '../modules/counter'
import Counter from '../components/Counter'

/* Counter의 컨테이너 컴포넌트 만들기 */
// 컨테이너 컴포넌트 : Global State 값을 조회하고, Action을 디스패치하는 컴포넌트
// 컨테이너 컴포넌트에서 신경 쓸 부분은 useSelector((state: RootState) => state.counter.count) 이 부분이 전부이다.
export default function CounterContainer() {
    // count의 타입은 useSelector가 알아서 유추해주니 굳이 :number라고 타입을 설정 할 필요 없다.
    const count = useSelector(
        // Global State를 조회할 때에는 state의 타입을 RootState로 지정해야 한다.
        (state: RootState) => state.counter.count
    )
    
    // 디스패치 함수를 가져온다.
    const dispatch = useDispatch()

    // 각 Action들을 디스패치하는 함수들을 만들어준다.
    const onIncrease = () => {
        dispatch(increase())
    }

    const onDecrease = () => {
        dispatch(decrease())
    }

    const onIncreaseBy = (diff: number) => {
        dispatch(increaseBy(diff))
    }

    // UI가 있는 카운터를 렌더링하면서 "조회한 Global State 값"과, "Dispatch한 Action"들을 Props로 넘겨준다!
    return (
        <Counter
            count={count}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onIncreaseBy={onIncreaseBy}
        />
    )
}
