import React, { useReducer, useContext, createContext, Dispatch } from 'react'

/* 필요한 타입들을 미리 선언 */
    
// Color의 데이터타입
type Color = 'red' | 'orange' | 'yellow'

// State의 데이터타입
type State = {
    count: number
    text: string
    color: Color
    isGood: boolean
}

// 액션타입 : 여기에 액션타입(type: 'SET_COUNT' 등) 외의 값을 넣게 되면, 각 변수들(count 등)에게 데이터타입을 같이 정의해야한다.
type Action =
    | { type: 'SET_COUNT', count: number }
    | { type: 'SET_TEXT', text: string }
    | { type: 'SET_COLOR', color: Color }
    | { type: 'TOGGLE_GOOD' }

// 디스패치 타입 : 액션들의 타입을 Dispatch의 Generics로 설정
type SettingsDispatch = Dispatch<Action>

// Context 만들기
const SettingsStateContext = createContext<State | null>(null)
const SettingsDispatchContext = createContext<SettingsDispatch | null>(null)

// 리듀서
function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'SET_COUNT':
            return {
                ...state,
                count: action.count // count가 자동완성되며, number 타입인 걸 알 수 있다.
            }
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text // text가 자동완성되며, string 타입인 걸 알 수 있다.
            }
        case 'SET_COLOR':
            return {
                ...state,
                color: action.color // color가 자동완성되며 color가 Color 타입인 걸 알 수 있다.
            }
        case 'TOGGLE_GOOD':
            return {
                ...state,
                isGood: !state.isGood
            }
        default:
        throw new Error('Unhandled action')
    }
}

// SettingsProvider에서 useReduer를 사용하고, SettingsStateContext.Provider와 SettingsDispatchContext.Provider로 children을 감싸서 반환한다.
export function SettingsContext({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        text: 'hello',
        color: 'red',
        isGood: true
    })

    return (
        <SettingsStateContext.Provider value={state}>
            <SettingsDispatchContext.Provider value={dispatch}>
                {children}
            </SettingsDispatchContext.Provider>
        </SettingsStateContext.Provider>
    )
}

/*
    1. 커스텀 Hooks 만들기
        커스텀 Hooks인 useSettingsState와 useSettingsDispatch에서는 null 체킹을 해주는것이 매우 중요하다.
        만약에 Context가 지니고 있는 값이 유효하지 않으면 에러를 발생시는 코드를 작성해주었는데,
        이를 통해 추후 Hooks를 사용하게 될 때 각 Hooks 함수들이 반환하는 값이 언제나 유효하다는 것을 보장할 수 있다.

        null 체킹을 하는 경우, useSettingsState의 결과값 타입은 State가 되고,
        null 체킹을 하지 않는 경우, useSettingsState의 결과값의 타입은 State | null이 된다.
*/

// state를 쉽게 사용하기 위한 커스텀 Hooks
export function useSettingsState() {
    const state = useContext(SettingsStateContext)
    if (!state) throw new Error('Cannot find SettingsProvider') // 유효하지 않을땐 에러를 발생
    return state
}

// dispatch를 쉽게 사용하기 위한 커스텀 Hooks
export function useSettingsDispatch() {    
    const dispatch = useContext(SettingsDispatchContext)
    if (!dispatch) throw new Error('Cannot find SettingsProvider') // 유효하지 않을땐 에러를 발생
    return dispatch
}
