import React from 'react'
import { FlatList, FlatListProps } from 'react-native'

type SimpleListProps<Item> = FlatListProps<Item>

function SimpleList<Item>(props: SimpleListProps<Item>) {
  return <FlatList {...props} />
}

export default SimpleList
