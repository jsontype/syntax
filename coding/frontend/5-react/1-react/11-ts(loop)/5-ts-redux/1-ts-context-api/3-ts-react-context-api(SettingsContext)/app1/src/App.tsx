import React from 'react'
import Settings from './Settings'
// SettingsContext 임포트
import { SettingsContext } from './SettingsContext'

const App: React.FC = () => {
    return (
        // Context로 감싸면, SettingsContext 컴포넌트에서 직접 만든 커스텀 Hooks를 사용하여 state와 dispatch를 쉽게 조회하여 사용할 수 있다.
        <SettingsContext>
            <Settings />
        </SettingsContext>
    )
}

export default App
