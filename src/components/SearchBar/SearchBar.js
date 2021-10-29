import React from 'react';
import {View, TextInput} from 'react-native';
import style from './SearchBar.styles';

const SearchBar = props => {
  return (
    <View style={style.container}>
      <TextInput placeholder="Search" onChangeText={props.onSearch} />
    </View>
  );
};

export default SearchBar;
