import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flexGrow: 1,
		paddingTop: 10,
		paddingHorizontal: 10,
	},

	container: {
		paddingTop: 50,
	},

	SafeAreaView1: { backgroundColor: '#FFF', flex: 0 },

	SafeAreaView: {
		flex: 1,
		backgroundColor: '#FFF',
	},

	outerWrapper: {
		flex: 1,
		// alignItems: 'center',
		// justifyContent: 'center',
		backgroundColor: '#FFF',
		marginTop: 40,
		padding: 40,
	},

	buttonStyle: {
		// backgroundColor: '#EEE',
		// paddingHorizontal: 40,
		// paddingVertical: 30,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 0.5,
		borderColor: '#F0F0F0',
		marginBottom: 20,
		borderRadius: 20,
	},

	text: { fontSize: 18, color: '#808080', fontWeight: 'bold' },

	thumbnail: {
		width: 370,
		// width: '100%',
		height: 300,
		flex: 1,
		resizeMode: 'cover', // or 'stretch'
	},
	scrollView: {
		flexGrow: 1,
		// flex: 1,
		// alignItems: 'center',
		justifyContent: 'center',
	},
});
