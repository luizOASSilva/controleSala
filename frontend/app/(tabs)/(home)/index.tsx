import { ScrollView } from 'react-native'
import CourseView from '@/components/CourseView'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import SubjectCard from '@/components/SubjectCard'

const index = () => {

  const courses = [
    {
      name: 'Análise e Desenvolvimento de Sistemas(manhã)',
      semester: [ 'semestre 1', 'semestre 2', 'semestre 3', 'semestre 4', 'semestre 5', 'semestre 6',]
    },
    {
      name: 'Gestão financeira',
      semester: [ 'semestre 1', 'semestre 2', 'semestre 3', 'semestre 4', 'semestre 5', 'semestre 6',]
    }
  ]

  const renderSemester = (semester: string[]) => {
    return semester.map((data, index) => (
      <Link
        href={{
          pathname: '/subjectDetails',
          params: {
            data,
          },
        }}
        key={index}
      >
        <SubjectCard
          semester={data}
          classroom=""
          professor=""
          subject=""
        />
      </Link>
    ))
  }

  return (
    <SafeAreaView>
      <ScrollView>
        {courses.map((course, index) => (
          <CourseView course={course.name} key={index}>
            {renderSemester( course.semester )}
          </CourseView>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default index
