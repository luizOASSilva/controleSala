import { LessonProps } from "@/types"

export type LessonCardProps = Pick<
  LessonProps,
  'semester' | 'subject' | 'professor' | 'location' | 'startTime' | 'endTime'
>
