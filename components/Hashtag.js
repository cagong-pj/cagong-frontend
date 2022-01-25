import React from 'react';
import styled from 'styled-components';

const TagWrapper = styled.div`
    width: max-content;
    box-sizing: border-box;
    margin: 10px 0 10px 0;
`;

const TagIcon = styled.button`
    border: none;
    border-radius: 50px;
    height: 80px;
    width: 80px;
    background: #163800;
    color: #ffffff;
    margin: 0 0 10px 0;
`;

const TagTitle = styled.div`
    font-size: 14px;
    letter-spacing: -0.5px;
`;

// margin 상 우 하 좌

const Hashtag = ({ tagTitle }) => {
    return(
        <TagWrapper>
            <TagIcon>아이콘</TagIcon>
            <TagTitle>{tagTitle}</TagTitle>
        </TagWrapper>
    );
};

export default Hashtag;