import { ScrollView} from "react-native";
import CourseView from "@/components/CourseView";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import SubjectCard from "@/components/SubjectCard";

export default function Index() {

  const courseList = [
    'Análise e Desenvolvimento de Sistemas(manhã)', 
    'Gestão financeira', 
    'Gestão da Tecnologia da Informação', 
    'Logística', 
    'Análise e Desenvolvimento de Sistemas(noite)', 
  ];

  const semesterList = [
    'semestre 1', 
    'semestre 2',
    'semestre 3',
    'semestre 4',
    'semestre 5', 
    'semestre 6'
  ];

  function renderSemester({ semesterNumber } : { semesterNumber : string[] }) {
    return semesterNumber.map((data, index) => (
      <Link href={{
        pathname: '/subjectDetails',
        params: {
          data
        }
      }}>
        <SubjectCard 
          semester={data} 
          classroom='' 
          professor=''
          subject=''
          key={index}
        />
      </Link>
      )
    );
  }

  return (
    <SafeAreaView>
      <ScrollView>
        {
          courseList.map((data, index) => (
            <CourseView 
              courseName={data} 
              key={index}
            >
              {renderSemester({ semesterNumber: semesterList })}
            </CourseView>
          ))
        }
      </ScrollView>
    </SafeAreaView>
  );
}
