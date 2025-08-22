import { View, Text, StyleSheet } from 'react-native'

interface SubjectCardProps {
  semester: string
  subject: string
  professor: string
  classroom: string
}

export default function SubjectCard({
  semester,
  subject,
  professor,
  classroom,
}: SubjectCardProps) {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.semesterText}>{semester}</Text>
      <Text style={styles.professorText}>{professor}</Text>
      <View style={styles.box}>
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
})
