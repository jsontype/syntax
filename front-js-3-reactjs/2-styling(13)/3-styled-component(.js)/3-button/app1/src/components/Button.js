import React from 'react'
import styled, { css } from 'styled-components'
// 2. polished 라이브러리 설치 후 사용 : lighten(), darken()
import { darken, lighten } from 'polished'

// 3. ThemeProvider 사용 : Button 컴포넌트가 color props를 통하여 받아오게 될 색상을 사용한다.
// 4. color, size, outline, fullWidth : 각각 색상, 크기, 윤곽버튼, 풀(100%)너비버튼에 관련된 코드를 분리하여 사용하여 가독성을 높여주었다.
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

// 4. color, size, outline, fullWidth : 각각 색상, 크기, 윤곽버튼, 풀(100%)너비버튼에 관련된 코드를 분리하여 사용하여 가독성을 높여주었다. -> 리팩토링 하기 전
// const sizeStyles = css`
//     ${props =>
//         props.size === 'large' &&
//         css`
//             height: 3rem;
//             font-size: 1.25rem;
//         `}

//     ${props =>
//         props.size === 'medium' &&
//         css`
//             height: 2.25rem;
//             font-size: 1rem;
//         `}

//     ${props =>
//         props.size === 'small' &&
//         css`
//             height: 1.75rem;
//             font-size: 0.875rem;
//     `}
// `

// 4. color, size, outline, fullWidth : 각각 색상, 크기, 윤곽버튼, 풀(100%)너비버튼에 관련된 코드를 분리하여 사용하여 가독성을 높여주었다. -> 리팩토링 한 후
const sizeStyles = css`
    ${({ size }) => css`
        height: ${sizes[size].height};
        font-size: ${sizes[size].fontSize};
    `}
`

// 4. color, size, outline, fullWidth : 각각 색상, 크기, 윤곽버튼, 풀(100%)너비버튼에 관련된 코드를 분리하여 사용하여 가독성을 높여주었다.
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
  
// 4. color, size, outline, fullWidth : 각각 색상, 크기, 윤곽버튼, 풀(100%)너비버튼에 관련된 코드를 분리하여 사용하여 가독성을 높여주었다.
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

// 1. 일반 버튼
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

// 3. ...rest : props.theme.palette.blue 이런식으로 값을 조회하는 대신에 비구조화 할당 문법을 사용하여 가독성을 높여주었다. 
// 4. color, size, fullWidth : 각각 색상, 크기, 풀(100%)너비버튼에 관련된 코드를 분리하여 사용하여 가독성을 높여주었다.
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

// 3. 기본값을 설정해준다.
Button.defaultProps = {
    color: 'blue',
    size: 'medium'
}

export default Button
