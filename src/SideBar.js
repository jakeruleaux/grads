import React from 'react';
import styled from 'styled-components';

const SideBarContainer = styled.div`
    width: 200px;
    height: 100vh;
    background-color: lightgrey;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SideBar = () => {
    return (
        <SideBarContainer>side</SideBarContainer>
    );
};

export default SideBar;