import React from 'react'
import { Text } from 'react-native'
import { LessonCardProps } from './LessonCard.types'
import { CardContainer, Box, SemesterText, ProfessorText, TimeText } from './LessonCard.styles'

const LessonCard = ({ semester, subject, professor, classroom, startTime, endTime }: LessonCardProps) => (
  <CardContainer>
    <SemesterText>{semester}</SemesterText>
    <ProfessorText>{professor}</ProfessorText>
    <Box>
      <TimeText>{startTime} - {endTime}</TimeText>
      <Text>{classroom}</Text>
      <Text>{subject}</Text>
    </Box>
  </CardContainer>
)

export default LessonCard
