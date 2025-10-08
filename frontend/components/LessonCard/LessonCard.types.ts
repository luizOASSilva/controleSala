import { Lesson } from "@/types"

export type LessonCardProps = Pick<
  Lesson,
  'semester' | 'subject' | 'professor' | 'location' | 'startTime' | 'endTime'
>
