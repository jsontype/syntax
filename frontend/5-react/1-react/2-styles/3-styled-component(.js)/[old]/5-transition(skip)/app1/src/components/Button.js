import React from 'react'
import styled, { css } from 'styled-components'
import { darken, lighten } from 'polished'

const colorStyles = css`
    ${({ theme, color }) => {
        const selected = theme.palette[color]
            return css`
                background: ${selected};
                /* 2. polished 라이브러리 설치 후 사용 : lighten(), darken() */
                &:hover {
                    background: ${lighten(0.1, selected)};
                }
                &:active {
                    background: ${darken(0.1, selected)};
                }
                /* 4. outline : Boolean 값으로 true일 경우 "윤곽만 있는 버튼"이 됨 */
                ${props =>
                    props.outline && css`
                        color: ${selected};
                        background: none;
                        border: 1px solid ${selected};
                        &:hover {
                            background: ${selected};
                            color: white;
                        }
                    `
                }
            `
    }}
`

const sizeStyles = css`
    ${({ size }) => css`
        height: ${sizes[size].height};
        font-size: ${sizes[size].fontSize};
    `}
`

const sizes = {
    large: {
        height: '3rem',
        fontSize: '1.25rem'
    },
    medium: {
        height: '2.25rem',
        fontSize: '1rem'
    },
    small: {
        height: '1.75rem',
        fontSize: '0.875rem'
    }
}
  
const fullWidthStyle = css`
    ${props =>
        props.fullWidth && css`
            width: 100%;
            justify-content: center;
            & + & {
                margin-left: 0;
                margin-top: 1rem;
            }
        `
    }
`

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  ${sizeStyles}

  /* 색상 */
  ${colorStyles}

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }

  ${fullWidthStyle}
`

function Button({ children, color, size, outline, fullWidth, ...rest }) {
  return (
    <StyledButton
        color={color}
        size={size}
        outline={outline}
        fullWidth={fullWidth}
        {...rest}
    >
        {children}
    </StyledButton>
  )
}

Button.defaultProps = {
    color: 'blue',
    size: 'medium'
}

export default Button
