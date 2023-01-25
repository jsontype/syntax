import styled, { css } from 'styled-components'

export const Circle = styled.div`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background: ${props => props.color || 'black'};
    ${props =>
        props.huge && css`
        width: 10rem;
        height: 10rem;      
    `};
`

// 상속
export const GrayCircle = styled(Circle)`
    background: gray;
`
