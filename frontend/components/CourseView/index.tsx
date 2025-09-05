import { ScrollView, View } from 'react-native'

import { CourseViewProps } from './CourseView.types'

const CourseView = ({ children }: CourseViewProps) => {
  return (
    <View style={{ padding: 5 }}>
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
