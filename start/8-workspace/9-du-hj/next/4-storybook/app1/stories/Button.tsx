import React from 'react'
import './button.css'

interface ButtonProps {
  // 참조 : /** */ 주석으로 해야, 호출하는 곳에서 후버링을 했을 때 vscode상에서 툴팁으로 프롭에 대한 설명이 나온다.
  /**
  * primary 버튼인가?
  */
  primary?: boolean
  /**
  * 버튼의 백그라운드 컬러는?
  */
  backgroundColor?: string
  /**
  * 버튼의 크기는?
  */
  size?: 'small' | 'medium' | 'large'
  /**
  * 버튼의 텍스트는?
  */
  label: string
  /**
  * 클릭 이벤트핸들러 (선택사항)
  */
  onClick?: () => void
}

/**
* Primary UI component for user interaction
*/
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary'
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' ',
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  )
}