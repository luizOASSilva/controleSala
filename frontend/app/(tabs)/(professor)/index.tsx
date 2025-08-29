import ProfessorList from '@/components/ProfessorList'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
  const professors = [
    {
      name: 'Márcio',
      isActive: true,
    },
    {
      name: 'Clayton',
      isActive: true,
    },
    {
      name: 'Eleandro',
      isActive: false,
    },
    {
      name: 'Giancarlo',
      isActive: false,
    },
    {
      name: 'Roberto',
      isActive: false,
    },
  ]

  return (
    <SafeAreaView>
      <ProfessorList professors={professors} />
    </SafeAreaView>
  )
}

export default index
