import styled from "styled-components"

/*estrutures*/ 

export const Container = styled.div`
    width: 100%;
    max-width: 80%;
    height: 47%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Wrapper = styled.div`
    background-color: #623b8b;
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BuscarInputContainer = styled.div`
    width: 175px;
    height: 30px;
    background: #3c2455;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 25px;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Menu = styled.a`
    font-style: normal;
    font-size: 15px;
    line-height: 25px;
    color: #FFF;
    margin-right: 12px;
    text-decoration: none;
`

export const MenuRight = styled.a`
    font-style: normal;
    font-size: 15px;
    line-height: 25px;
    color: #FFF;
    margin-right: 12px;
    text-decoration: none;
`

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 2px solid #FFF;
`

export const Input = styled.input`
    background: transparent;
    flex: 1;
    border: 0;
    color: #FFF;
`
/*elements*/

export const Logo = styled.img`
    max-width: 160px;
`