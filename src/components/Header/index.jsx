import React from 'react'
import logo from '../../assets/imotech-logo.png'
import { Button } from '../Button'

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper,
    Logo
} from './styles'

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <Logo src={logo} alt="logo da ImoTech" />
                    <BuscarInputContainer>
                        <Input placeholder='Buscar...'/>
                    </BuscarInputContainer>
                    <Menu href='https://imotech.app/'>Conheça a Imotech</Menu>
                    <Menu href='https://www.instagram.com/imotech.app/'>Fale Conosco</Menu>
                </Row>
                <Row>
                    <MenuRight href='#'>Home</MenuRight>
                    <Button title="Entrar" />
                    <Button title="Cadastrar" />
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }