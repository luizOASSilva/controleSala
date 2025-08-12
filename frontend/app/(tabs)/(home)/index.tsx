import { Text, StyleSheet, ScrollView} from "react-native";
import CourseView from "@/components/CourseView";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import SubjectCard from "@/components/SubjectCard";

export default function Index() {

  const subjectList = [
    'Gestão financeira', 
    'Gestão da Tecnologia da Informação', 
    'Logística', 
    'Análise e Desenvolvimento de Sistemas(manhã)', 
    'Análise e Desenvolvimento de Sistemas(noite)',
    'Análise e Desenvolvimento de Sistemas(noite)',
    'Análise e Desenvolvimento de Sistemas(noite)',
    'Análise e Desenvolvimento de Sistemas(noite)',
    'Análise e Desenvolvimento de Sistemas(noite)',
  ];

  return (
    <SafeAreaView
      style={{
      }}
    >
      <ScrollView>
        {
          subjectList.map((subject, index) => (
            <CourseView course={subject} key={index}>
              <SubjectCard semester="teste" classroom="teste" professor="teste" subject="teste"/>
              <SubjectCard semester="teste" classroom="teste" professor="teste" subject="teste"/>

            </CourseView>
          ))
        }
      </ScrollView>
    </SafeAreaView>
  );
}

