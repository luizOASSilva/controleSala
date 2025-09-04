import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import SubjectForm from '@/components/SubjectForm'
import { StyleSheet } from 'react-native'
import SubjectCard from '@/components/SubjectCard'

const subjectEdit = () => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', marginBottom: 25 }}>
        <SubjectCard
          classroom="Laboratório 2"
          professor="Luciano"
          semester="Segundo semestre"
          subject="Linguagem de programação"
        />
      </View>
      <SubjectForm />
    </View>
  )
}

export default subjectEdit

const styles = StyleSheet.create({
  container: {
    padding: 25,
    gap: 15,
    flex: 1,
  },
})
