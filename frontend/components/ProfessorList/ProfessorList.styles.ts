import styled from 'styled-components/native'

export const ProfessorContainer = styled.View`
  background-color: white;
  padding: 14px;
  margin: 5px;
  border-radius: 4px;
`

export const ProfessorContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ProfessorName = styled.Text`
  flex: 2;
  font-size: 16px;
  font-weight: 400;
`

export const ProfessorRooms = styled.Text`
  flex: 2;
  font-size: 16px;
  color: #666;
  text-align: right;
`

export const ProfessorDotWrapper = styled.View`
  flex: 1;
  align-items: flex-end;
`
