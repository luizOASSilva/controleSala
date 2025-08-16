import ProfessorList from '@/components/ProfessorList'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {

    const professors = [
        { name: 'Márcio',  image: 'https://reactnative.dev/img/tiny_logo.png', isActive: true },
        { name: 'Clayton',  image: 'https://reactnative.dev/img/tiny_logo.png', isActive: true },
        { name: 'Eleandro',  image: 'https://reactnative.dev/img/tiny_logo.png', isActive: false },
        { name: 'Giancarlo',  image: 'https://reactnative.dev/img/tiny_logo.png', isActive: false },
        { name: 'Roberto',  image: 'https://reactnative.dev/img/tiny_logo.png', isActive: false },
    ]

    return (
        <SafeAreaView>
            {
                <ProfessorList professors={professors}/>
            }
        </SafeAreaView>
    )
}

export default index
