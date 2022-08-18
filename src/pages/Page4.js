import React from 'react';
import styled from 'styled-components';

const Page4 = () => {
    const Wrapper = styled.div`
        background-image: repeating-linear-gradient(blue, skyblue 10%, white 20%);
        width: 100%;
    `;

    const Header = styled.h2`
        margin-left: 20px;
        color: white;
    `;

    return(
        <Wrapper>
            <Header>Repeat Gradient</Header>
        </Wrapper>
    );
};

export default Page4;