import styled from 'styled-components/native';
import { ScrollView } from 'react-native';

export const LessonsScreenContainer = styled.SafeAreaView`
  flex: 1;
  padding: 10px;
`;

export const LessonsScrollView = styled(ScrollView)``;

export const CourseSection = styled.View`
  margin-bottom: 20px;
`;

export const CourseName = styled.Text`
  font-size: 16px;
  font-weight: 700;
  margin-left: 10px;
`;

export const TimeBlockSection = styled.View`
  margin-top: 10px;
`;

export const TimeBlockLabel = styled.Text`
  color: #555;
  font-size: 14px;
  font-weight: 600;
  margin-left: 10px;
`;
