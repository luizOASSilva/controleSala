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
        name="lessonDetails"
        options={{
          headerTitle: 'Detalhes',
        }}
      />
      <Stack.Screen
        name="lessonEdit"
        options={{
          headerTitle: 'Editar matéria',
        }}
      />
    </Stack>
  )
}

export default HomeLayout
