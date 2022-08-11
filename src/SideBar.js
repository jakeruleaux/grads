import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';

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
        <SideBarContainer>
            <Link to={'/page1'}>Page 1</Link>
            <Link to={'/page2'}>Page 2</Link>
            <Link to={'/page3'}>Page 3</Link>
        </SideBarContainer>
    );
};

export default SideBar;