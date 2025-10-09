import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';

import CourseView from '@/components/CourseView';
import LessonCard from '@/components/LessonCard';
import { fetchLessonsByWeekdayAndShift } from '@/services/endpoints/lessonService';
import { TimeBlock, GroupedLessons, Lesson } from '@/types';  

import {
  CourseName,
  CourseSection,
  LessonsScreenContainer,
  LessonsScrollView,
  TimeBlockLabel,
  TimeBlockSection,
} from '../../../features/home/index.styles';

const classTimeBlocks: TimeBlock[] = [
  { id: 1, startTime: '19:00:00', endTime: '20:40:00', label: 'Primeiro bloco' },
  { id: 2, startTime: '20:50:00', endTime: '22:30:00', label: 'Segundo bloco' },
];

const Index = () => {
  const [lessonsByCourseAndBlock, setLessonsByCourseAndBlock] = useState<GroupedLessons>({}); 

  useEffect(() => {
    const loadLessons = async () => {
      try {
        const lessons: Lesson[] = await fetchLessonsByWeekdayAndShift();
        const grouping: GroupedLessons = {}; 

        const timeBlockMap = classTimeBlocks.reduce((map, block) => {
          map[block.startTime + block.endTime] = block;
          return map;
        }, {} as Record<string, TimeBlock>);

        for (const lesson of lessons) {
          const timeBlockKey = lesson.startTime + lesson.endTime;
          const timeBlock = timeBlockMap[timeBlockKey];
          if (!timeBlock) continue;

          if (!grouping[lesson.course]) grouping[lesson.course] = {};
          if (!grouping[lesson.course][timeBlock.id]) grouping[lesson.course][timeBlock.id] = [];

          grouping[lesson.course][timeBlock.id].push(lesson);
        }

        setLessonsByCourseAndBlock(grouping);
      } catch (error) {
        console.error('Error loading lessons:', error);
      }
    };

    loadLessons();
  }, []);

  return (
    <LessonsScreenContainer>
      <LessonsScrollView>
        {Object.keys(lessonsByCourseAndBlock).map(courseName => (
          <CourseSection key={courseName}>
            <CourseName>{courseName}</CourseName>

            {classTimeBlocks.map(timeBlock => {
              const lessonsInTimeBlock = lessonsByCourseAndBlock[courseName]?.[timeBlock.id];
              if (!lessonsInTimeBlock || lessonsInTimeBlock.length === 0) return null;

              return (
                <TimeBlockSection key={timeBlock.id}>
                  <TimeBlockLabel>{timeBlock.label}</TimeBlockLabel>
                  <CourseView>
                    {lessonsInTimeBlock.map((lesson: Lesson) => (
                      <Link 
                        key={lesson.id} 
                        href={{ 
                          pathname: '/lessonEdit/[id]',
                          params: { id: lesson.id.toString() } 
                        }}
                      >
                        <LessonCard
                          semester={lesson.semester}
                          professor={lesson.professor}
                          subject={lesson.subject}
                          location={lesson.location}
                          startTime={lesson.startTime}
                          endTime={lesson.endTime}
                        />
                      </Link>
                    ))}
                  </CourseView>
                </TimeBlockSection>
              );
            })}
          </CourseSection>
        ))}
      </LessonsScrollView>
    </LessonsScreenContainer>
  );
};

export default Index;
