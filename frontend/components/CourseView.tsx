import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CourseViewProps {
  course: string;
  children: React.ReactNode;
}

export default function CourseView({course, children} : CourseViewProps) {
  return (
    <View style={styles.container}>
      <Text>{course}</Text>
      <View style={styles.rowDirection}>
        {children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 2,
  }, 

  rowDirection: {
    flexDirection: 'row'
  }
});
