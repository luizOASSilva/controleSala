import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Text } from 'react-native'
import { PrimaryButton, TextInputField } from './LessonForm.styles'
import { LessonFormProps, ProfessorFormProps } from './LessonForm.types'

const LessonForm: React.FC<ProfessorFormProps> = ({ onProfessorChange, onSubjectChange }) => {
  const inputConfig: { placeholder: string; name: keyof LessonFormProps }[] = [
    { placeholder: 'Digite o nome do professor:', name: 'professor' },
    { placeholder: 'Digite o nome da matéria:', name: 'subject' }
  ]

  const { control, handleSubmit } = useForm<LessonFormProps>({
    defaultValues: {
      professor: '',
      subject: '',
      classroom: '',
    },
  })

  const onSubmit = (data: LessonFormProps) => {
    console.log(data)
    // Aqui você pode chamar a API para criar ou atualizar a aula
  }

  return (
    <>
      {inputConfig.map((config, index) => (
        <Controller
          key={index}
          control={control}
          rules={{ required: true }}
          name={config.name}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInputField
              placeholder={config.placeholder}
              value={value as string}
              onBlur={onBlur}
              onChangeText={(text) => {
                onChange(text) 
                if (config.name === 'professor') {
                  onProfessorChange?.(text)
                }
                if(config.name === 'subject') {
                  onSubjectChange?.(text);
                }
              }}
            />
          )}
        />
      ))}
      <PrimaryButton onPress={handleSubmit(onSubmit)}>
        <Text style={{ color: 'white', fontWeight: '800' }}>Enviar</Text>
      </PrimaryButton>
    </>
  )
}

export default LessonForm