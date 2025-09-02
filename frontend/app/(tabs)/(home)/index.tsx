import { ScrollView, View, Text } from 'react-native'
import CourseView from '@/components/CourseView'
import { SafeAreaView } from 'react-native-safe-area-context'
import SubjectCard from '@/components/SubjectCard'

import { fetchAllAulas, AulaProps } from '@/services/endpoints/aulaService'
import { useEffect, useState } from 'react'
import { Link } from 'expo-router'

const Index = () => {
  const [aulas, setAulas] = useState<AulaProps[]>([])

  useEffect(() => {
    const loadAulas = async () => {
      try {
        const data = await fetchAllAulas()
        setAulas(data)
      } catch (e: any) {
        console.error('Erro ao carregar aulas:', e)
      }
    }
    loadAulas()
  }, [])

  const cursos = Array.from(new Set(aulas.map((aula) => aula.curso)))

  const blocos = [
    { id: 1, horasIni: '19:00:00', horasFim: '20:40:00', label: '1º Horário' },
    { id: 2, horasIni: '20:50:00', horasFim: '22:30:00', label: '2º Horário' },
  ]

  return (
    <SafeAreaView>
      <ScrollView>
        {cursos.map((curso) => {
          const aulasDoCurso = aulas.filter((aula) => aula.curso === curso)

          return (
            <View key={curso} style={{ marginBottom: 20 }}>
              <Text style={{ fontSize: 16, fontWeight: '700', marginLeft: 10 }}>
                {curso}
              </Text>

              {blocos.map((bloco) => {
                const aulasDoBloco = aulasDoCurso.filter((aula) =>
                  aula.horasIni === bloco.horasIni && aula.horasFim === bloco.horasFim
                )

                if (aulasDoBloco.length === 0) return null

                return (
                  <View key={bloco.id} style={{ marginTop: 10 }}>
                    <Text
                      style={{
                        color: '#555',
                        fontSize: 14,
                        fontWeight: '600',
                        marginLeft: 10,
                      }}
                    >
                      {bloco.label}
                    </Text>

                    <CourseView>
                      {aulasDoBloco.map((aula) => (
                        <Link 
                          key={aula.id}
                          href={{
                            pathname: '/subjectDetails',
                          }}
                        >
                          <SubjectCard
                            key={aula.id}
                            semester={aula.semestre}
                            professor={aula.professor}
                            subject={aula.disciplina}
                            classroom={aula.local}
                            horasIni={aula.horasIni}
                            horasFim={aula.horasFim}
                          />
                        </Link>
                      ))}
                    </CourseView>
                  </View>
                )
              })}
            </View>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Index
