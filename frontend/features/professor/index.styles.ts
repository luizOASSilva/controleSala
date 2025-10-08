import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #fff;
`

export const ToggleContainer = styled.TouchableOpacity`
  width: 60px;
  height: 30px;
  border-radius: 15px;
  background-color: #ddd;
  margin-bottom: 20px;
  justify-content: center;
`

export const ToggleTrack = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-color: #eee;
`

interface ToggleThumbProps {
  isActive: boolean
}

export const ToggleThumb = styled.View<ToggleThumbProps>`
  width: 28px;
  height: 28px;
  border-radius: 14px;
  background-color: ${({ isActive }) => (isActive ? 'green' : 'white')};
  position: absolute;
  top: 1px;
  left: ${({ isActive }) => (isActive ? '30px' : '1px')};
`
