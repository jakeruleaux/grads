import React from 'react';
import styled from 'styled-components';

const Page1 = () => {

    const Wrapper = styled.div`
        background-image: linear-gradient(to right, blue, skyblue);
        width: 100%;
    `;

    const Header = styled.h2`
        margin-left: 20px;
        color: white;
    `;

    return(
        <Wrapper>
            <Header>Linear Gradient</Header>
        </Wrapper>
    );
};

export default Page1;