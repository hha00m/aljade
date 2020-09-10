import React from "react";
import { Picker, View, List, InputItem } from 'antd-mobile';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { activeTownMethod, activeCityMethod, fetchingCitiesMethod } from '../../../store/baskets/actions/index';
import './_style.css';



class CitiesModel extends React.Component {
    constructor() {
        super();
        this.state = {
            search: ''
        };
    }
    componentDidMount() {
        this.props.fetchingCitiesMethod(this.props.user.user.user.data.username, this.props.user.user.user.password)

    }

    onChangeCity = (v) => {
        let i = v[0] - 1;
        let val = this.props.cities[i];
        this.props.activeCityMethod(val.label, this.props.cities);
    }
    clear = () => {
        this.setState({ value: '' });
    };
    onChangeTown = (v) => {
        let val = this.props.activeCity.towns.filter((town) => town.value === v[0]);
        this.props.activeTownMethod(val[0]);
    }
    onFilter = (e) => {
        this.setState({ search: e.substr(0, 20) });
    }
    render() {
        let townsList = [];
        if (this.props.activeCity.towns) {
            townsList = (this.props.activeCity.towns).filter((oneTown) => {
                return oneTown.label.includes(this.state.search);
            })
        }
        return (
            <View>
                <List style={{ paddingRight: '8px', textAlign: 'left', direction: 'rtl', backgroundColor: 'white' }} className="picker-list">


                    <Picker
                        data={this.props.cities} cols={1}
                        extra={(this.props.activeCity.label ? this.props.activeCity.label : (this.props.selectedBasket.city_name ? this.props.selectedBasket.city_name : 'أختر محافظة'))}
                        className="forss"
                        onChange={v => this.onChangeCity(v)}
                    >
                        <List.Item extra={this.props.activeCity.label}
                            arrow="empty" >المحافظة</List.Item>
                    </Picker>
                    <Picker
                        title={
                            <InputItem
                                style={{ width: '150px' ,direction: "rtl", paddingLeft: "8px", paddingRight: "8px" }}

                                onChange={this.onFilter.bind(this)}
                                clear
                                type="text"
                                value={this.state.search}
                            />}
                        data={townsList}
                        extra={(this.props.activeTown.label ? this.props.activeTown.label : (this.props.selectedBasket.town_name ? this.props.selectedBasket.town_name : 'أختر منطقة'))}
                        onChange={v => this.onChangeTown(v)}
                        cols={1} className="forss">
                        <List.Item extra={this.props.activeTown} arrow='empty' >المدينة</List.Item>
                    </Picker>

                </List>
            </View>


        )
    }
};

function mapStateToProps(state) {
    return {
        cities: state.cities.cities,
        activeCity: state.activeCity,
        activeTown: state.activeTown,
        selectedBasket: state.selectedBasket,
        user: state.user,
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            activeCityMethod: activeCityMethod,
            activeTownMethod: activeTownMethod,
            fetchingCitiesMethod: fetchingCitiesMethod,
        }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CitiesModel);