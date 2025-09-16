import LessonCard from '@/components/LessonCard';
import LessonForm from '@/components/LessonForm';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

const lessonEdit = () => {
  const [professor, setProfessor] = useState('');
  const [subject, setSubject] = useState('');

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', marginBottom: 25 }}>
        <LessonCard
          location='Laboratório 2'
          professor={professor || 'Luciano'}
          semester='Segundo semestre'
          subject={subject || 'Linguagem de programação'}
          startTime='19:00'
          endTime='20:40'
        />
      </View>
      <LessonForm onProfessorChange={setProfessor} onSubjectChange={setSubject}/>
    </View>
  )
}

export default lessonEdit

const styles = StyleSheet.create({
  container: {
    padding: 25,
    gap: 15,
    flex: 1,
  },
})

