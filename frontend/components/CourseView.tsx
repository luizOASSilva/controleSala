import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

interface CourseViewProps {
  courseName: string;
  children: React.ReactNode;
}

export default function CourseView({courseName, children}:  CourseViewProps) {

  return (
    <View style={{ padding: 10 }}>
      <Text style={styles.viewTitle}>
        {courseName}
      </Text>
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

const styles = StyleSheet.create({
  viewTitle: {
    fontSize: 14,
    fontWeight: '500'
  }
});
