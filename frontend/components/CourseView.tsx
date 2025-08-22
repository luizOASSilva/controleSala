import { View, Text, StyleSheet, ScrollView } from 'react-native'

interface CourseViewProps {
  course: string
  children: React.ReactNode
}

const CourseView = ({ course, children }: CourseViewProps) => {
  return (
    <View style={{ padding: 10 }}>
      <Text style={styles.viewTitle}>{course}</Text>
      <ScrollView
        horizontal={true}
        style={{ padding: 10 }}
        contentContainerStyle={{ gap: 5 }}
      >
        {children}
      </ScrollView>
    </View>
  )
}

export default CourseView

const styles = StyleSheet.create({
  viewTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
})
