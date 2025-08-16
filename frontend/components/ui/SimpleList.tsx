import { ImageStyle } from 'expo-image'
import { FlatList, View, Text, ViewStyle, Image } from 'react-native'
import PaginationDot from 'react-native-animated-pagination-dot'

interface ListProps {
  arrayList: string[]
  imgUri: string
  containerStyle?: ViewStyle
  itemStyle: ViewStyle
  imgStyle?: ImageStyle
}

const SimpleList = ({
  arrayList,
  imgUri,
  containerStyle,
  imgStyle,
  itemStyle,
}: ListProps) => {
  return (
    <FlatList
      data={arrayList}
      renderItem={({ item }) => (
        <View style={containerStyle}>
          <Image style={imgStyle} source={{ uri: imgUri }} />
          <View style={itemStyle}>
            <Text>{item}</Text>
            <PaginationDot activeDotColor={'green'} curPage={0} maxPage={1} />
          </View>
        </View>
      )}
    />
  )
}

export default SimpleList
