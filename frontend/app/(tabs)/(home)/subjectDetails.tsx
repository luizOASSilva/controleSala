import { useLocalSearchParams, useRouter } from 'expo-router'
import { Text, TouchableOpacity, StyleSheet, Image, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome } from '@expo/vector-icons'

const subjectDetails = () => {
  const local = useLocalSearchParams()

  const router = useRouter()

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
      edges={['bottom']}
    >
      <Image
        resizeMode="stretch"
        source={{
          uri: 'https://scontent-gru2-2.xx.fbcdn.net/v/t39.30808-6/472801404_1154154016713107_5061183905138113767_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=-RS17ft2YAYQ7kNvwEDNf1o&_nc_oc=Adl1QC6oFEbPi3X2lc5Zr6G9mnMQE90H-jtP_QrNPXhMpyIodQGg6mYplevbeLJB1V4&_nc_zt=23&_nc_ht=scontent-gru2-2.xx&_nc_gid=xmXubcdvIlMTrX4jPtwzJg&oh=00_AfWNeXIbOyOkN6cNzjF2a_h8nO-2v_se7ZsKdJ5Xdc2YRg&oe=68A42FB7',
        }}
        style={styles.image}
      />
      <SafeAreaView style={styles.container}>
        <Text> {local.data} </Text>
      </SafeAreaView>

      <TouchableOpacity
        style={styles.editButton}
        onPress={() => router.push('/subjectEdit')}
      >
        <FontAwesome
          size={25}
          name="edit"
          color={'black'}
          style={{ paddingLeft: 4, paddingTop: 2 }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default subjectDetails

const styles = StyleSheet.create({
  container: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: 'white',
    position: 'absolute',
    padding: 25,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '75%',
  },
  editButton: {
    width: 60,
    height: 60,
    backgroundColor: 'rgba(255, 0, 0, 0.85)',
    borderRadius: 100,
    right: 10,
    bottom: 10,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 325,
    transform: [{ translateY: -90 }],
  },
})
