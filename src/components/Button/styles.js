import styled, { css } from 'styled-components'

export const ButtonContainer = styled.button`
    background-color: #3c2455;
    border-radius: 6px;
    border: solid 1px #fff;
    color: #FFF;
    min-width: 120px;
    width: 100%;

    ${({ variant }) => variant !== "primary" && css`
        min-width: 167px;
        height: 33px;
        background-color: #6A3B8B;

    `}
`