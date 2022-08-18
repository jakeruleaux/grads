import React from 'react';
import styled from 'styled-components';

const Page3 = () => {
    const Wrapper = styled.div`
    background-image: linear-gradient(to bottom right, red, pink);
        width: 100%;
    `;

    const Header = styled.h2`
        margin-left: 20px;
        color: white;
    `;

    return(
        <Wrapper>
            <Header>Diagonal Gradient</Header>
        </Wrapper>
    );
};

export default Page3;