import React from 'react';
import styled from 'styled-components';

const Page6 = () => {
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
        width: 400px;
        height: 400px;
        border-radius: 50%;
        background: darkblue;
        box-shadow: inset -25px -25px 40px rgba(0,0,0,.5);
    `;

    const Shadow = styled.div`
        width: 375px;
        height: 20px;
        background: radial-gradient(ellipse farthest-side at 45px 45px, rgba(50, 50, 50, 0.8) 0%, rgba(80, 80, 80, 0.2) );
        border-radius: 60%;
    `;

    return(
        <Wrapper>
            <Header>Sphere Shadow</Header>
            <Sphere />
            <Shadow />
        </Wrapper>
    );
};

export default Page6;