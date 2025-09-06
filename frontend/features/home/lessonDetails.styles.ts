import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const LessonDetailsScreen = styled(SafeAreaView).attrs<SafeAreaViewProps>({
  edges: ['bottom'], 
})`
  flex: 1;
  background-color: #fff;
`;

export const LessonCoverImage = styled.Image`
  width: 100%;
  height: 325px;
  transform: translateY(-90px);
`;

export const LessonInfoContainer = styled.View`
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  background-color: white;
  position: absolute;
  padding: 25px;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 75%;
`;

export const EditLessonButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: rgba(255, 0, 0, 0.85);
  border-radius: 100px;
  right: 10px;
  bottom: 10px;
  position: absolute;
  align-items: center;
  justify-content: center;
`;
