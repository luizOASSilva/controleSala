import { LessonProps } from '@/types';

export type LessonFormProps = Pick<
  LessonProps,
  'professor' | 'subject' | 'classroom'
>

export type ProfessorFormProps = {
  onProfessorChange?: (value: string) => void
  onSubjectChange?: (value: string) => void
}
