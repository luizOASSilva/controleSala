export interface LessonProps {
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

export interface BlockProps {
  id: number
  startTime: string
  endTime: string
  label: string
}

export type GroupedLessonsProps = {
  [course: string]: {
    [blockId: number]: LessonProps[]
  }
}

export interface ProfessorProps {
  professorId: number
  professorName: string
  dayOfWeek: number
  shift: string
  roomName: string
  floor: number | null
  rooms?: string[]
}


export interface ChildrenProps {
  children: React.ReactNode
}
