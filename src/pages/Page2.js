import React from 'react';
import styled from 'styled-components';

const Page2 = () => {
    const Wrapper = styled.div`
    background:radial-gradient(circle at 50% 50%, rgba(255, 255, 0, 1) 0%, rgba(255, 255, 255, 1) 0%, rgba(238, 130, 238, 1) 100%);
    width: 100%;
`;

const Header = styled.h2`
    margin-left: 20px;
    color: white;
`;

    return(
        <Wrapper>
            <Header>Radial Gradient</Header>
        </Wrapper>
    );
};

export default Page2;