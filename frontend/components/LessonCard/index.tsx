import React from 'react';
import { Text, View } from 'react-native';
import { LessonCardProps } from './LessonCard.types';
import { 
  CardContainer, 
  Box, 
  SemesterText, 
  ProfessorText, 
  TimeText 
} from './LessonCard.styles'; 

const LessonCard = ({
  semester,
  subject,
  professor,
  classroom,
  startTime,
  endTime,
}: LessonCardProps) => {
  return (
    <CardContainer>
      <SemesterText>{semester}</SemesterText>
      <ProfessorText>{professor}</ProfessorText>
      <Box>
        <TimeText>
          {endTime} - {startTime}
        </TimeText>
        <Text>{classroom}</Text>
        <Text>{subject}</Text>
      </Box>
    </CardContainer>
  );
}
