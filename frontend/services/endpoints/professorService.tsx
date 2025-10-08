import { ProfessorScheduleItem } from '@/types'
import dateUtils from '@/utils/dateUtils'
import api from '../api'

const dayOfWeek = Number(dateUtils.getDayOfWeekNumber())
const shift = String(dateUtils.getShiftByHours())

export const fetchProfessorsByWeekdayAndShift = async (): Promise<ProfessorScheduleItem[]> => {
  const { data } = await api.get<ProfessorScheduleItem[]>(
    `/api/professors?dayOfWeek=2&shift=noturno`
  )
  return data
}
