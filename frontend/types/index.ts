export interface Lesson {
  id: number
  course: string
  semester: string
  subject: string
  professor: string
  location: string
  floor: number
  dayOfWeek: number
  shift: string
  startTime: string
  endTime: string
  year: number
}

export interface TimeBlock {
  id: number
  startTime: string
  endTime: string
  label: string
}

export type GroupedLessons = {
  [course: string]: {
    [blockId: number]: Lesson[]
  }
}

export interface ProfessorScheduleItem {
  professorId: number
  professorName: string
  dayOfWeek: number
  shift: string
  roomName: string
  floor: number | null
  startTime: string
  endTime: string
}

export interface ProfessorSchedule {
  roomName: string
  floor: number | null
  startTime: string
  endTime: string
}

export interface Professor {
  professorId: number
  professorName: string
  schedules: ProfessorSchedule[]
}

export interface ProfessorListProps {
  professors: Professor[]
}

export interface ChildrenProps {
  children: React.ReactNode
}
