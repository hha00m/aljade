import React from "react";
import Models from '../../models/Models';
import ViewType from '../body-part/components/ViewType';
import { View } from "antd-mobile";


const Body = (props) => {
    return (
        <View>
            <Models />
            <ViewType />
        </View>
    )
};


export default Body;
