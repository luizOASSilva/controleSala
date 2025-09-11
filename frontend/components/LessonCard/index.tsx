import React from 'react'
import { Text } from 'react-native'
import { Box, CardContainer, ProfessorText, SemesterText, TimeText } from './LessonCard.styles'
import { LessonCardProps } from './LessonCard.types'

const LessonCard = ({ semester, subject, professor, location, startTime, endTime }: LessonCardProps) => (
  <CardContainer>
    <SemesterText>{semester}</SemesterText>
    <ProfessorText>{professor}</ProfessorText>
    <Box>
      <TimeText>{startTime} - {endTime}</TimeText>
      <Text>{location}</Text>
      <Text>{subject}</Text>
    </Box>
  </CardContainer>
)

export default LessonCard
