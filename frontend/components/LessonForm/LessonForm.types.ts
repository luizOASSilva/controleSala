import { Lesson } from '@/types'

export type LessonFormProps = Pick<
  Lesson,
  'professor' | 'subject' | 'classroom'
>
