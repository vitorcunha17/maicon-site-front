import React, { FunctionComponent } from 'react'
import { Layout as AntdLayout, Menu } from "antd";
import { Link } from 'react-router-dom';
import { FormOutlined, LogoutOutlined, TeamOutlined, NotificationFilled, CalendarFilled, ScheduleFilled, UserOutlined } from '@ant-design/icons'

const { Header, Content, Footer } = AntdLayout

const { SubMenu } = Menu

const Layout: FunctionComponent = ({ children }) => {
    return (
        <AntdLayout style={{ height: "-webkit-fill-available" }}>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                >
                    {/*
                    Menu.Item key="1">
                        <Link style={{ textDecoration: "none" }} to="/planos">
                            <FormOutlined />
                            Planos
                            </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link style={{ textDecoration: "none" }} to="/planos">
                            <NotificationFilled />
                            Postagens
                            </Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link style={{ textDecoration: "none" }} to="/planos">
                            <CalendarFilled />
                            Quadro de horários
                            </Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link style={{ textDecoration: "none" }} to="/planos">
                            <ScheduleFilled />
                            Quadro de graduações
                            </Link>
                    </Menu.Item>
                    <SubMenu
                        title={
                            <span className="submenu-title-wrapper">
                                <UserOutlined />
                                Perfil
                                </span>
                        }
                    >
                        <Menu.Item key="graduacoes">Minhas Graduações</Menu.Item>
                        <Menu.Item key="logout">
                            <Link style={{ textDecoration: "none" }} onClick={() => localStorage.clear()} to="/">
                                <LogoutOutlined />
                                <span >Logout</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu> 
                    */}
                </Menu>
            </Header>
            <div style={{ padding: '0 50px', marginTop: 64, background: "#f0f2f5" }}>
                <br />
                <br />
                {children}
            </div>
            <Footer style={{ textAlign: 'center' }}>MAICOLA ©2020 Created by Dev Solutions</Footer>
        </AntdLayout>
    )
}

export default Layout
