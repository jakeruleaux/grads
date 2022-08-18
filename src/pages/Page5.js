import React from 'react';
import styled from 'styled-components';

const Page5= () => {
    const Wrapper = styled.div`
        background: darkgrey;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    `;

    const Header = styled.h2`
        margin-left: 20px;
        color: white;
        position: absolute;
        top: 10px;
        left: 200px;
    `;

    const Sphere = styled.div`
        background:radial-gradient(circle at 50% top, rgba(255, 255, 0, 1) 0%, rgba(255, 255, 255, 1) 0%, rgba(238, 130, 238, 1) 100%);
        width: 400px;
        height: 400px;
        border-radius: 50%;
    `;

    const Shadow = styled.div`
        width: 375px;
        height: 20px;
        background: rgba(0, 0, 0, 0.7);
        border-radius: 60%;
    `;

    return(
        <Wrapper>
            <Header>Sphere Gradient</Header>
            <Sphere />
            <Shadow />
        </Wrapper>
    );
};

export default Page5;