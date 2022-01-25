import React from 'react';
import styled from 'styled-components';

const TagWrapper = styled.div`
    width: max-content;
    box-sizing: border-box;
    margin: 10px 0 10px 0;
`;

const TagIcon = styled.div`
    border: none;
    border-radius: 50px;
    height: 70px;
    width: 70px;
    background: #163800;
    color: #ffffff;
    margin: 0 0 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TagText = styled.div`
    font-size: 14px;
    letter-spacing: -0.5px;
`;

// margin 상 우 하 좌

const Hashtag = ({ tagText, tagImage }) => {
    return(
        <TagWrapper>
            <TagIcon>
                <img src={`/images/icon_${tagImage}.png`} width='40px' />
            </TagIcon>
            <TagText>{tagText}</TagText>
        </TagWrapper>
    );
};

export default Hashtag;