import React from 'react';
import { FlatList } from 'react-native';
import { ListProps } from './List.types';

function List<Item>(props: ListProps<Item>) {
  return <FlatList {...props} />;
}

export default List;
