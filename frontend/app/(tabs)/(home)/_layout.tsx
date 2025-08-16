import { Stack } from 'expo-router'

const HomeLayout = () => {
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
        name="index"
        options={{
          headerTitle: 'Controle de sala',
        }}
      />
      <Stack.Screen
        name="subjectDetails"
        options={{
          headerTitle: 'Detalhes',
        }}
      />
      <Stack.Screen
        name='subjectEdit'
        options={{
          headerTitle: 'Editar matéria'
        }}
      />
    </Stack>
  )
}

export default HomeLayout
