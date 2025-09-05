import React from 'react'
import { ScrollView, View } from 'react-native'
import { CourseViewProps } from './CourseView.types'

const CourseView = ({ children }: CourseViewProps) => (
  <View style={{ padding: 5 }}>
    <ScrollView horizontal contentContainerStyle={{ gap: 5, padding: 10 }}>
      {children}
    </ScrollView>
  </View>
)

export default CourseView
