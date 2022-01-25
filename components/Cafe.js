import React from 'react';
import styled from 'styled-components';

const CafeWrapper = styled.div`
    width: 350px;
    height: 150px;
    border-radius: 10px;
    box-sizing: border-box;
    margin: 10px auto;
    background-image: url(${props => props.bgUrl});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    box-shadow: 1px 5px 10px lightgray;
`;

const CafeTitle = styled.div`
    color: #ffffff;
    font-size: 22px;
    font-weight: bold;
    text-shadow: black 1px 0 5px;
    letter-spacing: -0.5px;
    padding: 20px;
    position: absolute;
    bottom: 35px;
`;

const CafeAddress = styled.div`
    color: #ffffff;
    font-size: 14px;
    text-shadow: black 1px 0 5px;
    letter-spacing: -0.5px;
    padding: 20px;
    position: absolute;
    bottom: 10px;
`;

const Cafe = ({ cafeTitle, cafeAddress, cafeUrl }) => {
    return(
        <CafeWrapper bgUrl={cafeUrl}>
            <CafeTitle>{cafeTitle}</CafeTitle>
            <CafeAddress>{cafeAddress}</CafeAddress>
        </CafeWrapper>
    );
};

export default Cafe;