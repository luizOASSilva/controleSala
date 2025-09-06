import api from '../api'
import { ProfessorProps } from '@/types'

export const fetchAllProfessores = async (): Promise<ProfessorProps[]> => {
  const { data } = await api.get('/professores')
  return data
}
