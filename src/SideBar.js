import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const SideBarContainer = styled.div`
    width: 200px;
    height: 100vh;
    background-color: lightgrey;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`;

const NavLink = styled(Link)`
    margin: 20px;
    text-decoration: none;
`; 

const SideBar = () => {
    
    return (
        <SideBarContainer>
            <NavLink to={'/page1'}>Page 1</NavLink>
            <NavLink to={'/page2'}>Page 2</NavLink>
            <NavLink to={'/page3'}>Page 3</NavLink>
            <NavLink to={'/page4'}>Page 4</NavLink>
            <NavLink to={'/page5'}>Page 5</NavLink>
            <NavLink to={'/page6'}>Page 6</NavLink>
        </SideBarContainer>
    );
};

export default SideBar;