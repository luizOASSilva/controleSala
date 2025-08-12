import { Tabs } from 'expo-router';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function tabLayout() {
  return (
    <Tabs
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'red',
        }}
    >
        <Tabs.Screen 
            name='(home)' 
            options={{
                title: 'Home',
                tabBarIcon: ({color}) => <FontAwesome size={28} name="home" color={color}/>
            }}
        />
        <Tabs.Screen 
            name='(about)'
            options={{
                title: 'About',
            }}
        />
    </Tabs>
  )
}
