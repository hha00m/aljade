import React from 'react';
import { List } from 'antd-mobile';
import { FaRegUserCircle } from 'react-icons/fa';
import { GrNotification } from 'react-icons/gr';
import { AiOutlineLogout } from 'react-icons/ai';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { activeModelMethod, } from '../../models/store/actions/index';
import { singinWithServer } from './../../../user/store-singin/actions/actions'
import { PieChartOutlined } from '@ant-design/icons'
import '../style.css'
const Item = List.Item;

class BodyMoreList extends React.Component {
    state = {
        disabled: false,
    }
    render() {
        return (<div >

            <List style={{ direction: 'rtl' }}
                renderHeader={() => 'خيارات الحساب'}>
                <Item
                    thumb={<FaRegUserCircle style={{ fontSize: '20px' }} />}
                    arrow="down"
                    onClick={() => this.props.activeModelMethod(this.props.modelList[10])
                    }
                    style={{ direction: 'rtl' }}
                >حسابي</Item>
                <Item
                    thumb={<PieChartOutlined style={{ fontSize: '22px' }} />}
                    onClick={() => { }}
                    arrow="down"
                    style={{ direction: 'rtl' }}
                >
                    محفظتي
                     </Item>
            </List>

            <List style={{ direction: 'rtl' }} renderHeader={() => 'مزيد'} className="my-list">
                <Item
                    thumb={<GrNotification style={{ fontSize: '20px' }} />}
                    arrow="down"
                    onClick={() => { }}
                    style={{ direction: 'rtl' }}>
                    <select defaultValue="1">
                        <option value="1">تفعيل الاشعارات</option>
                        <option value="2" >الغاء تفعيل الاشعارات</option>
                    </select>
                </Item>
            </List>

            <List style={{ direction: 'rtl' }}
                renderHeader={() => 'تسجيل خروج من البرنامج'}>

                <Item
                    thumb={<AiOutlineLogout style={{ fontSize: '20px' }} />}
                    onClick={() => this.props.singinWithServer('','',true)}
                    style={{ direction: 'rtl' }}
                >
                    تسجيل خروج
                     </Item>
            </List>

        </div>);
    }
}

function mapStateToProps(state) {
    return {

        modelList: state.modelList,
        ActiveModel: state.ActiveModel,
        user: state.user.user,
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            activeModelMethod: activeModelMethod,
            singinWithServer: singinWithServer
        }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(BodyMoreList);

