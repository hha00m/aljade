import React from 'react';
import { SearchBar } from 'antd-mobile';

class Search extends React.Component {
  state = {
    value: 'بحث',
  };
 
  onSubmit= (value) => {
    this.setState({ value });
  };
  clear = () => {
    this.setState({ value: '' });
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

export default Search;