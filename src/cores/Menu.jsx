import React from 'react';
import { TabBar, View, WingBlank } from 'antd-mobile';
import Products from '../pages/product-tab/ProductsTab';
import Orders from '../pages/orders-tab/OrdersTab';
import Baskets from '../pages/basket-tab/BasketsTab';
import Settings from './../pages/setting-tab/MoreLists.jsx';
import Messages from './../pages/messages/MessagesTab.jsx';
import { InputItem, List, Button, WhiteSpace } from "antd-mobile";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { singinWithServer, logoutMethod } from './../user/store-singin/actions/actions'
import './../user/style.css'
import { FaBoxes } from 'react-icons/fa'
import { CommentOutlined, ShoppingCartOutlined, MenuOutlined, AmazonOutlined } from '@ant-design/icons'
// import {TiMessages} from 'react-icons/ti';
class Menu extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            selectedTab: 'blueTab',
            hidden: false,
            username: '',
            password: ''
        };
        this.props.singinWithServer(this.state.username, this.state.password)
    }

    handleFieldChange = (e, fieldName) => {
        let data = this.state;
        data[fieldName] = e;
        this.setState(data);
    };


    render() {

        return (
            this.props.user.user.isLogout || !(this.props.user.user.user) ?
                <WingBlank>
                    <List
                        style={{ direction: 'rtl', textAlign: 'right', marginTop: '100px', marginBottom: '50px' }}
                    >
                        <h1 style={{ textAlign: 'center', paddingTop: '50px' }}>تسيجل دخول</h1>
                        <InputItem
                            placeholder="078x xxx xxxx"
                            style={{ width: '100%', border: !this.state.err ? '' : 'red 1px solid' }}
                            onChange={(e) => this.handleFieldChange(e, "username")}
                        >
                            رقم الهاتف
      </InputItem>
                        <InputItem
                            type="password"
                            placeholder="****"
                            style={{ width: '100%', border: !this.state.err ? '' : 'red 1px solid' }}
                            onChange={(e) => this.handleFieldChange(e, "password")}
                        >
                            {'كلمة المرور'}
                            {/* {this.props.logout.isLogout?this.props.logoutMethod(false):''} */}
                        </InputItem>
                        <WhiteSpace size='xl' />

                        <Button
                            type="primary"
                            style={{ width: "80%", marginRight: "4px", margin: 'auto', boxShadow: '5px 4px 20px 2px grey' }}
                            onClick={() => this.props.singinWithServer(this.state.username, this.state.password)}

                        >
                            تسجيل دخول
      </Button>
                        <WhiteSpace size='xl' />
                        <WhiteSpace size='xl' />

                    </List>
                </WingBlank>
                :
                <View style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                    <TabBar
                        unselectedTintColor="#949494"
                        tintColor="#33A3F4"
                        barTintColor="white"
                        hidden={this.state.hidden}
                    >
                        <TabBar.Item
                            title="المنتجات"
                            key="products"
                            icon={
                                <AmazonOutlined style={{

                                    fontSize: '22px'
                                }}
                                />
                            }
                            selectedIcon={
                                <AmazonOutlined style={{

                                    fontSize: '22px'
                                }} />

                            }
                            selected={this.state.selectedTab === 'blueTab'}
                            // badge={1}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'blueTab',
                                });
                            }}
                            data-seed="logId"
                        >
                            <Products />
                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                                <ShoppingCartOutlined style={{ fontSize: '22px' }}
                                />
                            }
                            selectedIcon={
                                <ShoppingCartOutlined style={{ fontSize: '22px' }}
                                />
                            }
                            title="سلاتي"
                            key="baskets"
                            // badge={'new'}
                            selected={this.state.selectedTab === 'redTab'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'redTab',
                                });
                            }}
                            data-seed="logId1"
                        >
                            <Baskets />
                        </TabBar.Item>

                        <TabBar.Item
                            icon={<CommentOutlined style={{ fontSize: '22px' }} />}
                            selectedIcon={<CommentOutlined style={{ fontSize: '22px' }} />}
                            title="محادثاتي"
                            key="messages"
                            selected={this.state.selectedTab === 'pinkTab'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'pinkTab',
                                });
                            }}
                        >
                            <Messages />
                        </TabBar.Item>
                        <TabBar.Item
                            icon={

                                <FaBoxes style={{ fontSize: '22px' }} />

                            }
                            selectedIcon={
                                <FaBoxes style={{ fontSize: '22px' }} />
                            }
                            title="طلبياتي"
                            key="orders"
                            // dot
                            selected={this.state.selectedTab === 'greenTab'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'greenTab',
                                });
                            }}
                        >

                            <Orders />
                        </TabBar.Item>
                        <TabBar.Item
                            icon={<MenuOutlined style={{ fontSize: '22px' }} />}
                            selectedIcon={<MenuOutlined style={{ fontSize: '22px' }} />}
                            title="مزيد"
                            key="more"
                            selected={this.state.selectedTab === 'yellowTab'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'yellowTab',
                                });
                            }}
                        >
                            <Settings />
                        </TabBar.Item>
                    </TabBar>
                </View>
        );
    }

}

function mapStateToProps(state) {
    return {
        user: state.user,
        logout: state.logout,
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            singinWithServer: dispatch(singinWithServer()),
            // eslint-disable-next-line
            singinWithServer: singinWithServer,
            logoutMethod: logoutMethod,
        }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Menu);