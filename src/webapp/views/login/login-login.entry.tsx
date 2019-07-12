/**
 * title: 仕点智能科技-生产管理系统-登录
 */
import React from 'react';
import { Layout, notification } from 'antd';
import ReactDOM from 'react-dom';
const { Header, Content } = Layout;

const alertMsg = (a: string, b: string) => {
    notification.open({
        message: `${a}`,
        description: `${b}`
    });
}
const Login = () => {
    return (
        <Layout >
            <Header>
                <h1>仕点智造生产管理系统78***9</h1>
            </Header>
            <Content>
                <p > SDINT All Rights Reserved897798654651321 仕点智能</p>
            </Content>
        </Layout>
    );
};

console.log('llllllllllllllllllllllll')
ReactDOM.render((
    <Layout >
        <Header>
            <h1>仕点智造生产管理系统987987987</h1>
        </Header>
        <Content>
            <p > SDINT All Rights Reserved 仕点智能</p>
        </Content>
    </Layout>
), document.getElementById("app"))