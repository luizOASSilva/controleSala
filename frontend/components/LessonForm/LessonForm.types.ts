import { LessonProps } from '@/types'

export type LessonFormProps = Pick<
  LessonProps,
  'professor' | 'subject' | 'classroom'
>
