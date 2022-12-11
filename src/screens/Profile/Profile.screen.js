import React from 'react';
import {
	SafeAreaView,
	View,
	Text,
	StatusBar,
	TouchableOpacity,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
	Image,
	TextInput,
} from 'react-native';
import styles from '../Profile/Profile.style';
import Icon from 'react-native-vector-icons/Ionicons';

const logo = {
	uri: 'https://reactnative.dev/img/tiny_logo.png',
	width: 100,
	height: 100,
};

const Home = ({ navigation }) => {
	return (
		<>
			<StatusBar barStyle='dark-content' backgroundColor={'#f9f9f9'} />
			{/* <SafeAreaView style={styles.SafeAreaView1} /> */}
			<SafeAreaView style={styles.SafeAreaView}>
				<View style={styles.outerWrapper}>
					{/* <Icon name={'ios-settings'} size={100} color={'green'} /> */}
					<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
						<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
							<View>
								<TouchableOpacity
									onPress={() => Alert.alert('Want to edit profile image?')}
									style={styles.buttonStyle}
								>
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
											borderRadius: 100 / 2,
										}}
									/>
								</TouchableOpacity>
								<View
									style={{
										position: 'relative',
										marginBottom: 30,
									}}
								>
									<Text
										style={{
											position: 'absolute',
											zIndex: 1,
											backgroundColor: '#fff',
											left: 10,
											fontSize: 12,
										}}
									>
										First name
									</Text>
									<TextInput
                    onChangeText={() => {}}
                    placeholder='First name'
                    keyboardType='default'
										style={{
											justifyContent: 'center',
											alignContent: 'center',
											backgroundColor: '#fff',
											padding: 10,
											marginTop: 10,
											fontSize: 18,
											borderWidth: 1,
											borderColor: '#ccc',
											borderRadius: 10,
											// flex:0
										}}
									>
										Anish
									</TextInput>
								</View>

								<View
									style={{
										position: 'relative',
										marginBottom: 30,
									}}
								>
									<Text
										style={{
											position: 'absolute',
											zIndex: 1,
											backgroundColor: '#fff',
											left: 10,
											fontSize: 12,
										}}
									>
										Last name
									</Text>
									<TextInput
                      onChangeText={() => {}}
                      placeholder='Last name'
                      keyboardType='default'
										style={{
											justifyContent: 'center',
											alignContent: 'center',
											backgroundColor: '#fff',
											padding: 10,
											marginTop: 10,
											fontSize: 18,
											borderWidth: 1,
											borderColor: '#ccc',
											borderRadius: 10,
											// flex:0
										}}
									>
										Prasad
									</TextInput>
								</View>

								<View
									style={{
										position: 'relative',
										marginBottom: 30,
									}}
								>
									<Text
										style={{
											position: 'absolute',
											zIndex: 1,
											backgroundColor: '#fff',
											left: 10,
											fontSize: 12,
										}}
									>
										E-Mail
									</Text>
									<TextInput
                    onChangeText={() => {}}
                    placeholder='E-Mail'
                    keyboardType='email-address'
										style={{
											justifyContent: 'center',
											alignContent: 'center',
											backgroundColor: '#fff',
											padding: 10,
											marginTop: 10,
											fontSize: 18,
											borderWidth: 1,
											borderColor: '#ccc',
											borderRadius: 10,
											// flex:0
										}}
									>
										anish.m.prasad@gmail.com
									</TextInput>
								</View>

								<View
									style={{
										position: 'relative',
									}}
								>
									<Text
										style={{
											position: 'absolute',
											zIndex: 1,
											backgroundColor: '#fff',
											left: 10,
											fontSize: 12,
										}}
									>
										Phone number
									</Text>
									<TextInput
										onChangeText={() => {}}
										placeholder='Phone number'
										keyboardType='numeric'
										style={{
											justifyContent: 'center',
											alignContent: 'center',
											backgroundColor: '#fff',
											padding: 10,
											marginTop: 10,
											fontSize: 18,
											borderWidth: 1,
											borderColor: '#ccc',
											borderRadius: 10,
											// flex:0
										}}
									>
										9633757400
									</TextInput>
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
						</TouchableWithoutFeedback>
					</KeyboardAvoidingView>
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
	);
};

export default Home;
