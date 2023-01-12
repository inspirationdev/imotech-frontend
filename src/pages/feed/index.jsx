import { Header } from '../../components/Header'
import bannerImage from '../../assets/banner-principal.png'
import { Button } from '../../components/Button'

import {
    Container,
    ContainerClientCard
} from './styles'
import { Card } from '../../components/Card'

const Feed = () => {
    return (
        <>
            <Header />
            <ContainerClientCard>
                <p>Cadastro de clientes</p>
                <Button title="Adicionar cliente"/>
            </ContainerClientCard>
            <Container>
                <Card nameUser='Edivaldo Jr' documentsStatus='Documento validado' description='Comprador de uma casa nos Ingleses' moreDescription='gente fina'/>
                <Card nameUser='Pedro Binotto' documentsStatus='Documento incompleto' description='Comprador de um AP na trindade' moreDescription='grande homem' />
                <Card nameUser='Sidnei' documentsStatus='Documento validado' description='CEO da Imotech' moreDescription='CEO'/>
            </Container>
        </>
    )
}

export { Feed }