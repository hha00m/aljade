import React from 'react';
import { Menu, ActivityIndicator, NavBar, Popover, Icon } from 'antd-mobile';
import { FilterOutlined } from '@ant-design/icons'
const Item = Popover.Item;

const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;

const data = [
  {
    value: '1',
    label: 'Food',
    children: [
      {
        label: 'American Foods',
        value: '1',
        disabled: false,
      },
      {
        label: 'Chinese Food',
        value: '2',
      }, {
        label: 'Hot Pot',
        value: '3',
      }, {
        label: 'Buffet',
        value: '4',
      }, {
        label: 'Fast Food',
        value: '5',
      }, {
        label: 'Snack',
        value: '6',
      }, {
        label: 'Bread',
        value: '7',
      }, {
        label: 'Fruit',
        value: '8',
      }, {
        label: 'Noodle',
        value: '9',
      }, {
        label: 'Leisure Food',
        value: '10',
      }],
  }, {
    value: '2',
    label: 'Supermarket',
    children: [
      {
        label: 'All Supermarkets',
        value: '1',
      }, {
        label: 'Supermarket',
        value: '2',
        disabled: true,
      }, {
        label: 'C-Store',
        value: '3',
      }, {
        label: 'Personal Care',
        value: '4',
      }],
  },
  {
    value: '3',
    label: 'Extra',
    isLeaf: true,
    children: [
      {
        label: 'you can not see',
        value: '1',
      },
    ],
  },
];

class MultiMenuExample extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      initData: '',
      show: false,
    };
  }

  state = {
    visible: true,
    selected: '',
  };
  onSelect = (opt) => {
    // console.log(opt.props.value);
    this.setState({
      visible: false,
      selected: opt.props.value,
    });
  };
  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };





  onChange = (value) => {
    console.log(value);
  }
  onOk = (value) => {
    console.log(value);
    this.onCancel();
  }
  onCancel = () => {
    this.setState({ show: false });
  }
  handleClick = (e) => {
    e.preventDefault(); // Fix event propagation on Android
    this.setState({
      show: !this.state.show,
    });
    // mock for async data loading
    if (!this.state.initData) {
      setTimeout(() => {
        this.setState({
          initData: data,
        });
      }, 500);
    }
  }

  onMaskClick = () => {
    this.setState({
      show: false,
    });
  }

  render() {
    const { initData, show } = this.state;
    const menuEl = (
      <Menu
        className="multi-foo-menu"
        data={initData}
        value={['1', ['3', '4']]}
        onChange={this.onChange}
        onOk={this.onOk}
        onCancel={this.onCancel}
        height={document.documentElement.clientHeight * 0.6}
        multiSelect
      />
    );
    const loadingEl = (
      <div style={{ position: 'absolute', width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </div>
    );
    return (
      <div className={show ? 'multi-menu-active' : ''}>
        <div>
          <NavBar

            mode="light"
            icon={<FilterOutlined />}
            onLeftClick={this.handleClick}
            className="multi-top-nav-bar"


            rightContent={
              <Popover mask
                overlayClassName="fortest"
                overlayStyle={{ color: 'currentColor' }}
                visible={this.state.visible}
                overlay={[

                  (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>تسجيل خروج</Item>),
                  (<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                    <span style={{ marginRight: 5 }}>مساعدة</span>
                  </Item>),
                ]}
                align={{
                  overflow: { adjustY: 0, adjustX: 0 },
                  offset: [-10, 0],
                }}
                onVisibleChange={this.handleVisibleChange}
                onSelect={this.onSelect}
              >
                <div style={{
                  height: '100%',
                  padding: '0 15px',
                  marginRight: '-15px',
                  display: 'flex',
                  alignItems: 'center',
                }}
                >
                  <Icon type="ellipsis" />
                </div>
              </Popover>
            }
          >
            جميع المنتجات
          </NavBar>
        </div>
        {show ? initData ? menuEl : loadingEl : null}
        {show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
      </div>
    );
  }
}

export default MultiMenuExample;