import styled, { css } from 'styled-components'

export const ButtonContainer = styled.button`
    background-color: #3c2455;
    border-radius: 6px;
    position: relative;

    color: #FFF;
    padding: 8px 12px;
    min-width: 120px;
    width: 100%;

    ${({variant})=> variant !== "primary" && css`
        min-width: 167px;
        height: 33px;
        background-color: #E4105D;

        &::after {
            content: "";
            position: absolute;
            border: 1px solid #E4105D;
            top: -5px;
            left: -6px;
            width: calc(100% + 10);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}
`