import ProfessorList from '@/components/ProfessorList'
import { SafeAreaView } from 'react-native-safe-area-context'

import { fetchProfessorsByWeekdayAndShift } from '@/services/endpoints/professorService'
import { ProfessorProps } from '@/types'
import { useEffect, useState } from 'react'
import { View } from 'react-native'

const Index = () => {
  const [professors, setProfessors] = useState<ProfessorProps[]>([])

  useEffect(() => {
    const loadProfessores = async () => {
      try {
        const fetched = await fetchProfessorsByWeekdayAndShift()

        const grouped: Record<string, ProfessorProps & { rooms: string[] }> = {}

        for (const professor of fetched) {
          if (grouped[professor.professorId]) {
            grouped[professor.professorId].rooms.push(professor.roomName)
          } else {
            grouped[professor.professorId] = {
              ...professor,
              rooms: [professor.roomName]
            }
          }
        }

        const groupedArray = Object.values(grouped)
        setProfessors(groupedArray)
      } catch (e) {
        console.log(e)
      }
    }

    loadProfessores()
  }, [])

  return (
    <View>
      <ProfessorList professors={professors} />
    </View>
  )
}

export default Index
