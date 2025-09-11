import React from 'react'
import PaginationDot from 'react-native-animated-pagination-dot'
import List from '../ui/List'
import {
  ProfessorContainer,
  ProfessorContent,
  ProfessorDotWrapper,
  ProfessorName,
  ProfessorRooms
} from './ProfessorList.styles'
import { ProfessorListProps } from './ProfessorList.types'

const ProfessorList = ({ professors }: ProfessorListProps) => {
  return (
    <List
      data={professors}
      keyExtractor={(item) => item.professorId.toString()}
      renderItem={({ item }) => (
        <ProfessorContainer>
          <ProfessorContent>
            <ProfessorName numberOfLines={1}>{item.professorName}</ProfessorName>
            <ProfessorRooms numberOfLines={1}>{item.rooms?.join(', ')}</ProfessorRooms>
            <ProfessorDotWrapper>
              <PaginationDot activeDotColor={'green'} curPage={0} maxPage={1} />
            </ProfessorDotWrapper>
          </ProfessorContent>
        </ProfessorContainer>
      )}
    />
  )
}

export default ProfessorList
