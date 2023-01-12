import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

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

export const Wrapper = styled.div`
    max-width: 300px;
`

export const Column = styled.div`
    flex: 1;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

export const Title = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFF;

            @media (max-width: 992px) 
        {
            font-size: 24px;
            text-align: center;
            max-width: 320px;
        }
`

export const TitleLogin = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;
`

export const SubtitleLogin = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;
`

export const EsqueciText = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    margin-bottom: 0;
    color: #fff;
`

export const CriarText = styled.a`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #fff;
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