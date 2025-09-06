import { Lesson } from '@/types'

export type LessonCardProps = Pick<
  Lesson,
  'semester' | 'subject' | 'professor' | 'classroom' | 'startTime' | 'endTime'
>
