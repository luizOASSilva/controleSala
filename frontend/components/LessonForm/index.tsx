import React from 'react'
import { Text } from 'react-native'
import { Controller, useForm } from 'react-hook-form'
import { TextInputField, PrimaryButton } from './LessonForm.styles'
import { LessonFormProps } from './LessonForm.types'

const LessonForm: React.FC = () => {
  const inputConfig: { placeholder: string; name: keyof LessonFormProps }[] = [
    { placeholder: 'Digite o nome do professor:', name: 'professor' },
    { placeholder: 'Digite o nome da matéria:', name: 'subject' },
    { placeholder: 'Digite a sala:', name: 'classroom' },
  ]

  const { control, handleSubmit } = useForm<LessonFormProps>({
    defaultValues: { professor: '', subject: '', classroom: '' },
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
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInputField
              placeholder={config.placeholder}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
          name={config.name}
        />
      ))}
      <PrimaryButton onPress={handleSubmit(onSubmit)}>
        <Text style={{ color: 'white', fontWeight: '800' }}>Enviar</Text>
      </PrimaryButton>
    </>
  )
}

export default LessonForm
