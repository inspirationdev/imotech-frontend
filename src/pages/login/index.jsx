import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import {
    Link
} from "react-router-dom";


import {
    Column,
    Container,
    CriarText,
    EsqueciText,
    Row,
    SubtitleLogin,
    Title,
    TitleLogin,
    Wrapper,
    LinkLogarContainer
} from './styles'

const Login = () => {
    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        Bem vindo a plataforma de cadastro Imotech <br />(acesso restrito a funcionário)
                    </Title>
                </Column>
                <div>
                    <Wrapper>
                        <TitleLogin>Faça seu login</TitleLogin>
                        <SubtitleLogin>by Inspiration Dev._</SubtitleLogin>
                        <form action="">
                            <Input type="email" placeholder="email" />
                            <Input type="password" placeholder="senha" />
                            <LinkLogarContainer>
                                <Link to="/feed">Entrar</Link>
                            </LinkLogarContainer>
                        </form>
                        <Row>
                            <EsqueciText>Não é funcionário?</EsqueciText>
                            <CriarText href="https://imotech.app/">Clique aqui</CriarText>
                        </Row>
                    </Wrapper>
                </div>
            </Container>
        </>
    )
}

export { Login }