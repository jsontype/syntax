import React from 'react'
import styled from 'styled-components'

// 페이지의 중앙에 그림자가 적용된 흰색 박스를 보여준다.
const TodoTemplateBlock = styled.div`
    /* 페이지 중앙에 나타나도록 마진 설정 */
    margin: 0 auto; 
    margin-top: 96px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;

    /* 그림자 적용 */
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

    /* 흰색 박스 */
    background: white;

    /* 사이즈 설정 */
    width: 512px;
    height: 768px;

    /* 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
    position: relative;

    /* 곡선 테두리 */    
    border-radius: 16px;
`

function TodoTemplate({ children }) {
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>
}

export default TodoTemplate
