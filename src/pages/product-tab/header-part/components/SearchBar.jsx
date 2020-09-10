import React from 'react';
import { SearchBar } from 'antd-mobile';
import './../../style.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {searchForInfoMethod} from './../../store/actions/index'

class Search extends React.Component {

 
  onSubmit= (value) => {
    this.props.searchForInfoMethod(value);
  };
  clear = () => {
    this.props.searchForInfoMethod('');
  };
  handleClick = () => {
    this.manualFocusInst.focus();
  }
  render() {
    return (
      <SearchBar
        placeholder="بحث"
        onSubmit={this.onSubmit}
        cancelText={'الغاء'}        
      />
    );
  }
}

function mapStateToProps(state) {
  return {
      searchForInfo: state.searchForInfo,
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
      {
        searchForInfoMethod: searchForInfoMethod,
      }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Search);
