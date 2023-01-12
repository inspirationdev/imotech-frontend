import React from 'react'
//import { FithumbsUp } from 'react-icons/fi'

import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from './styles'

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground />
            <Content>
                <UserInfo>
                    <UserPicture />
                    <div>
                        <h4>Edivaldo JR</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para blá blá bla...</h4>
                    <p>Texto complementar...</p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #JS</h4>
                    <p>likes</p> 20
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card }