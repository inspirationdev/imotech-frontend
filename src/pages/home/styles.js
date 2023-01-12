import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
        @media (max-width: 992px) 
        {
            flex-direction: column;
            gap: 2 rem;
        }
`

export const Title = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFF;
`

export const TitleHighlight = styled.span`
    color: #fff;
`

export const TextContent = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    max-width: 420px;
    width: 100%;
    margin-bottom: 20px;
    line-height: 22px;

    color: #FFF;
`

export const LogoImg = styled.img`
    max-width: 300px;
        @media (max-width: 992px) 
        {
            margin-top: 20px;
            max-width: 250px;
        }
`

export const LinkHome = styled.a`
    text-decoration: underline;
    color: #fff;
    cursor: pointer;
`

export const LinkLogarContainer = styled.div`

    a {
        min-width: 167px;
        height: 33px;
        background-color: #6A3B8B;
        border-radius: 6px;
        border: solid 1px #fff;
        color: #FFF;
        width: 100%;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`