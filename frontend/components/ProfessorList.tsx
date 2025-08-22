import { View, Text, Image, StyleSheet } from 'react-native'
import SimpleList from './ui/SimpleList'
import PaginationDot from 'react-native-animated-pagination-dot'

interface Professor {
  name: string
  image: string
  isActive: boolean
}

interface Props {
  professors: Professor[]
}

const ProfessorList = ({ professors }: Props) => {
  return (
    <SimpleList
      data={professors}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.content}>
            <Text>{item.name}</Text>
            <PaginationDot
              activeDotColor={item.isActive ? 'green' : 'red'}
              curPage={0}
              maxPage={1}
            />
          </View>
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
    borderRadius: 1,
    alignItems: 'center',
  },
  image: {
    height: 50,
    width: 50,
  },
  content: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

export default ProfessorList
