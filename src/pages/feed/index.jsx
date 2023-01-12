import { Header } from '../../components/Header'
import bannerImage from '../../assets/banner-principal.png'
import { Button } from '../../components/Button'

import { Container, TextContent, Title, TitleHighlight } from './styles'
import { Card } from '../../components/Card'

const Feed = () => {
    return (
        <>
            <Header/>
            <Container>
                <Card/>
            </Container>
        </>
    )
}

export { Feed }