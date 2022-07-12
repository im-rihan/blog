import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
	const { state } = useContext(Context);

	const blogPost = state.find(
		(blogPost) => blogPost.id === navigation.getParam('id')
	);

	return (
		<View style={styles.row}>
			<Text style={styles.title} >{blogPost.title}</Text>
			<Text>{blogPost.content}</Text>
		</View>
	);
};

ShowScreen.navigationOptions = ({ navigation }) => {
	return {
		headerRight: () => (
			<TouchableOpacity
				onPress={() =>
					navigation.navigate('Edit', { id: navigation.getParam('id') })
				}
			>
				<EvilIcons style={{ marginRight: 20 }} name="pencil" size={35} />
			</TouchableOpacity>
		),
	};
};

const styles = StyleSheet.create({
	row: {
		paddingVertical: 20,
		paddingHorizontal: 10,
		borderTopWidth: 1,
		borderColor: 'gray'
	},
	title: {
		fontSize: 25
	},
	icon: {
		fontSize: 24
	}
});

export default ShowScreen;
