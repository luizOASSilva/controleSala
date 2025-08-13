import React from 'react'
import { Stack } from 'expo-router'

export default function HomeLayout() {
  return (
    <Stack 
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
        },
        headerShown: true,
      }}
    >
      <Stack.Screen 
        name='index'
        options={{
          headerTitle: 'Controle de sala',
        }}
      />
      <Stack.Screen 
        name='subjectDetails'
        options={{
          headerTitle: 'Details',
        }}
      />
    </Stack>
  )
}
