import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native'
import styles from '../Profile/Profile.style'
import Icon from 'react-native-vector-icons/Ionicons'

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};

const Home = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      {/* <SafeAreaView style={styles.SafeAreaView1} /> */}
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.outerWrapper}>
          {/* <Icon name={'ios-settings'} size={100} color={'green'} /> */}
          <View>
            <TouchableOpacity
              onPress={() => Alert.alert('Want to edit profile image?')}
              style={styles.buttonStyle}>
              {/* <Text style={styles.text}>
                this is{' '}
                <Text style={{ fontWeight: 'bold', color: 'green' }}>
                  {' '}
                  PROFILE{' '}
                </Text>{' '}
                screen
              </Text> */}
              <Image source={logo} />
            </TouchableOpacity>
            <Text style={{
                justifyContent : 'center',
                alignContent: 'center',
                backgroundColor: '#ccc',
                padding : 10,
                marginTop : 10,
                fontSize : 18
                // flex:0
              }}>
                Anish M Prasad
              </Text>
              <Text style={{
                justifyContent : 'center',
                alignContent: 'center',
                backgroundColor: '#ccc',
                padding : 10,
                marginTop : 10,
                fontSize : 18
              }}>
                9633757400
              </Text>
          </View>
        </View>
        {/* <View
          style={{
            alignContent: 'flex-end',
            alignItems: 'flex-end',
            padding: 10
          }}>
          <Text style={{ color: '#808080' }}>Anish M Prasad</Text>
        </View> */}
      </SafeAreaView>
    </>
  )
}

export default Home
