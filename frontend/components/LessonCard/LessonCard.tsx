import { StyleSheet, Text, View } from 'react-native'

interface LessonCardProps {
  semester: string
  subject: string
  professor: string
  classroom: string
  startTime: string
  endTime: string
}

export default function LessonCard({
  semester,
  subject,
  professor,
  classroom,
  startTime,
  endTime,
}: LessonCardProps) {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.semesterText}>{semester}</Text>
      <Text style={styles.professorText}>{professor}</Text>
      <View style={styles.box}>
        <Text style={styles.timeText}>
          {endTime} - {startTime}
        </Text>
        <Text>{classroom}</Text>
        <Text>{subject}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    shadowColor: '#0002',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowOpacity: 1,
    elevation: 2,
    padding: 20,
    width: 175,
  },
  box: {
    gap: 5,
  },
  semesterText: {
    fontWeight: '500',
    textAlign: 'center',
  },
  professorText: {
    textAlign: 'center',
    fontWeight: '700',
    color: 'red',
    marginBottom: 10,
  },
  timeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
  },
})
