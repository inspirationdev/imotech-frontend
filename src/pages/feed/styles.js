import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 0px;

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
    color: #E4105D;
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

export const ContainerClientCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 80%;
    margin: 30px auto;

    p {
        margin: 0;
    }
`