import { Stack } from 'expo-router';
import React from 'react';

export default function LayoutAbout() {
  return (
    <Stack 
        screenOptions={{
            headerShown: true,
            headerTitle: 'About'
        }}
    >
        <Stack.Screen name='index' />
    </Stack>
  )
}
