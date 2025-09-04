import { TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { Controller, useForm } from 'react-hook-form'
import React from 'react'
import { Text } from 'react-native'

const SubjectForm = () => {
  interface FormData {
    professor: string
    subject: string
    classroom: string
  }

  const inputConfig: { placeholder: string; name: keyof FormData }[] = [
    { placeholder: 'Digite o nome do professor:', name: 'professor' },
    { placeholder: 'Digite o nome da matéria:', name: 'subject' },
    { placeholder: 'Digite da disciplina:', name: 'classroom' },
  ]

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      professor: '',
      subject: '',
      classroom: '',
    },
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <React.Fragment>
      {inputConfig.map((config, index) => (
        <Controller
          key={index}
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder={config.placeholder}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
          name={config.name}
        />
      ))}
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={{ color: 'white', fontWeight: 800 }}>Enviar</Text>
      </TouchableOpacity>
    </React.Fragment>
  )
}

export default SubjectForm

const styles = StyleSheet.create({
  input: {
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    padding: 10,
    backgroundColor: 'red',
    alignItems: 'center',
    borderRadius: 5,
  },
})
