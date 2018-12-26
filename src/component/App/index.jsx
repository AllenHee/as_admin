import React from 'react';
import { Menu } from 'antd';
import './style.css';
import BasicRouter from '../../route';

const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;


const App = (props) => {
    return (
        <div className="admin">
            <header className="header">
                后台管理
            </header>
            <div className="main">
                {/* 侧边栏 */}
                <div className="nav">
                    <Menu
                        style={{ width: 250 }}
                        mode="inline"
                        className="nav-slide"
                    >
                        <SubMenu key="sub1" title="标题1">
                            <Menu.Item key="1">测试1</Menu.Item>
                            <Menu.Item key="2">测试2</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title="标题2">
                            <Menu.Item key="3">测试1</Menu.Item>
                            <Menu.Item key="4">测试2</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title="标题3">
                            <Menu.Item key="5">测试1</Menu.Item>
                            <Menu.Item key="6">测试2</Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                {/* 内容区块 */}
                <div className="main-content">
                    <div className="content">
                        <BasicRouter></BasicRouter>
                    </div>
                </div>
            </div>
        </div>
    )
}

App.propTypes = {
    // route: PropTypes.element
}

export default App;