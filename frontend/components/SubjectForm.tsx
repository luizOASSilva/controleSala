import { TextInput, StyleSheet } from 'react-native'
import { Controller, useForm } from 'react-hook-form'
import React from 'react'

const SubjectForm = () => {

    const {
        control,
        handleSubmit, 
        formState: { errors }
    } = useForm({
        defaultValues: {
            nome: '',
            sobrenome: '',
        },
    })
    
    const onSubmit = (data: string) => console.log(data)

    return (
        <React.Fragment>
            <Controller 
                control={control} 
                rules={{required: true}} 
                render={({ field: { onChange, onBlur, value }}) => (
                    <TextInput
                        placeholder='Primeiro nome:'
                        value= {value}
                    />
                )} 
                name = 'nome'
            />
            <Controller 
                control={control} 
                rules={{required: true}} 
                render={({ field: { onChange, onBlur, value }}) => (
                    <TextInput
                        style={styles.input}
                        placeholder='Segundo nome:'
                        value= {value}
                        onChange={onChange}
                        onBlur={onBlur}
                    />
                )} 
                name = 'sobrenome'
            />
        </React.Fragment>
    )
}

export default SubjectForm

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
    }
})
