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
      <Text style={styles.cardTitle}>{semester}</Text>
      <View>
        <Text>{subject}</Text>
        <Text>{professor}</Text>
        <Text>{classroom}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    shadowColor: '#0002',
    backgroundColor: 'white',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    borderRadius: 10,
    shadowOpacity: 1,
    elevation: 2,
    padding: 20,
    width: 125,
  },
  box: {},
  cardTitle: {
    textAlign: 'center',
  },
})
