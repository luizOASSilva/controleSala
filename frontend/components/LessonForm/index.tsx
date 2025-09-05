import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Text } from 'react-native';
import { PrimaryButton, TextInputField } from './LessonForm.styles';
import { LessonFormProps } from './LessonForm.types';

const SubjectForm = () => {
  const inputConfig: { placeholder: string; name: keyof LessonFormProps }[] = [
    { placeholder: 'Digite o nome do professor:', name: 'professor' },
    { placeholder: 'Digite o nome da matéria:', name: 'subject' },
    { placeholder: 'Digite da disciplina:', name: 'classroom' },
  ];

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LessonFormProps>({
    defaultValues: {
      professor: '',
      subject: '',
      classroom: '',
    },
  });

  const onSubmit = (data: LessonFormProps) => {
    console.log(data);
  };

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default SubjectForm;
