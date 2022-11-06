import styled, { css } from 'styled-components'

export const Button = styled.button`
    font-size: 16px;
    width: 100px;
    border-radius: 5px;
    background: ${props => props.color || 'black'};
    color: ${props => props.color === 'white' ? 'black' : 'white'};    
    ${props => props.huge && css`
        font-size: 24px;
        width: 200px;
    `}
`
