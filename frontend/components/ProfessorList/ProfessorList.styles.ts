import styled from 'styled-components/native';

export const ProfessorContainer = styled.View`
  flex-direction: row;
  background-color: white;
  padding: 10px;
  margin: 5px;
  border-radius: 1px;
  align-items: center;
`;

export const ProfessorContent = styled.View`
  flex: 1;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProfessorImage = styled.Image`
  height: 50px;
  width: 50px;
`;
