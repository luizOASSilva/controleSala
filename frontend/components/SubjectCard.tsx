import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface SubjectCardProps {
    semester: string;
    subject: string;
    professor: string;
    classroom: string;
}

export default function SubjectCard({semester, subject, professor, classroom}: SubjectCardProps) {

  return (
    <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>{semester}</Text>
        <View>
            <Text>{subject}</Text>
            <Text>{professor}</Text>
            <Text>{classroom}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        shadowColor: '#000',
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowOpacity: 1,
        padding: 10,
        margin: 5,
        width: 125
    },
    box: {

    },
   
});
