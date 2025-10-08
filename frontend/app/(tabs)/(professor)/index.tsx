import React, { useEffect, useState } from 'react'
import ProfessorList from '@/components/ProfessorList'
import { fetchProfessorsByWeekdayAndShift } from '@/services/endpoints/professorService'
import { Professor, ProfessorScheduleItem } from '@/types'
import { Container, ToggleContainer, ToggleTrack, ToggleThumb } from './../../../features/professor/index.styles'

const FIRST_BLOCK = '19:00:00'
const SECOND_BLOCK = '20:50:00'

const Index = () => {
  const [professors, setProfessors] = useState<Professor[]>([])
  const [isSecondSchedule, setIsSecondSchedule] = useState(false)

  useEffect(() => {
    const loadProfessors = async () => {
      try {
        const fetched: ProfessorScheduleItem[] = await fetchProfessorsByWeekdayAndShift();

        console.log(fetched);

        const grouped = Object.values(
          fetched.reduce((acc, item) => {
            const key = item.professorId

            if (!acc[key]) {
              acc[key] = {
                professorId: item.professorId,
                professorName: item.professorName,
                schedules: [],
              }
            }

            acc[key].schedules.push({
              roomName: item.roomName,
              floor: item.floor,
              startTime: item.startTime,
              endTime: item.endTime,
            })

            return acc
          }, {} as Record<number, Professor>)
        )

        setProfessors(grouped)
      } catch (error) {
        console.error(error)
      }
    }

    loadProfessors()
  }, [])

  const filtered = professors.filter(prof => {
    const first = prof.schedules.find(s => s.startTime === FIRST_BLOCK)
    const second = prof.schedules.find(s => s.startTime === SECOND_BLOCK)

    if (!isSecondSchedule) {
      return Boolean(first)
    } else {
      if (!second) return false

      return !first || (first.roomName !== second.roomName)
    }
  })

  const mapped = filtered.map(prof => {
    const first = prof.schedules.find(s => s.startTime === FIRST_BLOCK)
    const second = prof.schedules.find(s => s.startTime === SECOND_BLOCK)

    return {
      ...prof,
      schedules: [isSecondSchedule ? second! : first!], 
    }
  })

  return (
    <Container>
      <ToggleContainer onPress={() => setIsSecondSchedule(prev => !prev)}>
        <ToggleTrack />
        <ToggleThumb isActive={isSecondSchedule} />
      </ToggleContainer>

      <ProfessorList professors={mapped} />
    </Container>
  )
}

export default Index
