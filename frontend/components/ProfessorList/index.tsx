import React from 'react'
import List from '../ui/List'
import {
  ProfessorContainer,
  ProfessorContent,
  ProfessorName,
  ProfessorRoom,
} from './ProfessorList.styles'
import { ProfessorListProps } from '@/types'

const ProfessorList = ({ professors }: ProfessorListProps) => {
  return (
    <List
      data={professors}
      keyExtractor={(item) => item.professorId.toString()}
      renderItem={({ item }) => {
        const schedule = item.schedules[0]
        return (
          <ProfessorContainer>
            <ProfessorContent>
              <ProfessorName numberOfLines={1}>{item.professorName}</ProfessorName>
              <ProfessorRoom numberOfLines={1}>{schedule.roomName}</ProfessorRoom>
            </ProfessorContent>
          </ProfessorContainer>
        )
      }}
    />
  )
}

export default ProfessorList
