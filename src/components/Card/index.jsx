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

const Card = ({imageProfile = null, nameUser = "default user", documentsStatus = "default status", description = "default description", moreDescription = "default more user"}) => {
    return (
        <CardContainer>
            <ImageBackground />
            <Content>
                <UserInfo>
                    <UserPicture src={imageProfile} />
                    <div>
                        <h4>{nameUser}</h4>
                        <p>{documentsStatus}</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>{description}</h4>
                </PostInfo>
                <HasInfo>
                    <h4>{moreDescription}</h4>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card }