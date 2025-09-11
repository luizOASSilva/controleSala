import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';

import CourseView from '@/components/CourseView';
import LessonCard from '@/components/LessonCard';
import { fetchLessonsByWeekdayAndShift } from '@/services/endpoints/lessonService';
import { BlockProps, GroupedLessonsProps, LessonProps } from '@/types';

import {
  CourseName,
  CourseSection,
  LessonsScreenContainer,
  LessonsScrollView,
  TimeBlockLabel,
  TimeBlockSection,
} from '../../../features/home/index.styles';

const classTimeBlocks: BlockProps[] = [
  { id: 1, startTime: '19:00:00', endTime: '20:40:00', label: 'Primeiro horário' },
  { id: 2, startTime: '20:50:00', endTime: '22:30:00', label: 'Segundo horário' },
];

const Index = () => {
  const [lessonsByCourseAndBlock, setLessonsByCourseAndBlock] = useState<GroupedLessonsProps>({});

  useEffect(() => {
    const loadLessons = async () => {
      const lessons: LessonProps[] = await fetchLessonsByWeekdayAndShift();
      const grouping: GroupedLessonsProps = {};

      for (const lesson of lessons) {
        const timeBlock = classTimeBlocks.find(
          b => b.startTime === lesson.startTime && b.endTime === lesson.endTime
        );
        if (!timeBlock) continue;

        if (!grouping[lesson.course]) grouping[lesson.course] = {};
        if (!grouping[lesson.course][timeBlock.id]) grouping[lesson.course][timeBlock.id] = [];

        grouping[lesson.course][timeBlock.id].push(lesson);
      }

      setLessonsByCourseAndBlock(grouping);
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
              const lessonsInTimeBlock = lessonsByCourseAndBlock[courseName][timeBlock.id];
              if (!lessonsInTimeBlock || lessonsInTimeBlock.length === 0) return null;

              return (
                <TimeBlockSection key={timeBlock.id}>
                  <TimeBlockLabel>{timeBlock.label}</TimeBlockLabel>
                  <CourseView>
                    {lessonsInTimeBlock.map(lesson => (
                      <Link key={lesson.id} href={{ pathname: '/lessonDetails' }}>
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
