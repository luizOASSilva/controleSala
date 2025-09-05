import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CourseView from '@/components/CourseView';
import LessonCard from '@/components/LessonCard';
import { fetchAllLessons } from '@/services/endpoints/lessonService';
import dayjs from 'dayjs';

interface Lesson {
  id: number;
  course: string;
  semester: string;
  subject: string;
  professor: string;
  location: string;
  floor: number;
  dayOfWeek: number;
  shift: string;
  startTime: string;
  endTime: string;
  year: number;
}

interface Block {
  id: number;
  startTime: string;
  endTime: string;
  label: string;
}

type GroupedLessons = {
  [course: string]: {
    [blockId: number]: Lesson[];
  };
};

const blocks: Block[] = [
  { id: 1, startTime: '19:00:00', endTime: '20:40:00', label: '1st Shift' },
  { id: 2, startTime: '20:50:00', endTime: '22:30:00', label: '2nd Shift' },
];

const Index: React.FC = () => {
  const [groupedLessons, setGroupedLessons] = useState<GroupedLessons>({});

  useEffect(() => {
    const loadLessons = async () => {
      try {
        const weekday = dayjs().day();

        const shift = 'Noite';

        const lessons: Lesson[] = await fetchAllLessons();

        const grouping: GroupedLessons = {};

        for (const lesson of lessons) {
          const block = blocks.find(
            (b) => b.startTime === lesson.startTime && b.endTime === lesson.endTime
          );
          if (!block) continue;

          if (!grouping[lesson.course]) grouping[lesson.course] = {};
          if (!grouping[lesson.course][block.id]) grouping[lesson.course][block.id] = [];

          grouping[lesson.course][block.id].push(lesson);
        }

        setGroupedLessons(grouping);
      } catch (error) {
        console.error('Error loading lessons:', error);
      }
    };

    loadLessons();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {Object.keys(groupedLessons).map((course) => (
          <View key={course} style={styles.courseContainer}>
            <Text style={styles.courseTitle}>{course}</Text>

            {blocks.map((block) => {
              const lessonsInBlock = groupedLessons[course][block.id];
              if (!lessonsInBlock || lessonsInBlock.length === 0) return null;

              return (
                <View key={block.id} style={styles.blockContainer}>
                  <Text style={styles.blockLabel}>{block.label}</Text>
                  <CourseView>
                    {lessonsInBlock.map((lesson) => (
                      <Link key={lesson.id} href={{ pathname: '/subjectDetails' }}>
                        <LessonCard
                          semester={lesson.semester}
                          professor={lesson.professor}
                          subject={lesson.subject}
                          classroom={lesson.location}
                          startTime={lesson.startTime}
                          endTime={lesson.endTime}
                        />
                      </Link>
                    ))}
                  </CourseView>
                </View>
              );
            })}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  courseContainer: {
    marginBottom: 20,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 10,
  },
  blockContainer: {
    marginTop: 10,
  },
  blockLabel: {
    color: '#555',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 10,
  },
});
