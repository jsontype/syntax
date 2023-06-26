import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
`

const DialogBlock = styled.div`
  width: 320px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;
  h3 {
    margin: 0;
    font-size: 1.5rem;
  }
  p {
    font-size: 1.125rem;
  }
`

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`

/* 
  2. 컴포넌트의 스타일을 특정상황에서 덮어쓰기 : 
    기존 Button을 ShortMarginButton으로 덮어씌워서, 
    모달의 "취소", "삭제" 버튼 간격을 변경할 수 있다. 
    단, 이렇게 하려면 Button안에 className props를 전달해야 하는데, 
    Button 컴포넌트의 경우에는 ...rest를 통해 전달이 되고 있다. 
*/
const ShortMarginButton = styled(Button)`
  & {
    align-items: center;
  }
  & + & {
    margin-left: 0.5rem;
  }
`

// 1. 모달 (=다이얼로그)
function Dialog({
  title,
  children,
  confirmText,
  cancelText,
  /* 
    3. 열고 닫을 수 있는 기능을 구현 : 
      Dialog 에서 onConfirm 과 onCancel 을 props로 받아와서 각 버튼들에게 onClick 으로 설정해준다. 
      visible props도 받아와서 이 값이 false일 때 컴포넌트에서 null을 반환하도록 설정해준다.
  */
  onConfirm,
  onCancel,
  visible
}) {
  if (!visible) return null
  return (
    <DarkBackground>
      <DialogBlock>
        <h3>{title}</h3>
        <p>{children}</p>
        <ButtonGroup>
          {/* 
            2. 컴포넌트의 스타일을 특정상황에서 덮어쓰기 : 
              기존 Button을 ShortMarginButton으로 덮어씌워서, 
              모달의 "취소", "삭제" 버튼 간격을 변경할 수 있다. 
              단, 이렇게 하려면 Button안에 className props를 전달해야 하는데, 
              Button 컴포넌트의 경우에는 ...rest를 통해 전달이 되고 있다. 
          */}
          {/* 
            3. 열고 닫을 수 있는 기능을 구현 : 
              Dialog 에서 onConfirm 과 onCancel 을 props로 받아와서 각 버튼들에게 onClick 으로 설정해준다. 
              visible props도 받아와서 이 값이 false일 때 컴포넌트에서 null을 반환하도록 설정해준다.
          */}
          <ShortMarginButton color="gray" onClick={onCancel}>
            {cancelText}
          </ShortMarginButton>
          {/* 
            2. 컴포넌트의 스타일을 특정상황에서 덮어쓰기 : 
              기존 Button을 ShortMarginButton으로 덮어씌워서, 
              모달의 "취소", "삭제" 버튼 간격을 변경할 수 있다. 
              단, 이렇게 하려면 Button안에 className props를 전달해야 하는데, 
              Button 컴포넌트의 경우에는 ...rest를 통해 전달이 되고 있다. 
          */}
          {/* 
            3. 열고 닫을 수 있는 기능을 구현 : 
              Dialog 에서 onConfirm 과 onCancel 을 props로 받아와서 각 버튼들에게 onClick 으로 설정해준다. 
              visible props도 받아와서 이 값이 false일 때 컴포넌트에서 null을 반환하도록 설정해준다.
          */}
          <ShortMarginButton color="pink" onClick={onConfirm}>
            {confirmText}
          </ShortMarginButton>
        </ButtonGroup>
      </DialogBlock>
    </DarkBackground>
  )
}

Dialog.defaultProps = {
  confirmText: '확인',
  cancelText: '취소'
}

export default Dialog
