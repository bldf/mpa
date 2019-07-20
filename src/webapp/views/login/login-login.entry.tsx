import React from 'react';
import { Row,Col } from 'antd';
import ReactDOM from 'react-dom';

ReactDOM.render((
    <Row>
          <Col style={{background:'#6cf'}} span={8}>col-8</Col>
          <Col span={8}>col-8</Col>
          <Col style={{background:'pink'}} span={8}>col-8</Col>
        </Row>
), document.getElementById("app"))