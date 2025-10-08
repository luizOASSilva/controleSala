import LessonCard from '@/components/LessonCard';
import { LessonCardProps } from '@/components/LessonCard/LessonCard.types';
import LessonForm from '@/components/LessonForm';
import { fetchLessonById } from '@/services/endpoints/lessonService';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

const LessonEdit = () => {
  const [lesson, setLesson] = useState<LessonCardProps | null>(null);
  const [professor, setProfessor] = useState('');
  const [subject, setSubject] = useState('');

  const { id } = useLocalSearchParams();

  useEffect(() => {
    const loadLessonById = async () => {
      try {
        const data = await fetchLessonById(id?.toString() || '');

        console.log(data);

        setLesson(data);
      } catch (e) {
        console.log(e);
      }
    };
    loadLessonById();
  }, [id]);

  if (!lesson) {
    return <ActivityIndicator style={{ flex: 1 }} size="large" />;
  }

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', marginBottom: 25 }}>
        <LessonCard
          location={lesson.location}
          professor={professor || lesson.professor}
          semester={lesson.semester}
          subject={subject || lesson.subject}
          startTime={lesson.startTime}
          endTime={lesson.endTime}
        />
      </View>
      <LessonForm
        onProfessorChange={setProfessor}
        onSubjectChange={setSubject}
      />
    </View>
  );
};

export default LessonEdit;

const styles = StyleSheet.create({
  container: {
    padding: 25,
    gap: 15,
    flex: 1,
  },
});
