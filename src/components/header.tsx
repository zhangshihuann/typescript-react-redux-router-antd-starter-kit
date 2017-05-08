import * as React from 'react'
import * as PropTypes from "prop-types";
import {Icon, Menu,Affix} from 'antd'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Header extends React.Component<any,any> {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }
    handleClick (key) {
        switch(key.key){
            case 'support':
                this.props.history.push('/support');
                break;                                       
            case 'user:logout':
                let dataObj = {
                    type: "USER_LOGOUT",
                    url: "/user/logout",
                }        
                this.props.api.postUrl(dataObj);      
                this.props.history.push('/login');
                break;
        }
    }
    componentWillMount() {
    }
    render () {
        const {userInfo} = this.props;
        return (
            <Affix>
            <div>
                <Menu onClick={this.handleClick.bind(this)} mode="horizontal">
                <Menu.Item key="dashboard">
                    <Icon type="area-chart" />Dashboard
                </Menu.Item>
                <Menu.Item key="environment">
                    <Icon type="environment" />Environment
                </Menu.Item>          

                <Menu.Item key="support">
                    <Icon type="search" key="support"/>Support
                </Menu.Item> 
                <Menu.Item key="ticket">
                    <Icon type="book" />Ticket
                </Menu.Item>                 
                <SubMenu title={<span><Icon type="meh" />{userInfo.user}</span>}>
                    <Menu.Item key="setting:1">Setting 1</Menu.Item>
                    <Menu.Item key="setting:2">Setting 2</Menu.Item>
                    <Menu.Divider />
                    <Menu.Item key="user:logout">Logout</Menu.Item>
                </SubMenu>
                <Menu.Item key="help">
                    <Icon type="question" />Help
                </Menu.Item>
                </Menu>
            </div>
            </Affix>
        )
    }
}

export default Header

