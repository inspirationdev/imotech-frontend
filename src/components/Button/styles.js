import styled, { css } from 'styled-components'

export const ButtonContainer = styled.button`
    background-color: #6A3B8B;
    border-radius: 6px;
    border: solid 1px #fff;
    color: #FFF;
    min-width: 167px;
    height: 33px;
    max-width: 300px;
    width: 100%;

    ${({ variant }) => variant !== "primary" && css`
        min-width: 167px;
        height: 33px;
        background-color: #6A3B8B;
        color: #FFF;
    `}
`