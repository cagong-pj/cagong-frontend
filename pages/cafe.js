import styled from "styled-components";
import { Row, Col } from 'antd';
import "antd/dist/antd.css"
import Hashtag from "../components/Hashtag";

const DetailWrapper = styled.div`
    height: 300px;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    background: white;
    padding: 30px;
`;

const CafeDetail = () => {
    return(
        <div style={{background: '#163800'}}>
            <div style={{padding: '30px'}}>
                <div style={{ fontSize: '25px', color: 'white', letterSpacing:'-1.5px' }}>스탠스커피</div>
                <div style={{ color: 'white', letterSpacing:'-0.5px' }}>서울 마포구 상수동 93-111 1층</div>
            </div>

            <DetailWrapper>
                <div style={{ letterSpacing: '-0.5px', marginBottom: '10px'}}>02-323-7500</div>
                <div style={{ letterSpacing: '-0.5px', marginBottom: '10px' }}>평일 10:00 - 23:00, 주말 12:00 - 23:00</div>
                <Row type='flex' justify='center' style={{ marginBottom: '20px' }}>
                    <Col span={4} type="flex" align="middle"><Hashtag tagImage={'plugin'} tagText={'40'} /></Col>
                    <Col span={4} type="flex" align="middle"><Hashtag tagImage={'mute'} tagText={'7'} /></Col>
                    <Col span={4} type="flex" align="middle"><Hashtag tagImage={'table'} tagText={'23'} /></Col>
                    <Col span={4} type="flex" align="middle"><Hashtag tagImage={'eyes'} tagText={'25'} /></Col>
                    <Col span={4} type="flex" align="middle"><Hashtag tagImage={'chair'} tagText={'12'} /></Col>
                    <Col span={4} type="flex" align="middle"><Hashtag tagImage={'light'} tagText={'20'} /></Col>
                </Row>
                <Row type='flex' justify='center'>
                    <img src="https://i.ibb.co/m4jWz73/stanscoffee.jpg" width="800px" height="300px" style={{ objectFit: 'cover' }}/>
                </Row>
            </DetailWrapper>
        </div>
    );
};

export default CafeDetail;