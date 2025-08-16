import { StyleSheet, View } from 'react-native'
import SimpleList from './ui/SimpleList'

interface ProfessorListProps {
  professors: professor[]
}

const ProfessorList = ({
  Professors
}: ProfessorListProps) => {
  return (
    <View>
      <SimpleList
        imgUri={Professors}
        arrayList={professorArray}
        containerStyle={styles.listContainerStyle}
        imgStyle={styles.icon}
        itemStyle={styles.item}
      />
    </View>
  )
}

export default ProfessorList;

const styles = StyleSheet.create({
  listContainerStyle: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
    borderRadius: 1,
  },
  icon: {
    height: 50,
    width: 50,
  },
  item: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
