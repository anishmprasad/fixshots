import { View, Text, ScrollView, Image } from 'react-native';

const logo = {
	uri: 'https://reactnative.dev/img/tiny_logo.png',
	width: 64,
	height: 64,
};

export default function Settings() {
	return (
		<ScrollView>
			<Text style={{ fontSize: 96 }}>Scroll me plz</Text>
			<Image source={logo} />
			<Image source={logo} />
			<Image source={logo} />
			<Image source={logo} />
			<Image source={logo} />
			<Text style={{ fontSize: 96 }}>If you like</Text>
			<Image source={logo} />
			<Image source={logo} />
			<Image source={logo} />
			<Image source={logo} />
			<Image source={logo} />
			<Text style={{ fontSize: 96 }}>Scrolling down</Text>
			<Image source={logo} />
			<Image source={logo} />
			<Image source={logo} />
			<Image source={logo} />
			<Image source={logo} />
			<Text style={{ fontSize: 96 }}>What's the best</Text>
			<Image source={logo} />
			<Image source={logo} />
			<Image source={logo} />
			<Image source={logo} />
			<Image source={logo} />
			<Text style={{ fontSize: 96 }}>Framework around?</Text>
			<Image source={logo} />
			<Image source={logo} />
			<Image source={logo} />
			<Image source={logo} />
			<Image source={logo} />
			<Text style={{ fontSize: 80 }}>React Native</Text>
		</ScrollView>
	);
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Settings!</Text>
		</View>
	);
}
