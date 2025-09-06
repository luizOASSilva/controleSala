  import ProfessorList from '@/components/ProfessorList'
  import { SafeAreaView } from 'react-native-safe-area-context'

  import { fetchAllProfessores } from '@/services/endpoints/professorService'
  import { ProfessorProps } from '@/types'
  import { useEffect, useState } from 'react'

  const index = () => {
    const [professores, setProfessores] = useState<ProfessorProps[]>([])

    useEffect(() => {
      const loadProfessores = async () => {
        try {
          const professores = await fetchAllProfessores();
          setProfessores(professores);
        } catch (e) {
          console.log(e);
        }
      }
      loadProfessores();
    }, [])

    return (
      <SafeAreaView>
        <ProfessorList professors={professores} />
      </SafeAreaView>
    )
  }

  export default index
