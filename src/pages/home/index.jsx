import { Header } from '../../components/Header'
import bannerImage from '../../assets/banner-principal.png'
import {
    Link
} from "react-router-dom";

import {
    Container,
    TextContent,
    Title,
    TitleHighlight,
    LogoImg,
    LinkHome,
    LinkLogarContainer
} from './styles'

const Home = () => {
    return (
        <>
            <Header />
            <Container>
                <div>
                    <Title>
                        <TitleHighlight>
                            Um, dois
                            <br />
                        </TitleHighlight>
                        pensou, vendeu
                    </Title>
                    <TextContent>
                        Bem vindo a Imotech, acesse a nossa plataforma <LinkHome href='https://imotech.app/'>clicando aqui</LinkHome>
                        <br />
                        <br />
                        Se for membro da Imotech, por favor fazer login clicando no botão abaixo
                    </TextContent>
                    <LinkLogarContainer>
                        <Link to="/login">Logar</Link>
                    </LinkLogarContainer>
                </div>
                <div>
                    <LogoImg src={bannerImage} alt="Imagem principal" />
                </div>
            </Container>
        </>
    )
}

export { Home }