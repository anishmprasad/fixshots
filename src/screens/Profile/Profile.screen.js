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
  width: 100,
  height: 100, 
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
              <Image 
                source={logo} 
                style={{
                  borderRadius: 100 / 2
                }}  
              />
            </TouchableOpacity>
              <View
                style={{
                  position: 'relative',
                  marginBottom : 30
                }}
              >
                <Text
                  style={{
                    position: 'absolute',
                    zIndex: 1,
                    backgroundColor: '#fff',
                    left : 10,
                    fontSize : 12,
                  }}
                >First name</Text>
                <Text style={{
                  justifyContent : 'center',
                  alignContent: 'center',
                  backgroundColor: '#fff',
                  padding : 10,
                  marginTop : 10,
                  fontSize : 18,
                  borderWidth: 1,
                  borderColor: "#ccc",
                  borderRadius : 10,
                  // flex:0
                }}>
                  Anish
                </Text>
              </View>

              <View
                style={{
                  position: 'relative',
                  marginBottom : 30
                }}
              >
                <Text
                  style={{
                    position: 'absolute',
                    zIndex: 1,
                    backgroundColor: '#fff',
                    left : 10,
                    fontSize : 12,
                  }}
                >Last name</Text>
                <Text style={{
                  justifyContent : 'center',
                  alignContent: 'center',
                  backgroundColor: '#fff',
                  padding : 10,
                  marginTop : 10,
                  fontSize : 18,
                  borderWidth: 1,
                  borderColor: "#ccc",
                  borderRadius : 10,
                  // flex:0
                }}>
                  Prasad
                </Text>
              </View>

              <View
                style={{
                  position: 'relative',
                  marginBottom : 30
                }}
              >
                <Text
                  style={{
                    position: 'absolute',
                    zIndex: 1,
                    backgroundColor: '#fff',
                    left : 10,
                    fontSize : 12
                  }}
                >E-Mail</Text>
                <Text style={{
                  justifyContent : 'center',
                  alignContent: 'center',
                  backgroundColor: '#fff',
                  padding : 10,
                  marginTop : 10,
                  fontSize : 18,
                  borderWidth: 1,
                  borderColor: "#ccc",
                  borderRadius : 10,
                  // flex:0
                }}>
                  anish.m.prasad@gmail.com
                </Text>
              </View>

              <View
                style={{
                  position: 'relative'
                }}
              >
                <Text
                  style={{
                    position: 'absolute',
                    zIndex: 1,
                    backgroundColor: '#fff',
                    left : 10,
                    fontSize : 12
                  }}
                >Phone number</Text>
                <Text style={{
                  justifyContent : 'center',
                  alignContent: 'center',
                  backgroundColor: '#fff',
                  padding : 10,
                  marginTop : 10,
                  fontSize : 18,
                  borderWidth: 1,
                  borderColor: "#ccc",
                  borderRadius : 10,
                  // flex:0
                }}>
                  9633757400
                </Text>
              </View>
              
              {/* <Text style={{
                justifyContent : 'center',
                alignContent: 'center',
                backgroundColor: '#ccc',
                padding : 10,
                marginTop : 10,
                fontSize : 18
              }}>
                9633757400
              </Text> */}
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
