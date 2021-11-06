import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
    width: 90px;
    height: 90px;
    border-radium: 6px;
    background-image: url( ${(props) =>props.photo});
    background-size: cover;
`;
const Title = styled.span`
    font-family: ${(props)=> props.theme.fonts.regular};
    color: #ffffff;
    font-size: 16px;
`;

const imageCard = ({photo, title}) => 
<Card photo={photo}>
    <Title>
        {title}
    </Title>
</Card>; 

export default imageCard;
