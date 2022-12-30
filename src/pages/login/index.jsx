import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'


import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles'

const Login = () => {
    return (
        <>
            <Header/>
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas
                    </Title>
                </Column>
                <div>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                        <form action="">
                            <Input type="email" placeholder="email"/>
                            <Input type="password" placeholder="senha"/>
                            <Button title="Entrar" variant='secondary'/>
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText>Criar conta</CriarText>
                        </Row>
                    </Wrapper>
                </div>
            </Container>
        </>
    )
}

export { Login }