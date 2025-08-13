import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

export default function subjectDetails() {

  const local = useLocalSearchParams();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
    
      <TouchableOpacity style={styles.editButton}>
        <FontAwesome size={30} name='edit' color={'white'} style={{paddingLeft: 5}}/>
      </TouchableOpacity>
      <Text> {local.data} </Text>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  editButton: {
    width: 60, 
    height: 60,
    backgroundColor: 'red',
    borderRadius: 100,
    right: 10,
    bottom: 10,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
