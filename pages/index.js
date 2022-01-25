import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import { Row, Col } from 'antd';
import "antd/dist/antd.css"

import Cafe from '../components/Cafe';
import Hashtag from '../components/Hashtag';

const SearchInput = styled.input`
    vertical-align: middle;
    border-radius: 30px;
    border: 1px solid #ffffff;
    background: #ebebeb;
    font-size: 17px;
    padding: 20px;
    width: 300px;
    height: 10px;
    margin: 0 0 0 70px;
`;

const SearchButton = styled.img`
    margin: 0 20px 0 10px;
`;

const Home = () => {
    return(
        <div>
            <Row>
                <SearchInput type="text" required/>
                <SearchButton src="https://i.ibb.co/Zdqs4Cy/search-Button.png" width="40px"/>
            </Row>
            <Row>
                <div>상수동</div>
            </Row>
            <Row type='flex' justify='center' style={{ marginTop: '30px' }}>
                <Col span={6} type="flex" align="middle"><Hashtag tagImage={'plugin'} tagText={"콘센트가 많아요"}/></Col>
                <Col span={6} type="flex" align="middle"><Hashtag tagImage={'mute'} tagText={"조용해요"}/></Col>
                <Col span={6} type="flex" align="middle"><Hashtag tagImage={'table'} tagText={"책상이 넓어요"}/></Col>
            </Row>
            <Row type='flex' justify='center' style={{ marginBottom: '30px' }}>
                <Col span={6} type="flex" align="middle"><Hashtag tagImage={'eyes'} tagText={"눈치가 덜 보여요"}/></Col>
                <Col span={6} type="flex" align="middle"><Hashtag tagImage={'chair'} tagText={"자리가 편해요"}/></Col>
                <Col span={6} type="flex" align="middle"><Hashtag tagImage={'light'} tagText={"눈이 편해요"}/></Col>
            </Row>
            <Row type='flex' justify='left'>
                <Col xs={24} md={12}>
                    <Link href="/cafe">
                        <a>
                        <Cafe cafeTitle={"스탠스커피"} cafeAddress={"서울 마포구 상수동 93-111"} cafeUrl={"https://i.ibb.co/m4jWz73/stanscoffee.jpg"}/>
                        </a>
                    </Link>
                </Col>
                <Col xs={24} md={12}><Cafe cafeTitle={"펠리칸카페"} cafeAddress={"서울 마포구 상수동 324-11"} cafeUrl={"https://i.ibb.co/ysbvgLB/pelicancafe.jpg"}/></Col>
            </Row>
        </div>
    );
};

export default Home;