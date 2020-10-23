import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native'
import { Feather, FontAwesome5 } from '@expo/vector-icons'

export interface RichTextEditorToolbarProps {
	containerStyle?: ViewStyle
	onButtonPress: (event: string, customJS?: boolean) => void
	toolbarBoldButton?: boolean
	toolbarUnderlineButton?: boolean
	toolbarItalicButton?: boolean
	toolbarImageButton?: boolean
	toolbarAlignLeftButton?: boolean
	toolbarAlignRightButton?: boolean
	toolbarAlignCenterButton?: boolean
	toolbarAlignJustifyButton?: boolean
	toolbarListUlButton?: boolean
	toolbarListOlButton?: boolean
	toolbarButtonStyle?: ViewStyle
}

const defaultProps = {
	toolbarBoldButton: true,
	toolbarUnderlineButton: true,
	toolbarItalicButton: true,
	toolbarImageButton: true,
	toolbarAlignLeftButton: false,
	toolbarAlignRightButton: false,
	toolbarAlignCenterButton: false,
	toolbarAlignJustifyButton: false,
	toolbarListUlButton: false,
	toolbarListOlButton: false,
}

export const RichTextEditorToolbar: React.FunctionComponent<RichTextEditorToolbarProps> = (props) => {
	const handlePress = (event: string, customJS?: boolean) => {
		if (props.onButtonPress) {
			props.onButtonPress(event, customJS)
		}
	}
	return (
		<View style={[Styles.container, props.containerStyle]}>
			<View style={{ flexDirection: 'row' }}>
				{props.toolbarBoldButton && (
					<TouchableOpacity
						style={props.toolbarButtonStyle ? props.toolbarButtonStyle : Styles.button}
						onPress={() => handlePress('bold')}>
						<Text style={{ fontWeight: 'bold' }}>B</Text>
					</TouchableOpacity>
				)}
				{props.toolbarUnderlineButton && (
					<TouchableOpacity
						style={props.toolbarButtonStyle ? props.toolbarButtonStyle : Styles.button}
						onPress={() => handlePress('underline')}>
						<Text style={{ textDecorationLine: 'underline' }}>U</Text>
					</TouchableOpacity>
				)}
				{props.toolbarItalicButton && (
					<TouchableOpacity
						style={props.toolbarButtonStyle ? props.toolbarButtonStyle : Styles.button}
						onPress={() => handlePress('italic')}>
						<Text style={{ fontStyle: 'italic' }}>I</Text>
					</TouchableOpacity>
				)}
				{props.toolbarImageButton && (
					<TouchableOpacity
						style={props.toolbarButtonStyle ? props.toolbarButtonStyle : Styles.button}
						onPress={() => {
							handlePress(
								`(function () { let url = prompt('Enter image link here: ', ''); document.execCommand('insertHTML', false,'<br><br><img style="max-width: 100%;" src="' + url + '" alt="Image"><br><br>') })(); true;`,
								true
							)
						}}>
						<Text>Image</Text>
					</TouchableOpacity>
				)}
			</View>
			<View style={{ flexDirection: 'row', marginTop: 10 }}>
				{props.toolbarListUlButton && (
					<TouchableOpacity
						style={props.toolbarButtonStyle ? props.toolbarButtonStyle : Styles.button}
						onPress={() => handlePress('insertUnorderedList')}>
						<FontAwesome5 name='list-ul' size={16} />
					</TouchableOpacity>
				)}
				{props.toolbarListOlButton && (
					<TouchableOpacity
						style={props.toolbarButtonStyle ? props.toolbarButtonStyle : Styles.button}
						onPress={() => handlePress('insertOrderedList')}>
						<FontAwesome5 name='list-ol' size={16} />
					</TouchableOpacity>
				)}
				{props.toolbarAlignLeftButton && (
					<TouchableOpacity
						style={props.toolbarButtonStyle ? props.toolbarButtonStyle : Styles.button}
						onPress={() => handlePress('justifyLeft')}>
						<Feather name='align-left' size={20} />
					</TouchableOpacity>
				)}
				{props.toolbarAlignCenterButton && (
					<TouchableOpacity
						style={props.toolbarButtonStyle ? props.toolbarButtonStyle : Styles.button}
						onPress={() => handlePress('justifyCenter')}>
						<Feather name='align-center' size={20} />
					</TouchableOpacity>
				)}
				{props.toolbarAlignJustifyButton && (
					<TouchableOpacity
						style={props.toolbarButtonStyle ? props.toolbarButtonStyle : Styles.button}
						onPress={() => handlePress('justifyFull')}>
						<Feather name='align-justify' size={20} />
					</TouchableOpacity>
				)}
				{props.toolbarAlignRightButton && (
					<TouchableOpacity
						style={props.toolbarButtonStyle ? props.toolbarButtonStyle : Styles.button}
						onPress={() => handlePress('justifyRight')}>
						<Feather name='align-right' size={20} />
					</TouchableOpacity>
				)}
			</View>
		</View>
	)
}

RichTextEditorToolbar.defaultProps = defaultProps

const Styles = StyleSheet.create({
	container: {
		marginTop: 10,
		marginBottom: 10,
		alignItems: 'center',
	},
	button: {
		backgroundColor: '#C9E4CA',
		padding: 10,
		marginLeft: 5,
		marginRight: 5,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
	},
})
