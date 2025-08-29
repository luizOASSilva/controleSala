import { ScrollView } from 'react-native'
import CourseView from '@/components/CourseView'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import SubjectCard from '@/components/SubjectCard'

import { fetchAllAulas, Aula } from '@/services/aulaService'

const index = () => {
  const courses = [
    {
      name: 'Análise e Desenvolvimento de Sistemas(manhã)',
      semester: [
        'Primeiro semestre',
        'semestre 2',
        'semestre 3',
        'semestre 4',
        'semestre 5',
        'semestre 6',
      ],
      subject: ['Programação de Scripts', 'Algoritmos', 'Sistemas O'],
    },
    {
      name: 'Gestão financeira',
      semester: [
        'semestre 1',
        'semestre 2',
        'semestre 3',
        'semestre 4',
        'semestre 5',
        'semestre 6',
      ],
      subject: 'Negócios',
      classroom: 'sala 3',
    },
  ]

  const renderSemester = (semester: string[]) => {
    return semester.map((data, index) => (
      <Link
        key={index}
        href={{
          pathname: '/subjectDetails',
          params: { data },
        }}
      >
        <SubjectCard semester={data} professor="" classroom="" subject="" />
      </Link>
    ))
  }

  (async () => {
    const aulas = await fetchAllAulas();
    console.log('Aulas recebidas', aulas);
  })();

  return (
    <SafeAreaView>
      <ScrollView>
        {courses.map((course, index) => (
          <CourseView course={course.name} key={index}>
            {renderSemester(course.semester)}
          </CourseView>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default index
