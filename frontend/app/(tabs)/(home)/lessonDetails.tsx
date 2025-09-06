import { useLocalSearchParams, useRouter } from 'expo-router';
import { Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import {
  LessonDetailsScreen,
  LessonCoverImage,
  LessonInfoContainer,
  EditLessonButton,
} from '../../../features/home/lessonDetails.styles';

const lessonDetails = () => {
  const searchParams = useLocalSearchParams();
  const router = useRouter();

  return (
    <LessonDetailsScreen edges={['bottom']}>
      <LessonCoverImage
        resizeMode="stretch"
        source={{
          uri: 'https://scontent-gru2-2.xx.fbcdn.net/v/t39.30808-6/472801404_1154154016713107_5061183905138113767_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=-RS17ft2YAYQ7kNvwEDNf1o&_nc_oc=Adl1QC6oFEbPi3X2lc5Zr6G9mnMQE90H-jtP_QrNPXhMpyIodQGg6mYplevbeLJB1V4&_nc_zt=23&_nc_ht=scontent-gru2-2.xx&_nc_gid=xmXubcdvIlMTrX4jPtwzJg&oh=00_AfWNeXIbOyOkN6cNzjF2a_h8nO-2v_se7ZsKdJ5Xdc2YRg&oe=68A42FB7',
        }}
      />

      <LessonInfoContainer>
        <Text>{searchParams.lessonName || 'Nome da aula'}</Text>
      </LessonInfoContainer>

      <EditLessonButton onPress={() => router.push('/lessonEdit')}>
        <FontAwesome
          size={25}
          name="edit"
          color="black"
          style={{ paddingLeft: 4, paddingTop: 2 }}
        />
      </EditLessonButton>
    </LessonDetailsScreen>
  );
};

export default lessonDetails;
