import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {

    const navigate = useNavigate();

    const StyledButton = styled.button`
        color: blue;
        border-color: blue;
        border-radius: 5px;
        margin-left: 10px;
    `;

    return(
        <div>
            <StyledButton onClick={() => navigate(-1)}>Back</StyledButton>
        </div>
    );
};

export default BackButton;