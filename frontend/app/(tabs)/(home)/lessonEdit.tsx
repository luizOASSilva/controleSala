import LessonCard from '@/components/LessonCard'
import LessonForm from '@/components/LessonForm'
import { StyleSheet, View } from 'react-native'

const subjectEdit = () => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', marginBottom: 25 }}>
        <LessonCard
          location="Laboratório 2"
          professor="Luciano"
          semester="Segundo semestre"
          subject="Linguagem de programação"
          startTime="19:00"
          endTime="20:40"
        />
      </View>
      <LessonForm />
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
