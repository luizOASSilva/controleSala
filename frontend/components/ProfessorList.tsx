import { View, Text, Image, StyleSheet } from 'react-native'
import SimpleList from './ui/SimpleList'
import PaginationDot from 'react-native-animated-pagination-dot'

interface Professor {
  nome: string
}

interface Props {
  professors: Professor[]
}

const ProfessorList = ({ professors }: Props) => {
  return (
    <SimpleList
      data={professors}
      keyExtractor={(item) => item.nome}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <View style={styles.content}>
            <Text>{item.nome}</Text>
            <PaginationDot
              activeDotColor={'green'}
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
