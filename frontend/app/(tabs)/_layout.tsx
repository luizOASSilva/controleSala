import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'

const tabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(professor)"
        options={{
          title: 'Professores',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="graduation-cap" color={color} />
          ),
        }}
      />
    </Tabs>
  )
}

export default tabLayout
