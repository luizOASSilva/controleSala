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

export interface Block {
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

export interface ProfessorProps {
  id: number
  nome: string
  status?: string
}

export interface ChildrenProps {
  children: React.ReactNode
}
